"use strict";

/*
 * ISLAMIYAT — Category experience enhancement
 * Reads only active category metadata and published-content counts.
 * Does not write to Supabase or alter existing category/content records.
 */
(function () {
  const labels = {
    ar: {
      published: "مادة منشورة",
      surahs: "سورة",
      open: "استكشف القسم",
      back: "العودة إلى الأقسام",
      search: "ابحث داخل هذا القسم...",
      empty: "لا توجد نتائج تطابق بحثك.",
      countUnavailable: "المحتوى الموثق يظهر هنا بعد مراجعته ونشره."
    },
    en: {
      published: "published items",
      surahs: "Surahs",
      open: "Explore section",
      back: "Back to sections",
      search: "Search within this section...",
      empty: "No results match your search.",
      countUnavailable: "Reviewed and published content will appear here."
    }
  };

  const slugByAnchor = {
    quran: "quran", hadith: "hadith", adhkar: "adhkar", dua: "dua",
    tafsir: "tafsir", seerah: "seerah", fiqh: "fiqh",
    articles: "articles", library: "library"
  };

  function currentLabels() {
    return document.documentElement.lang === "en" ? labels.en : labels.ar;
  }

  function addCardMetadata(card, count, isQuran) {
    let meta = card.querySelector(".category-card-meta");
    if (!meta) {
      meta = document.createElement("span");
      meta.className = "category-card-meta";
      const arrow = card.querySelector(".card-arrow");
    if (arrow) card.insertBefore(meta, arrow);
    else card.appendChild(meta);
    }
    const t = currentLabels();
    meta.textContent = isQuran
      ? count + " " + t.surahs
      : count + " " + t.published;
  }

  function setupSectionSearch(container) {
    const section = container.closest(".content-section");
    if (!section || section.querySelector(".section-content-search")) return;

    const wrapper = document.createElement("div");
    wrapper.className = "section-content-tools";

    const input = document.createElement("input");
    input.type = "search";
    input.className = "section-content-search";
    input.placeholder = currentLabels().search;
    input.setAttribute("aria-label", currentLabels().search);

    const back = document.createElement("a");
    back.className = "section-back-link";
    back.href = "#sections";
    back.textContent = currentLabels().back;

    wrapper.append(input, back);
    container.parentNode.insertBefore(wrapper, container);

    input.addEventListener("input", () => {
      const query = input.value.trim().toLocaleLowerCase();
      let visible = 0;
      container.querySelectorAll(".content-entry").forEach(entry => {
        const matches = entry.textContent.toLocaleLowerCase().includes(query);
        entry.hidden = !matches;
        if (matches) visible++;
      });
      let empty = container.querySelector(".section-search-empty");
      if (!empty) {
        empty = document.createElement("p");
        empty.className = "section-search-empty";
        empty.setAttribute("role", "status");
        container.appendChild(empty);
      }
      empty.textContent = currentLabels().empty;
      empty.hidden = query === "" || visible > 0;
    });
  }

  function refreshLanguageLabels() {
    const t = currentLabels();
    document.querySelectorAll(".category-card").forEach(card => {
      const meta = card.querySelector(".category-card-meta");
      if (!meta) return;
      const anchor = card.getAttribute("href")?.slice(1);
      const value = Number(meta.dataset.count || 0);
      meta.textContent = anchor === "quran" ? value + " " + t.surahs : value + " " + t.published;
    });
    document.querySelectorAll(".section-content-search").forEach(input => {
      input.placeholder = t.search;
      input.setAttribute("aria-label", t.search);
    });
    document.querySelectorAll(".section-back-link").forEach(link => { link.textContent = t.back; });
    document.querySelectorAll(".section-search-empty").forEach(node => { node.textContent = t.empty; });
  }

  async function enhance() {
    const client = window.supabaseClient;
    if (!client) return;

    try {
      const [categoryResult, itemResult, surahResult] = await Promise.all([
        client.from("categories").select("id,slug,is_active").eq("is_active", true),
        client.from("content_items").select("category_id").eq("status", "published").limit(1000),
        client.from("quran_surahs").select("surah_number")
      ]);
      if (categoryResult.error) throw categoryResult.error;
      if (itemResult.error) throw itemResult.error;
      if (surahResult.error) throw surahResult.error;

      const ids = new Map((categoryResult.data || []).map(row => [row.slug, row.id]));
      const counts = new Map();
      (itemResult.data || []).forEach(item => {
        if (item.category_id) counts.set(item.category_id, (counts.get(item.category_id) || 0) + 1);
      });

      document.querySelectorAll(".category-card[href^='#']").forEach(card => {
        const anchor = card.getAttribute("href").slice(1);
        const slug = slugByAnchor[anchor];
        if (!slug || !ids.has(slug)) {
          card.hidden = true;
          return;
        }
        const isQuran = slug === "quran";
        const count = isQuran
          ? (surahResult.data || []).length
          : (counts.get(ids.get(slug)) || 0);
        addCardMetadata(card, count, isQuran);
        card.setAttribute("aria-label", card.querySelector("h3")?.textContent || slug);
      });

      document.querySelectorAll(".content-items[data-content-slug]").forEach(setupSectionSearch);
      refreshLanguageLabels();
    } catch (error) {
      console.warn("Islamiyat category enhancement unavailable:", error);
      // Keep the original category navigation and content rendering usable.
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    enhance();
    const languageButton = document.getElementById("language-button");
    if (languageButton) languageButton.addEventListener("click", () => setTimeout(refreshLanguageLabels, 0));
  });
})();
