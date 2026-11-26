-- Islamiyat: initial editorial seed pack
-- Safe by design: creates DRAFT entries only; never publishes content.
-- Idempotent: existing slugs are left unchanged.
-- Run only after source and scholarly review; publish separately after approval.

WITH seed AS (
  SELECT *
  FROM jsonb_to_recordset($seed$
  [
    {
      "category_slug":"hadith","content_type":"hadith","title":"إنما الأعمال بالنيات",
      "slug":"hadith-niyyah-001","summary":"حديث جامع في الإخلاص والنية، وهو الحديث الأول في صحيح البخاري.",
      "content":{"text":"إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.","narrator":"عمر بن الخطاب رضي الله عنه","reference":"صحيح البخاري، كتاب بدء الوحي، حديث رقم 1","explanation":"يبين الحديث أن اعتبار العمل وثوابه مرتبطان بالنية، وأن على المسلم إخلاص قصده لله تعالى.","text_en":"Actions are judged by intentions, and every person will have what they intended."},
      "source_name":"صحيح البخاري","source_url":"https://diwanalsunnah.com/ar/hadith/bukhari/1","authenticity_status":"صحيح"
    },
    {
      "category_slug":"adhkar","content_type":"adhkar","title":"سيد الاستغفار",
      "slug":"adhkar-sayyid-istighfar-001","summary":"ذكر نبوي ثابت يُقال في الصباح أو المساء مع استحضار المعنى واليقين.",
      "content":{"text":"اللَّهُمَّ أَنْتَ رَبِّي، لَا إِلَهَ إِلَّا أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي، فَاغْفِرْ لِي، فَإِنَّهُ لَا يَغْفِرُ الذُّنُوبَ إِلَّا أَنْتَ.","narrator":"شداد بن أوس رضي الله عنه","reference":"صحيح البخاري، حديث رقم 6306","timing":"من قاله من النهار موقنًا به ثم مات قبل المساء، أو قاله من الليل موقنًا به ثم مات قبل الصباح، ورد في الحديث الوعد المذكور.","text_en":"O Allah, You are my Lord; none has the right to be worshipped except You..."},
      "source_name":"صحيح البخاري","source_url":"https://sunnah.com/bukhari:6306","authenticity_status":"صحيح"
    },
    {
      "category_slug":"dua","content_type":"dua","title":"دعاء الثبات على الهداية",
      "slug":"dua-quran-ali-imran-008","summary":"دعاء قرآني بطلب الثبات والرحمة من الله تعالى.",
      "content":{"text":"رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا وَهَبْ لَنَا مِنْ لَدُنْكَ رَحْمَةً ۚ إِنَّكَ أَنْتَ الْوَهَّابُ.","reference":"سورة آل عمران، الآية 8","meaning":"دعاء يسأل فيه المؤمن ربه الثبات على الحق، وألا تميل القلوب عنه بعد الهداية، وأن يرزقه رحمة من عنده.","text_en":"Our Lord, let not our hearts deviate after You have guided us and grant us from Yourself mercy."},
      "source_name":"القرآن الكريم","source_url":"https://quran.com/3/8","authenticity_status":"آية قرآنية"
    },
    {
      "category_slug":"tafsir","content_type":"tafsir","title":"تفسير قوله تعالى: ربنا لا تزغ قلوبنا",
      "slug":"tafsir-ali-imran-008","summary":"وقفة تفسيرية موجزة في دعاء الراسخين في العلم من سورة آل عمران.",
      "content":{"text":"يسأل الراسخون في العلم ربهم ألا يصرف قلوبهم عن الحق بعد أن هداهم إليه، وأن يهب لهم رحمة وتوفيقًا وثباتًا. وفي الآية إظهار لافتقار العبد إلى تثبيت الله، مهما بلغ من العلم والإيمان.","surah":"آل عمران","ayah":"8","tafsir_source":"تفسير الإمام الطبري","editorial_note":"هذا تلخيص بالمعنى وليس نقلًا حرفيًا. يرجى مراجعة النص التفسيري الكامل قبل اعتماد النشر."},
      "source_name":"تفسير الطبري","source_url":"https://quran.ksu.edu.sa/tafseer/tabary/sura3-aya8.html","authenticity_status":"مسودة للمراجعة العلمية"
    },
    {
      "category_slug":"seerah","content_type":"seerah","title":"محطات من السيرة النبوية",
      "slug":"seerah-makkah-madinah-outline","summary":"مدخل زمني موجز إلى أبرز مراحل السيرة النبوية.",
      "content":{"timeline":[{"title":"المولد والنشأة","place":"مكة","period":"عام الفيل"},{"title":"بدء الوحي","place":"غار حراء","period":"قبل الهجرة"},{"title":"الدعوة والهجرة","place":"مكة ثم المدينة","period":"العهد المكي ثم الهجري"},{"title":"بناء المجتمع بالمدينة","place":"المدينة المنورة","period":"بعد الهجرة"},{"title":"بدر وأحد والخندق","place":"المدينة وما حولها","period":"2–5 هـ"},{"title":"صلح الحديبية وفتح مكة","place":"الحديبية ومكة","period":"6–8 هـ"},{"title":"حجة الوداع والوفاة","place":"مكة ثم المدينة","period":"10–11 هـ"}],"editorial_note":"الترتيب الزمني تمهيدي، وتفاصيل التواريخ والروايات تحتاج مراجعة المصادر قبل النشر."},
      "source_name":"متحف الإسلام – السيرة النبوية","source_url":"https://islam.museum/ar/cards/story/al-sira-al-nabawiyya/","authenticity_status":"مسودة للمراجعة التاريخية"
    },
    {
      "category_slug":"fiqh","content_type":"fiqh","title":"مدخل إلى أحكام الوضوء",
      "slug":"fiqh-wudu-introduction","summary":"تعريف تمهيدي بالوضوء وأبواب دراسته قبل نشر التفصيلات الفقهية.",
      "content":{"text":"الوضوء طهارة مخصوصة تتعلق بأعضاء معلومة، وهو من شروط صحة الصلاة. ويعرض هذا الباب تعريف الوضوء وشروطه وفرائضه وسننه ونواقضه، مع التنبيه إلى وجود اختلافات فقهية في بعض التفاصيل؛ لذلك تُنسب الأقوال إلى مذاهبها ومصادرها ولا تُعرض المسائل الخلافية على أنها محل إجماع.","topics":["تعريف الوضوء","شروط الوضوء","الفرائض والسنن","نواقض الوضوء","أحكام أصحاب الأعذار"],"editorial_note":"محتوى تعليمي تمهيدي، وليس فتوى شخصية. يجب مراجعة التفصيل المذهبي قبل النشر."},
      "source_name":"وزارة الأوقاف المصرية – أحكام الوضوء","source_url":"https://awkafonline.gov.eg/content-sections/111/11105/أحكام-الوضوء","authenticity_status":"مسودة للمراجعة الفقهية"
    },
    {
      "category_slug":"articles","content_type":"article","title":"الإخلاص والنية في طلب العلم",
      "slug":"article-intention-beneficial-knowledge","summary":"مقال تربوي موجز عن استحضار النية والإخلاص عند تعلم العلم النافع.",
      "content":{"paragraphs":["يبدأ طلب العلم بتصحيح القصد؛ فيتعلم المسلم ليعبد الله على بصيرة، وينفع نفسه والناس، ويعمل بما يعلم.","ومن المهم أن يقترن التعلم بالتواضع والتثبت وحسن الأدب، وألا ينقل المرء معلومة شرعية قبل التحقق من مصدرها.","وتبقى النية أمرًا قلبيًا يجددها المسلم، ويستعين بالله على الإخلاص والثبات."]},
      "source_name":"صحيح البخاري، حديث النية رقم 1","source_url":"https://diwanalsunnah.com/ar/hadith/bukhari/1","authenticity_status":"مسودة تحريرية"
    },
    {
      "category_slug":"library","content_type":"article","title":"الأربعون النووية",
      "slug":"library-arbaeen-nawawiyyah","summary":"بطاقة تعريفية بكتاب يجمع أحاديث جامعة في أصول الدين والآداب والأحكام.",
      "content":{"author":"الإمام يحيى بن شرف النووي","book_title":"الأربعون النووية","description":"مجموعة مشهورة من الأحاديث الجامعة، ويُستحسن عرض كل حديث مع تخريجه وشرح موثق مستقل.","catalog_note":"تُستكمل بيانات الطبعة والناشر وحقوق النسخة الرقمية قبل إضافة رابط تحميل."},
      "source_name":"بطاقة ببليوغرافية – تحتاج استكمال بيانات الطبعة","source_url":null,"authenticity_status":"مسودة فهرسة"
    }
  ]
  $seed$::jsonb) AS x(
    category_slug text, content_type text, title text, slug text, summary text,
    content jsonb, source_name text, source_url text, authenticity_status text
  )
)
INSERT INTO public.content_items
(category_id,content_type,title,slug,summary,content,source_name,source_url,authenticity_status,status,published_at)
SELECT c.id,s.content_type,s.title,s.slug,s.summary,s.content,s.source_name,s.source_url,s.authenticity_status,'draft',NULL
FROM seed s
JOIN public.categories c ON c.slug=s.category_slug
ON CONFLICT (slug) DO NOTHING;
