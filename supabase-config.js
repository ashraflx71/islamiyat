
"use strict";

/*
 * ISLAMIYAT
 * Supabase Configuration
 * Arabic / English
 * Version: 1.0.0
 */

(function () {
  const SUPABASE_CONFIG = {
    url: "https://gbvbrvalkttjmwfbkhva.supabase.co",

    publishableKey:
      "sb_publishable_-toTeZAsWaW_EzM4oX8GZw_qUlwdoyW"
  };

  // Verify Supabase library
  if (!window.supabase || !window.supabase.createClient) {
    console.error(
      "ISLAMIYAT: Supabase library is not loaded."
    );
    return;
  }

  // Create Supabase client
  const supabaseClient = window.supabase.createClient(
    SUPABASE_CONFIG.url,
    SUPABASE_CONFIG.publishableKey,
    {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
      },

      global: {
        headers: {
          "X-Client-Info": "islamiyat-web"
        }
      }
    }
  );

  // Make client available to application
  window.supabaseClient = supabaseClient;

  // Configuration status
  window.ISLAMIYAT_SUPABASE = {
    initialized: true,
    version: "1.0.0"
  };

  console.info(
    "ISLAMIYAT: Supabase connected successfully."
  );
})();
