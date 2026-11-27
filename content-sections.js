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

  const contentLabels = {
    narrator: "الراوي",
    reference: "التخريج والمرجع",
    explanation: "الشرح",
    meaning: "المعنى",
    timing: "وقت الذكر وفضله",
    author: "المؤلف",
    book_title: "عنوان الكتاب",
    description: "نبذة",
    surah: "السورة",
    ayah: "الآية",
    tafsir_source: "مصدر التفسير"
  };

  function appendContent(parent, value) {
    if (!value || typeof value !== "object") return;
    for (const key of ["text", "body", "text_ar", "body_ar"]) {
      if (typeof value[key] === "string" && value[key].trim()) {
        addText(parent, "p", value[key], "content-body");
        break;
      }
    }

    for (const key of Object.keys(contentLabels)) {
      const field = value[key];
      if (typeof field !== "string" || !field.trim()) continue;
      const line = document.createElement("p");
      line.className = "content-detail";
      const label = document.createElement("strong");
      label.textContent = contentLabels[key] + ": ";
      line.appendChild(label);
      line.appendChild(document.createTextNode(field.trim()));
      parent.appendChild(line);
    }

    if (Array.isArray(value.paragraphs)) {
      value.paragraphs.forEach(paragraph => {
        if (typeof paragraph === "string") addText(parent, "p", paragraph, "content-body");
      });
    }

    for (const group of [
      { key: "topics", title: "موضوعات هذا الباب" },
      { key: "items", title: "العناصر" },
      { key: "sections", title: "الموضوعات" },
      { key: "timeline", title: "محطات زمنية" }
    ]) {
      if (!Array.isArray(value[group.key]) || !value[group.key].length) continue;
      addText(parent, "h4", group.title, "content-subheading");
      const list = document.createElement("ul");
      list.className = group.key === "timeline" ? "content-list content-timeline" : "content-list";
      value[group.key].forEach(entry => {
        let line = "";
        if (typeof entry === "string") line = entry;
        else if (entry && typeof entry === "object") {
          line = [entry.title, entry.text, entry.body, entry.place, entry.period]
            .filter(part => typeof part === "string" && part.trim()).join(" — ");
        }
        if (line) addText(list, "li", line);
      });
      if (list.childNodes.length) parent.appendChild(list);
    }
  }

  function renderEntry(item, container) {
    const article = document.createElement("article");
    article.className = "content-entry";
    addText(article, "h3", item.title);
    addText(article, "p", item.summary);
    const content = document.createElement("div");
    content.className = "content-entry-body";
    appendContent(content, item.content);
    if (content.childNodes.length) article.appendChild(content);
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


  document.addEventListener("DOMContentLoaded", () => {
    load();
  });
})();
