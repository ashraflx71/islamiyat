-- Islamiyat: third batch of sourced editorial drafts
-- Draft-only and idempotent. No Quran tables are modified.
WITH seed AS (
  SELECT * FROM jsonb_to_recordset($seed$
  [
    {
      "category_slug":"adhkar","content_type":"adhkar","title":"ذكر التوحيد مائة مرة",
      "slug":"adhkar-tahlil-100-daily-001",
      "summary":"ذكر ثابت في صحيح البخاري وصحيح مسلم، ورد في فضله أجر عظيم.",
      "content":{
        "text":"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ.",
        "narrator":"أبو هريرة رضي الله عنه",
        "reference":"صحيح البخاري، حديث 6403؛ وصحيح مسلم، حديث 2691",
        "explanation":"ورد في الحديث أن من قال هذا الذكر مائة مرة في يومه كان له فضل عظيم، ومن ذلك كتابة مائة حسنة ومحو مائة سيئة والحفظ من الشيطان إلى المساء.",
        "timing":"مائة مرة في اليوم، كما جاء في الحديث."
      },
      "source_name":"صحيح البخاري وصحيح مسلم",
      "source_url":"https://sunnah.com/bukhari:6403",
      "authenticity_status":"صحيح"
    },
    {
      "category_slug":"dua","content_type":"dua","title":"دعاء صلاح الأهل والذرية",
      "slug":"dua-furqan-074-family-001",
      "summary":"دعاء قرآني يسأل الله صلاح الأهل والذرية وأن يكون العبد قدوة للمتقين.",
      "content":{
        "text":"وَالَّذِينَ يَقُولُونَ رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ وَاجْعَلْنَا لِلْمُتَّقِينَ إِمَامًا.",
        "reference":"سورة الفرقان، الآية 74",
        "meaning":"دعاء عباد الرحمن بأن يرزقهم الله من أزواجهم وذرياتهم ما تقر به أعينهم، وأن يجعلهم قدوة في الخير والتقوى."
      },
      "source_name":"القرآن الكريم",
      "source_url":"https://quran.com/ar/al-furqan/74",
      "authenticity_status":"آية قرآنية"
    },
    {
      "category_slug":"fiqh","content_type":"fiqh","title":"مدخل إلى الصلاة وشروطها",
      "slug":"fiqh-prayer-introduction-001",
      "summary":"تعريف تمهيدي بالصلاة وأهم أبواب دراستها مع مراعاة اختلاف التفصيلات الفقهية.",
      "content":{
        "text":"الصلاة عبادة عظيمة وفريضة يومية، ولها شروط تتعلق بصحتها وأركان تتكون منها. ومن أبواب دراستها: معرفة دخول الوقت، والطهارة، وستر العورة، واستقبال القبلة، ثم تعلم أفعال الصلاة وأقوالها. وتوجد اختلافات فقهية في بعض التفاصيل؛ لذلك ينبغي نسبة كل قول إلى مذهبه ومصدره وعدم عرض المسائل المختلف فيها على أنها محل إجماع.",
        "topics":["مفهوم الصلاة","شروط صحة الصلاة","أركان الصلاة","السنن والهيئات","مواضع الخلاف الفقهي"],
        "editorial_note":"مدخل تعليمي موجز، وليس فتوى شخصية. تُراجع التفصيلات على مصادر المذاهب قبل النشر."
      },
      "source_name":"وزارة الأوقاف المصرية – الصلاة",
      "source_url":"https://awkafonline.gov.eg/content-sections/111/3943/الصّلاة",
      "authenticity_status":"مسودة للمراجعة الفقهية"
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