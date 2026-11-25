"use strict";

/*
 * ISLAMIYAT
 * Supabase Configuration
 * Version: 1.1.0
 */

(function () {
  const CONFIG = Object.freeze({
    url: "https://gbvbrvalkttjmwfbkhva.supabase.co",
    publishableKey: "sb_publishable_-toTeZAsWaW_EzM4oX8GZw_qUlwdoyW"
  });

  if (window.supabaseClient) {
    console.info("ISLAMIYAT: Client already initialized.");
    return;
  }

  if (
    !window.supabase ||
    typeof window.supabase.createClient !== "function"
  ) {
    console.error("ISLAMIYAT: Supabase library unavailable.");

    window.ISLAMIYAT_SUPABASE = {
      initialized: false,
      error: "SUPABASE_LIBRARY_UNAVAILABLE"
    };

    return;
  }

  try {
    const client = window.supabase.createClient(
      CONFIG.url,
      CONFIG.publishableKey,
      {
        auth: {
          autoRefreshToken: true,
          persistSession: true,
          detectSessionInUrl: true
        },
        global: {
          headers: {
            "X-Client-Info": "islamiyat-web/1.1.0"
          }
        }
      }
    );

    window.supabaseClient = client;

    window.ISLAMIYAT_SUPABASE = {
      initialized: true,
      version: "1.1.0",
      project: "islamiyat"
    };

    console.info("ISLAMIYAT: Supabase client initialized.");

  } catch (error) {
    console.error("ISLAMIYAT: Initialization failed.", error);

    window.ISLAMIYAT_SUPABASE = {
      initialized: false,
      error: "INITIALIZATION_FAILED"
    };
  }
})();
