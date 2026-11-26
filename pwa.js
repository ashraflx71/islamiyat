"use strict";
(() => {
  const installButton = document.getElementById("install-app");
  let installPrompt = null;
  const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(error => console.warn("PWA service worker:", error));
    });
  }

  if (isStandalone || !installButton) return;
  installButton.hidden = false;

  window.addEventListener("beforeinstallprompt", event => {
    event.preventDefault();
    installPrompt = event;
    installButton.hidden = false;
  });

  window.addEventListener("appinstalled", () => {
    installPrompt = null;
    installButton.hidden = true;
    installButton.textContent = "تم تثبيت إسلاميات";
  });

  installButton.addEventListener("click", async () => {
    if (installPrompt) {
      installPrompt.prompt();
      await installPrompt.userChoice;
      installPrompt = null;
      return;
    }
    if (isIOS) {
      alert("لتثبيت إسلاميات على iPhone أو iPad:\n1- افتح الموقع في Safari.\n2- اضغط زر المشاركة.\n3- اختر «إضافة إلى الشاشة الرئيسية».\n4- اضغط «إضافة».");
      return;
    }
    alert("لتثبيت إسلاميات: افتح قائمة المتصفح (⋮ أو مشاركة)، ثم اختر «تثبيت التطبيق» أو «إضافة إلى الشاشة الرئيسية». إذا لم يظهر الخيار، افتح الموقع في Chrome أو Edge وتأكد من الاتصال الآمن.");
  });
})();