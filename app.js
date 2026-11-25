
"use strict";

/*
 * ISLAMIYAT
 * Main application JavaScript
 */

const Islamiyat = {
  version: "1.0.0",

  init() {
    this.updateYear();
    this.setupNavigation();
    this.setupSearch();
    console.log("Islamiyat platform initialized.");
  },

  updateYear() {
    const year = document.getElementById("current-year");

    if (year) {
      year.textContent = new Date().getFullYear();
    }
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
        }
      });
    });
  },

  setupSearch() {
    const input = document.getElementById("site-search");
    const cards = document.querySelectorAll(".card");

    if (!input) return;

    input.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();

      cards.forEach(card => {
        const content = card.textContent.toLowerCase();

        card.hidden = query !== "" && !content.includes(query);
      });
    });
  }
};

document.addEventListener("DOMContentLoaded", () => {
  Islamiyat.init();
});

window.Islamiyat = Islamiyat;
