"use strict";

/*
 * ==========================================
 * ISLAMIYAT - MAIN APPLICATION
 * Arabic / English
 * Version: 3.0.0
 * Supabase Quran Integration
 * ==========================================
 */

const Islamiyat = {

  version: "3.0.0",

  language: "ar",

  quranSurahs: [],

  quranRequestId: 0,

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

      heroDescription:
        "رحلة إيمانية تجمع القرآن الكريم والسنة النبوية والأذكار والأدعية والعلوم الإسلامية في مكان واحد، بمصادر موثوقة وتجربة رقمية تليق بعظمة العلم النافع.",

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
      quranNote: "جارٍ تجهيز القرآن الكريم...",

      selectSurah: "اختر السورة",
      verses: "آية",
      juz: "الجزء",
      page: "الصفحة",
      sajda: "موضع سجدة",

      loadingSurahs: "جارٍ تحميل سور القرآن الكريم...",
      loadingVerses: "جارٍ تحميل الآيات...",
      loadedVerses: "تم تحميل الآيات بنجاح.",
      noSurahs: "لا توجد سور متاحة في قاعدة البيانات.",
      noVerses: "لا توجد آيات مسجلة لهذه السورة.",
      quranError: "تعذر تحميل القرآن الكريم. تحقق من الاتصال وصلاحيات القراءة.",
      databaseError: "تعذر الاتصال بقاعدة البيانات.",

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

      heroDescription:
        "A spiritual journey bringing together the Holy Quran, Prophetic Sunnah, remembrance, supplications and Islamic knowledge in one trusted place.",

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
      quranNote: "Loading the Holy Quran...",

      selectSurah: "Select a Surah",
      verses: "Verses",
      juz: "Juz",
      page: "Page",
      sajda: "Prostration verse",

      loadingSurahs: "Loading Quran chapters...",
      loadingVerses: "Loading verses...",
      loadedVerses: "Verses loaded successfully.",
      noSurahs: "No Surahs available in the database.",
      noVerses: "No verses found for this Surah.",
      quranError: "Unable to load the Quran. Check connection and read permissions.",
      databaseError: "Unable to connect to the database.",

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

  /*
   * INITIALIZATION
   */

  init() {
    this.updateYear();
    this.setupNavigation();
    this.setupSearch();
    this.setupLanguage();
    this.setupBackToTop();
    this.setupMobileMenu();

    this.applyLanguage(this.getSavedLanguage());

    // Load Quran after applying the initial language.
    this.loadQuran();

    console.log("Islamiyat initialized:", this.version);
  },

  /*
   * YEAR
   */

  updateYear() {
    const year = document.getElementById("current-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
  },

  /*
   * LANGUAGE STORAGE
   */

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

  /*
   * APPLY LANGUAGE
   */

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

    document.querySelectorAll(".main-nav a").forEach((link, i) => {
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

    this.setText(
      ".sections-section .section-heading h2",
      t.sectionsTitle
    );

    this.setText(
      ".sections-section .section-heading p",
      t.sectionsDescription
    );

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

      if (description) {
        const paragraph = section.querySelector("p");

        if (paragraph) paragraph.textContent = description;
      }
    });

    // Preserve the Quran browser when switching languages.
    const quranContainer = document.getElementById("quran-content");

    if (quranContainer) {
      if (this.quranSurahs.length > 0) {
        const previousSelect = quranContainer.querySelector(
          "#quran-surah-select"
        );

        const selectedNumber = previousSelect
          ? Number(previousSelect.value)
          : this.quranSurahs[0].surah_number;

        this.renderQuranBrowser(
          quranContainer,
          this.quranSurahs,
          selectedNumber
        );
      } else {
        quranContainer.textContent = t.quranNote;
      }
    }

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

    this.setText(
      ".site-footer > p:not(.copyright):not(.footer-prayer)",
      t.footerTagline
    );

    this.setText(".footer-prayer", t.footerPrayer);

    document.querySelectorAll(".footer-links a").forEach((link, i) => {
      if (t.footerLinks[i]) {
        link.textContent = t.footerLinks[i];
      }
    });

    const backButton = document.getElementById("back-to-top");

    if (backButton) {
      backButton.setAttribute("aria-label", t.backToTop);
    }

    this.updateSearch();
  },

  /*
   * TEXT HELPER
   */

  setText(selector, value, index = null) {
    const elements = document.querySelectorAll(selector);

    if (index !== null) {
      if (elements[index]) {
        elements[index].textContent = value;
      }

      return;
    }

    elements.forEach(element => {
      element.textContent = value;
    });
  },

  /*
   * NAVIGATION
   */

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

  /*
   * MOBILE MENU
   */

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
      if (
        !nav.contains(event.target) &&
        !button.contains(event.target)
      ) {
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

  /*
   * SEARCH
   */

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

      if (grid) {
        grid.insertAdjacentElement("afterend", message);
      }
    }

    if (message) {
      message.textContent = this.translations[this.language].noResults;

      message.hidden = query === "" || visibleCount > 0;
    }
  },

  /*
   * BACK TO TOP
   */

  setupBackToTop() {
    const button = document.getElementById("back-to-top");

    if (!button) return;

    const updateVisibility = () => {
      button.classList.toggle(
        "is-visible",
        window.scrollY > 350
      );
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
  },

  /*
   * ==========================================
   * SUPABASE - QURAN
   * ==========================================
   */

  async loadQuran() {
    const container = document.getElementById("quran-content");

    if (!container) return;

    const client = window.supabaseClient;
    const t = this.translations[this.language];

    if (!client) {
      container.textContent = t.databaseError;
      console.error("Islamiyat: Supabase client is unavailable.");
      return;
    }

    container.setAttribute("aria-busy", "true");
    container.textContent = t.loadingSurahs;

    try {
      const { data, error } = await client
        .from("quran_surahs")
        .select(
          "surah_number,name_ar,revelation_type,ayah_count"
        )
        .order("surah_number", { ascending: true });

      if (error) throw error;

      if (!Array.isArray(data) || data.length === 0) {
        container.textContent = t.noSurahs;
        return;
      }

      this.quranSurahs = data;

      this.renderQuranBrowser(
        container,
        data,
        data[0].surah_number
      );

    } catch (error) {
      console.error("Islamiyat Quran loading error:", error);

      container.textContent =
        this.translations[this.language].quranError;
    } finally {
      container.setAttribute("aria-busy", "false");
    }
  },

  /*
   * RENDER SURAH SELECTOR
   */

  renderQuranBrowser(container, surahs, selectedNumber) {
    const t = this.translations[this.language];

    container.replaceChildren();

    const wrapper = document.createElement("div");
    wrapper.className = "quran-browser";

    const label = document.createElement("label");

    label.htmlFor = "quran-surah-select";
    label.textContent = t.selectSurah;

    const select = document.createElement("select");

    select.id = "quran-surah-select";
    select.className = "quran-surah-select";

    surahs.forEach(surah => {
      const option = document.createElement("option");

      option.value = String(surah.surah_number);

      option.textContent =
        `${surah.surah_number}. ${surah.name_ar} (${surah.ayah_count} ${t.verses})`;

      if (Number(surah.surah_number) === Number(selectedNumber)) {
        option.selected = true;
      }

      select.appendChild(option);
    });

    const details = document.createElement("div");
    details.className = "quran-surah-details";

    const status = document.createElement("p");
    status.className = "quran-status";

    const verses = document.createElement("div");
    verses.className = "quran-verses";
    verses.id = "quran-verses";

    wrapper.append(
      label,
      select,
      details,
      status,
      verses
    );

    container.appendChild(wrapper);

    select.addEventListener("change", () => {
      this.loadSurahVerses(
        Number(select.value),
        details,
        verses,
        status
      );
    });

    this.loadSurahVerses(
      Number(select.value),
      details,
      verses,
      status
    );
  },

  /*
   * LOAD VERSES
   */

  async loadSurahVerses(surahNumber, details, verses, status) {
    const client = window.supabaseClient;
    const t = this.translations[this.language];

    if (!client) {
      status.textContent = t.databaseError;
      return;
    }

    const surah = this.quranSurahs.find(
      item => Number(item.surah_number) === Number(surahNumber)
    );

    if (!surah) {
      status.textContent = t.noSurahs;
      return;
    }

    // Prevent old requests from replacing newer selections.
    const requestId = ++this.quranRequestId;
    const quranContainer = verses.closest("#quran-content");
    if (quranContainer) quranContainer.setAttribute("aria-busy", "true");

    details.textContent =
      `${surah.name_ar} - ${surah.ayah_count} ${t.verses}`;

    verses.replaceChildren();

    status.textContent = t.loadingVerses;

    try {
      const { data, error } = await client
        .from("quran_verses")
        .select(
          "surah_number,ayah_number,text_uthmani,juz_number,page_number,hizb_quarter,sajda"
        )
        .eq("surah_number", surahNumber)
        .order("ayah_number", { ascending: true });

      if (requestId !== this.quranRequestId) return;

      if (error) throw error;

      if (!Array.isArray(data) || data.length === 0) {
        status.textContent = t.noVerses;
        return;
      }

      const fragment = document.createDocumentFragment();

      data.forEach(verse => {
        const article = document.createElement("article");

        article.className = "quran-verse-item";

        const text = document.createElement("p");

        text.className = "quran-verse-text";
        text.dir = "rtl";
        text.lang = "ar";

        text.textContent =
          `${verse.text_uthmani || ""} ﴿${verse.ayah_number}﴾`;

        article.appendChild(text);

        const metadata = document.createElement("div");

        metadata.className = "quran-verse-metadata";

        metadata.textContent =
          `${t.juz}: ${verse.juz_number ?? "—"} | ` +
          `${t.page}: ${verse.page_number ?? "—"}`;

        article.appendChild(metadata);

        if (verse.sajda === true) {
          const sajda = document.createElement("span");

          sajda.className = "quran-sajda";
          sajda.textContent = t.sajda;

          article.appendChild(sajda);
        }

        fragment.appendChild(article);
      });

      if (requestId !== this.quranRequestId) return;

      verses.appendChild(fragment);

      status.textContent =
        `${t.loadedVerses} (${data.length})`;

    } catch (error) {
      if (requestId !== this.quranRequestId) return;

      console.error("Islamiyat verse loading error:", error);

      status.textContent = t.quranError;
    } finally {
      if (quranContainer && requestId === this.quranRequestId) {
        quranContainer.setAttribute("aria-busy", "false");
      }
    }
  }

};


/*
 * ==========================================
 * START APPLICATION
 * ==========================================
 */

document.addEventListener("DOMContentLoaded", () => {
  Islamiyat.init();
});

window.Islamiyat = Islamiyat;
