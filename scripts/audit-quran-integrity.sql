-- Islamiyat Quran integrity audit (read-only)
-- Run in the Supabase SQL editor. This script does not modify any data.

WITH verse_stats AS (
  SELECT
    surah_number,
    COUNT(*)::integer AS actual_ayah_count,
    COUNT(DISTINCT ayah_number)::integer AS distinct_ayah_count,
    MIN(ayah_number)::integer AS first_ayah,
    MAX(ayah_number)::integer AS last_ayah,
    COUNT(*) FILTER (
      WHERE text_uthmani IS NULL OR text_uthmani ~ '^[[:space:]]*$'
    )::integer AS blank_text_count,
    COUNT(*) FILTER (
      WHERE position(chr(65533) IN COALESCE(text_uthmani, '')) > 0
    )::integer AS replacement_character_count
  FROM public.quran_verses
  GROUP BY surah_number
),
surah_audit AS (
  SELECT
    s.surah_number,
    s.name_ar,
    s.ayah_count AS expected_ayah_count,
    COALESCE(v.actual_ayah_count, 0) AS actual_ayah_count,
    COALESCE(v.distinct_ayah_count, 0) AS distinct_ayah_count,
    v.first_ayah,
    v.last_ayah,
    COALESCE(v.blank_text_count, 0) AS blank_text_count,
    COALESCE(v.replacement_character_count, 0) AS replacement_character_count
  FROM public.quran_surahs AS s
  LEFT JOIN verse_stats AS v USING (surah_number)
)
SELECT
  *,
  (
    expected_ayah_count = actual_ayah_count
    AND actual_ayah_count = distinct_ayah_count
    AND first_ayah = 1
    AND last_ayah = expected_ayah_count
    AND blank_text_count = 0
    AND replacement_character_count = 0
  ) AS integrity_pass
FROM surah_audit
ORDER BY surah_number;

-- Summary: expected 114 surahs and 6,236 verses.
SELECT
  (SELECT COUNT(*) FROM public.quran_surahs)::integer AS surah_count,
  (SELECT COUNT(*) FROM public.quran_verses)::integer AS verse_count,
  (SELECT COUNT(*) FROM public.quran_verses
    WHERE text_uthmani IS NULL OR text_uthmani ~ '^[[:space:]]*$')::integer AS blank_verses,
  (SELECT COUNT(*) FROM public.quran_verses
    WHERE position(chr(65533) IN COALESCE(text_uthmani, '')) > 0)::integer
    AS replacement_character_verses;
