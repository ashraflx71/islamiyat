
"use strict";

/*
 * ISLAMIYAT
 * Main Application
 * Arabic / English
 */

const Islamiyat = {
  version: "2.0.0",

  language: "ar",

  translations: {
    ar: {
      brand: "إسلاميات",
      tagline: "نور العلم والذكر والهداية",
      nav: ["الرئيسية", "الأقسام", "القرآن الكريم", "عن المنصة"],
      languageButton: "English",
      menuLabel: "فتح القائمة",
      heroLabel: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      heroTitle: "إسلاميات",
      heroSubtitle: "نور العلم والذكر والهداية",
      heroDescription: "رحلة إيمانية تجمع القرآن الكريم والسنة النبوية والأذكار والأدعية والعلوم الإسلامية في مكان واحد، بمصادر موثوقة وتجربة رقمية تليق بعظمة العلم النافع.",
      discover: "اكتشف أقسام المنصة",
      searchPlaceholder: "ابحث في أقسام إسلاميات...",
      searchLabel: "بحث",
      journey: "رحلتك إلى المعرفة",
      sectionsTitle: "أقسام المنصة",
      sectionsDescription: "أبواب متنوعة للعلم والعبادة والمعرفة الإسلامية.",
      categories: [
        ["القرآن الكريم", "كتاب الله وتلاوة آياته وتدبر معانيه."],
        ["الحديث النبوي", "السنة النبوية والأحاديث ومصادرها."],
        ["الأذكار", "أذكار الصباح والمساء والأذكار اليومية."],
        ["الأدعية", "الأدعية المأثورة من القرآن والسنة."],
        ["التفسير", "تفسير الآيات وفهم معاني القرآن الكريم."],
        ["السيرة النبوية", "سيرة الرسول ﷺ ومواقفه ودروسه العظيمة."],
        ["الفقه الإسلامي", "العبادات والمعاملات والأحكام الشرعية."],
        ["المقالات الإسلامية", "موضوعات نافعة ومعرفة إسلامية موثقة."],
        ["المكتبة الإسلامية", "الكتب والمراجع والمصادر العلمية."]
      ],
      quranEyebrow: "كلام الله تعالى",
      quranTitle: "القرآن الكريم",
      quranNote: "سيتم عرض سور القرآن الكريم وآياته من قاعدة البيانات بعد تجهيز المحتوى القرآني الموثق.",
      hadithEyebrow: "هدي النبي ﷺ",
      hadithTitle: "السنة النبوية",
      hadithText: "نتطلع إلى تقديم الأحاديث النبوية مع مصادرها وتخريجها وبيان درجتها وفق المراجع المعتمدة.",
      adhkarEyebrow: "طمأنينة القلب",
      adhkarTitle: "الأذكار",
      adhkarText: "أذكار الصباح والمساء والأذكار اليومية من المصادر الموثوقة.",
      duaEyebrow: "الدعاء عبادة",
      duaTitle: "الأدعية",
      duaText: "أدعية القرآن الكريم والأدعية النبوية المأثورة.",
      tafsirEyebrow: "تدبر وفهم",
      tafsirTitle: "التفسير",
      tafsirText: "فهم معاني الآيات بالرجوع إلى كتب التفسير المعتمدة.",
      seerahEyebrow: "السيرة العطرة",
      seerahTitle: "السيرة النبوية",
      seerahText: "رحلة في سيرة الرسول محمد ﷺ ومراحل حياته المباركة.",
      fiqhEyebrow: "فقه وعبادة",
      fiqhTitle: "الفقه الإسلامي",
      fiqhText: "موضوعات فقهية منظمة مع توثيق المصادر وبيان مواضع الخلاف عند الحاجة.",
      articlesEyebrow: "علم ومعرفة",
      articlesTitle: "المقالات الإسلامية",
      articlesText: "مقالات هادفة وموثوقة في العلوم والمعارف الإسلامية.",
      libraryEyebrow: "كنوز المعرفة",
      libraryTitle: "المكتبة الإسلامية",
      libraryText: "كتب ومراجع علمية إسلامية مرتبة حسب التخصص.",
      aboutEyebrow: "رسالتنا",
      aboutTitle: "العلم النافع والأمانة",
      aboutText: "نسعى إلى تقديم محتوى إسلامي موثوق، يجمع بين صحة المعلومة وسهولة الوصول واحترام عقل الزائر ووقته.",
      values: [
        ["المصداقية", "الرجوع إلى المصادر الموثوقة."],
        ["الأمانة", "الدقة في نقل النصوص الشرعية."],
        ["العلم النافع", "معرفة يسهل الوصول إليها."]
      ],
      footerTagline: "نور العلم والذكر والهداية",
      footerLinks: ["الرئيسية", "الأقسام", "عن المنصة"],
      footerPrayer: "نسأل الله أن يجعل هذا العمل خالصًا لوجهه الكريم وأن ينفع به عباده.",
      backToTop: "العودة إلى الأعلى",
      noResults: "لم نعثر على أقسام تطابق بحثك."
    },

    en: {
      brand: "Islamiyat",
      tagline: "The Light of Knowledge, Remembrance and Guidance",
      nav: ["Home", "Sections", "The Holy Quran", "About"],
      languageButton: "العربية",
      menuLabel: "Open menu",
      heroLabel: "IN THE NAME OF ALLAH, THE MOST MERCIFUL",
      heroTitle: "Islamiyat",
      heroSubtitle: "The Light of Knowledge, Remembrance and Guidance",
      heroDescription: "A spiritual journey bringing together the Holy Quran, Prophetic Sunnah, remembrance, supplications and Islamic knowledge in one trusted place.",
      discover: "Explore Our Sections",
      searchPlaceholder: "Search Islamiyat sections...",
      searchLabel: "Search",
      journey: "Your Journey to Knowledge",
      sectionsTitle: "Our Sections",
      sectionsDescription: "A variety of paths to Islamic knowledge and worship.",
      categories: [
        ["The Holy Quran", "The Book of Allah, its recitation and reflection."],
        ["Prophetic Hadith", "The Sunnah, Hadith and their sources."],
        ["Daily Remembrance", "Morning, evening and daily supplications."],
        ["Supplications", "Authentic supplications from the Quran and Sunnah."],
        ["Quran Interpretation", "Understanding the meanings of Quranic verses."],
        ["Prophet's Biography", "The life and teachings of Prophet Muhammad ﷺ."],
        ["Islamic Jurisprudence", "Worship, transactions and Islamic rulings."],
        ["Islamic Articles", "Useful and documented Islamic knowledge."],
        ["Islamic Library", "Islamic books, references and resources."]
      ],
      quranEyebrow: "The Words of Allah",
      quranTitle: "The Holy Quran",
      quranNote: "Quranic chapters and verses will be displayed from the database after verified Quranic content is prepared.",
      hadithEyebrow: "The Prophet's Guidance ﷺ",
      hadithTitle: "Prophetic Sunnah",
      hadithText: "Explore Prophetic Hadith with their sources, references and authentication.",
      adhkarEyebrow: "Peace of Heart",
      adhkarTitle: "Daily Remembrance",
      adhkarText: "Morning, evening and daily remembrance from trusted sources.",
      duaEyebrow: "Supplication is Worship",
      duaTitle: "Supplications",
      duaText: "Supplications from the Holy Quran and authentic Prophetic traditions.",
      tafsirEyebrow: "Reflection and Understanding",
      tafsirTitle: "Quran Interpretation",
      tafsirText: "Understand Quranic meanings through recognized books of interpretation.",
      seerahEyebrow: "The Blessed Biography",
      seerahTitle: "Prophet's Biography",
      seerahText: "Discover the life and journey of Prophet Muhammad ﷺ.",
      fiqhEyebrow: "Islamic Law and Worship",
      fiqhTitle: "Islamic Jurisprudence",
      fiqhText: "Organized topics with documented sources and clarification of scholarly differences.",
      articlesEyebrow: "Knowledge and Learning",
      articlesTitle: "Islamic Articles",
      articlesText: "Meaningful and reliable articles on Islamic knowledge.",
      libraryEyebrow: "Treasures of Knowledge",
      libraryTitle: "Islamic Library",
      libraryText: "Islamic books and scholarly references organized by subject.",
      aboutEyebrow: "Our Mission",
      aboutTitle: "Beneficial Knowledge and Integrity",
      aboutText: "We aim to provide reliable Islamic content through accurate information, easy access and respect for our visitors.",
      values: [
        ["Credibility", "Relying on trusted sources."],
        ["Integrity", "Accuracy in transmitting religious texts."],
        ["Beneficial Knowledge", "Knowledge made easy to access."]
      ],
      footerTagline: "The Light of Knowledge, Remembrance and Guidance",
      footerLinks: ["Home", "Sections", "About"],
      footerPrayer: "May Allah make this work sincerely for His sake and benefit His servants.",
      backToTop: "Back to top",
      noResults: "No sections match your search."
    }
  },

  init() {
    this.updateYear();
    this.setupNavigation();
    this.setupSearch();
    this.setupLanguage();
    this.setupBackToTop();
    this.setupMobileMenu();

    this.applyLanguage(this.getSavedLanguage());

    console.log("Islamiyat initialized:", this.version);
  },

  updateYear() {
    const year = document.getElementById("current-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  },

  getSavedLanguage() {
    try {
      const saved = localStorage.getItem("islamiyat-language");
      return saved === "en" ? "en" : "ar";
    } catch {
      return "ar";
    }
  },

  setupLanguage() {
    const button = document.getElementById("language-button");

    if (!button) return;

    button.addEventListener("click", () => {
      const nextLanguage = this.language === "ar" ? "en" : "ar";

      this.applyLanguage(nextLanguage);

      try {
        localStorage.setItem("islamiyat-language", nextLanguage);
      } catch {
        // Continue without saving the preference.
      }
    });
  },

  applyLanguage(language) {
    const lang = language === "en" ? "en" : "ar";
    const t = this.translations[lang];

    this.language = lang;

    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    document.title = lang === "ar"
      ? "إسلاميات | نور العلم والذكر والهداية"
      : "Islamiyat | Knowledge, Remembrance and Guidance";

    this.setText(".brand-text strong", t.brand);
    this.setText(".brand-text small", t.tagline);

    const navLinks = document.querySelectorAll(".main-nav a");
    navLinks.forEach((link, i) => {
      if (t.nav[i]) link.textContent = t.nav[i];
    });

    const languageButton = document.getElementById("language-button");
    if (languageButton) {
      languageButton.textContent = t.languageButton;
    }

    const menuButton = document.getElementById("menu-button");
    if (menuButton) {
      menuButton.setAttribute("aria-label", t.menuLabel);
    }

    this.setText(".hero-label", t.heroLabel);
    this.setText(".hero-content h1", t.heroTitle);
    this.setText(".hero-content h2", t.heroSubtitle);
    this.setText(".hero-content > p", t.heroDescription);

    const discover = document.querySelector(".primary-button");
    if (discover) {
      const arrow = document.createElement("span");
      arrow.textContent = lang === "ar" ? "←" : "→";
      discover.replaceChildren(
        document.createTextNode(t.discover + " "),
        arrow
      );
    }

    const search = document.getElementById("site-search");
    if (search) {
      search.placeholder = t.searchPlaceholder;
      search.setAttribute("aria-label", t.searchLabel);
    }

    this.setText(".section-eyebrow", t.journey, 0);
    this.setText(".sections-section .section-heading h2", t.sectionsTitle);
    this.setText(".sections-section .section-heading p", t.sectionsDescription);

    document.querySelectorAll(".category-card").forEach((card, i) => {
      if (!t.categories[i]) return;

      const heading = card.querySelector("h3");
      const paragraph = card.querySelector("p");

      if (heading) heading.textContent = t.categories[i][0];
      if (paragraph) paragraph.textContent = t.categories[i][1];
    });

    const sections = [
      ["#quran", t.quranEyebrow, t.quranTitle, null],
      ["#hadith", t.hadithEyebrow, t.hadithTitle, t.hadithText],
      ["#adhkar", t.adhkarEyebrow, t.adhkarTitle, t.adhkarText],
      ["#dua", t.duaEyebrow, t.duaTitle, t.duaText],
      ["#tafsir", t.tafsirEyebrow, t.tafsirTitle, t.tafsirText],
      ["#seerah", t.seerahEyebrow, t.seerahTitle, t.seerahText],
      ["#fiqh", t.fiqhEyebrow, t.fiqhTitle, t.fiqhText],
      ["#articles", t.articlesEyebrow, t.articlesTitle, t.articlesText],
      ["#library", t.libraryEyebrow, t.libraryTitle, t.libraryText]
    ];

    sections.forEach(([selector, eyebrow, title, description]) => {
      const section = document.querySelector(selector);
      if (!section) return;

      const eyebrowElement = section.querySelector(".section-eyebrow");
      const titleElement = section.querySelector("h2");

      if (eyebrowElement) eyebrowElement.textContent = eyebrow;
      if (titleElement) titleElement.textContent = title;

      if (selector === "#quran") {
        this.setText(".content-note", t.quranNote);
      } else if (description) {
        const paragraph = section.querySelector("p:not(.section-eyebrow)");
        if (paragraph) paragraph.textContent = description;
      }
    });

    this.setText(".about-section .section-eyebrow", t.aboutEyebrow);
    this.setText(".about-section > h2", t.aboutTitle);
    this.setText(".about-section > p", t.aboutText);

    document.querySelectorAll(".value-item").forEach((item, i) => {
      if (!t.values[i]) return;

      const heading = item.querySelector("h3");
      const paragraph = item.querySelector("p");

      if (heading) heading.textContent = t.values[i][0];
      if (paragraph) paragraph.textContent = t.values[i][1];
    });

    this.setText(".site-footer h2", t.brand);
    this.setText(".site-footer > p:not(.copyright):not(.footer-prayer)", t.footerTagline);
    this.setText(".footer-prayer", t.footerPrayer);

    document.querySelectorAll(".footer-links a").forEach((link, i) => {
      if (t.footerLinks[i]) link.textContent = t.footerLinks[i];
    });

    const backButton = document.getElementById("back-to-top");
    if (backButton) {
      backButton.setAttribute("aria-label", t.backToTop);
    }

    this.updateSearch();
  },

  setText(selector, value, index = null) {
    const elements = document.querySelectorAll(selector);

    if (index !== null) {
      if (elements[index]) elements[index].textContent = value;
      return;
    }

    elements.forEach(element => {
      element.textContent = value;
    });
  },

  setupNavigation() {
    document.querySelectorAll('nav a[href^="#"]').forEach(link => {
      link.addEventListener("click", event => {
        const target = document.querySelector(link.getAttribute("href"));

        if (target) {
          event.preventDefault();

          target.scrollIntoView({
            behavior: "smooth",
            block: "start"
          });

          this.closeMobileMenu();
        }
      });
    });
  },

  setupMobileMenu() {
    const button = document.getElementById("menu-button");
    const nav = document.querySelector(".main-nav");

    if (!button || !nav) return;

    button.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");

      button.setAttribute("aria-expanded", String(isOpen));
      button.setAttribute(
        "aria-label",
        isOpen
          ? (this.language === "ar" ? "إغلاق القائمة" : "Close menu")
          : this.translations[this.language].menuLabel
      );
    });

    document.addEventListener("click", event => {
      if (!nav.contains(event.target) && !button.contains(event.target)) {
        this.closeMobileMenu();
      }
    });

    document.addEventListener("keydown", event => {
      if (event.key === "Escape") {
        this.closeMobileMenu();
      }
    });
  },

  closeMobileMenu() {
    const nav = document.querySelector(".main-nav");
    const button = document.getElementById("menu-button");

    if (!nav || !button) return;

    nav.classList.remove("is-open");
    button.setAttribute("aria-expanded", "false");
    button.setAttribute(
      "aria-label",
      this.translations[this.language].menuLabel
    );
  },

  setupSearch() {
    const input = document.getElementById("site-search");

    if (!input) return;

    input.addEventListener("input", () => {
      this.updateSearch();
    });
  },

  updateSearch() {
    const input = document.getElementById("site-search");
    const cards = document.querySelectorAll(".category-card");

    if (!input || !cards.length) return;

    const query = input.value.trim().toLocaleLowerCase();
    let visibleCount = 0;

    cards.forEach(card => {
      const content = card.textContent.toLocaleLowerCase();
      const matches = content.includes(query);

      card.hidden = !matches;

      if (matches) visibleCount++;
    });

    let message = document.getElementById("search-no-results");

    if (!message) {
      message = document.createElement("p");
      message.id = "search-no-results";
      message.className = "search-no-results";

      const grid = document.querySelector(".categories-grid");
      if (grid) grid.insertAdjacentElement("afterend", message);
    }

    if (message) {
      message.textContent = this.translations[this.language].noResults;
      message.hidden = query === "" || visibleCount > 0;
    }
  },

  setupBackToTop() {
    const button = document.getElementById("back-to-top");

    if (!button) return;

    const updateVisibility = () => {
      button.classList.toggle("is-visible", window.scrollY > 350);
    };

    window.addEventListener("scroll", updateVisibility, {
      passive: true
    });

    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    updateVisibility();
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Islamiyat.init();
});

window.Islamiyat = Islamiyat;
