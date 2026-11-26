-- Islamiyat: verified second-batch editorial drafts
-- Draft-only. No publication, no Quran table changes. Idempotent by slug.
WITH seed AS (
  SELECT * FROM jsonb_to_recordset($seed$
  [
    {
      "category_slug":"hadith","content_type":"hadith","title":"لا يؤمن أحدكم حتى يحب لأخيه ما يحب لنفسه",
      "slug":"hadith-love-for-brother-001","summary":"حديث نبوي في كمال الإيمان ومحبة الخير للآخرين.",
      "content":{"text":"لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.","narrator":"أنس بن مالك رضي الله عنه","reference":"صحيح البخاري، حديث رقم 13","explanation":"يرشد الحديث إلى أن من كمال الإيمان أن يحب المسلم لأخيه الخير الذي يحبه لنفسه، وأن يبتعد عن الأثرة والحسد.","editorial_note":"أُثبت اللفظ والمرجع من صفحة الحديث؛ تُراجع علامات الضبط عند الإخراج النهائي."},
      "source_name":"صحيح البخاري","source_url":"https://sunnah.com/bukhari/2/6","authenticity_status":"صحيح"
    },
    {
      "category_slug":"hadith","content_type":"hadith","title":"الدين النصيحة",
      "slug":"hadith-ad-din-an-nasihah-001","summary":"حديث جامع يبين معنى النصيحة وعمومها في الدين.",
      "content":{"text":"الدِّينُ النَّصِيحَةُ. قُلْنَا: لِمَنْ؟ قَالَ: لِلَّهِ، وَلِكِتَابِهِ، وَلِرَسُولِهِ، وَلِأَئِمَّةِ الْمُسْلِمِينَ وَعَامَّتِهِمْ.","narrator":"تميم الداري رضي الله عنه","reference":"صحيح مسلم، حديث رقم 55a","explanation":"يبين الحديث أن النصيحة أصل عظيم، وتشمل إخلاص العبودية لله، وتعظيم كتابه ورسوله، وإرادة الخير للمسلمين.","editorial_note":"النص وفق رواية صحيح مسلم 55a."},
      "source_name":"صحيح مسلم","source_url":"https://sunnah.com/muslim/1/103","authenticity_status":"صحيح"
    },
    {
      "category_slug":"dua","content_type":"dua","title":"دعاء خيري الدنيا والآخرة",
      "slug":"dua-rabbana-atina-201-001","summary":"دعاء قرآني جامع بسؤال الخير في الدنيا والآخرة والنجاة من النار.",
      "content":{"text":"رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ.","reference":"سورة البقرة، الآية 201","meaning":"يسأل المؤمن ربه خير الدنيا وخير الآخرة، وأن يقيه عذاب النار.","editorial_note":"نص قرآني؛ يُحافظ على رسم المصحف المعتمد عند النشر."},
      "source_name":"القرآن الكريم","source_url":"https://quran.com/al-baqarah/201","authenticity_status":"آية قرآنية"
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