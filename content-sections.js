"use strict";

/*
 * Published Islamic content loader.
 * All user-visible text is inserted with textContent (never as HTML).
 */
(function () {
  const sectionMap = {
    hadith: ["hadith"],
    adhkar: ["adhkar"],
    dua: ["dua"],
    tafsir: ["tafsir"],
    seerah: ["seerah"],
    fiqh: ["fiqh"],
    articles: ["article"],
    library: ["article"]
  };

  function addText(parent, tag, value, className) {
    if (typeof value !== "string" || !value.trim()) return;
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value.trim();
    parent.appendChild(node);
  }

  function contentText(value) {
    if (!value || typeof value !== "object") return "";
    const direct = ["text", "body", "description", "text_ar", "body_ar", "summary"];
    for (const key of direct) {
      if (typeof value[key] === "string" && value[key].trim()) return value[key].trim();
    }
    for (const key of ["paragraphs", "sections", "items", "timeline", "topics"]) {
      if (Array.isArray(value[key])) {
        return value[key].map(item => {
          if (typeof item === "string") return item;
          if (item && typeof item === "object") {
            return [item.title, item.text, item.body, item.place, item.period].filter(v => typeof v === "string").join(" — ");
          }
          return "";
        }).filter(Boolean).join("\n\n");
      }
    }
    return "";
  }

  function renderEntry(item, container) {
    const article = document.createElement("article");
    article.className = "content-entry";
    addText(article, "h3", item.title);
    addText(article, "p", item.summary);
    addText(article, "p", contentText(item.content));
    if (item.source_name || item.authenticity_status) {
      const source = document.createElement("p");
      source.className = "content-source";
      const details = [item.source_name, item.authenticity_status].filter(Boolean).join(" — ");
      source.textContent = details;
      if (typeof item.source_url === "string" && /^https:\/\//i.test(item.source_url)) {
        const link = document.createElement("a");
        link.href = item.source_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = "المصدر";
        source.append(" ", link);
      }
      article.appendChild(source);
    }
    if (!article.textContent.trim()) return;
    container.appendChild(article);
  }

  async function load() {
    const client = window.supabaseClient;
    const containers = Array.from(document.querySelectorAll(".content-items[data-content-slug]"));
    if (!containers.length) return;
    if (!client) {
      containers.forEach(el => { el.textContent = "تعذر الاتصال بقاعدة البيانات."; });
      return;
    }

    try {
      const [categoriesResult, itemsResult] = await Promise.all([
        client.from("categories").select("id,slug").eq("is_active", true),
        client.from("content_items")
          .select("id,category_id,content_type,title,summary,content,source_name,source_url,authenticity_status,published_at")
          .eq("status", "published")
          .order("published_at", { ascending: false })
          .limit(200)
      ]);
      if (categoriesResult.error) throw categoriesResult.error;
      if (itemsResult.error) throw itemsResult.error;

      const categoryIds = new Map((categoriesResult.data || []).map(row => [row.slug, row.id]));
      const items = itemsResult.data || [];

      containers.forEach(container => {
        const slug = container.dataset.contentSlug;
        const allowedTypes = sectionMap[slug] || [];
        const categoryId = categoryIds.get(slug);
        const matches = items.filter(item => {
          if (slug === "library") return item.category_id === categoryId;
          return allowedTypes.includes(item.content_type) &&
            (!categoryId || !item.category_id || item.category_id === categoryId);
        });
        container.replaceChildren();
        if (!matches.length) {
          const empty = document.createElement("p");
          empty.className = "content-empty";
          empty.textContent = "لا يوجد محتوى منشور وموثق في هذا القسم حالياً. سيظهر هنا بعد مراجعته ونشره.";
          container.appendChild(empty);
          return;
        }
        matches.forEach(item => renderEntry(item, container));
      });
    } catch (error) {
      console.error("Islamiyat content loading error:", error);
      containers.forEach(container => {
        container.textContent = "تعذر تحميل المحتوى حالياً. يرجى المحاولة لاحقاً.";
      });
    }
  }

  function setupQuranFontControls() {
    let size = 30;
    const apply = () => document.documentElement.style.setProperty("--quran-font-size", size + "px");
    const increase = document.getElementById("quran-font-increase");
    const decrease = document.getElementById("quran-font-decrease");
    const reset = document.getElementById("quran-font-reset");
    if (increase) increase.addEventListener("click", () => { size = Math.min(48, size + 2); apply(); });
    if (decrease) decrease.addEventListener("click", () => { size = Math.max(22, size - 2); apply(); });
    if (reset) reset.addEventListener("click", () => { size = 30; apply(); });
    apply();
  }

  document.addEventListener("DOMContentLoaded", () => {
    setupQuranFontControls();
    load();
  });
})();
