document.addEventListener("DOMContentLoaded", () => {

  /* ================= TRANSLATIONS ================= */
  const translations = {
    en: {
      manifesto_btn: "Manifesto",
      manifesto_title: "Manifesto",
      manifesto_p1: "Political Opinion is an observational platform.",
      manifesto_p2: "Opinions are expressed through decentralized market participation.",
      manifesto_p3: "This platform exists to observe how global sentiment emerges.",
      intro_title: "Political Opinion",
      intro_p1: "The world is shaped by political decisions.",
      intro_p2: "A neutral platform revealing sentiment through crypto.",
      intro_p3: "Each transaction represents a sincere opinion.",
      intro_h2_1: "Neutrality",
      intro_p4: "No ideologies. No influence.",
      intro_h2_2: "How It Works",
      intro_p5: "Opinions are expressed through trading.",
      note: "Observation, not influence.",
      conflict_ru_title: "Russia × Ukraine",
      conflict_ru_p1: "A major geopolitical conflict.",
      conflict_ru_p2: "Sentiment observed via markets.",
      conflict_hi_title: "Hamas × Israel",
      conflict_hi_p1: "Decades of political tension.",
      conflict_hi_p2: "Observation without narratives."
    },

    pt: {
      manifesto_btn: "Manifesto",
      manifesto_title: "Manifesto",
      manifesto_p1: "Political Opinion é uma plataforma de observação.",
      manifesto_p2: "Opiniões são expressas por mercados descentralizados.",
      manifesto_p3: "Observamos o sentimento global.",
      intro_title: "Political Opinion",
      intro_p1: "O mundo é moldado por decisões políticas.",
      intro_p2: "Plataforma neutra baseada em cripto.",
      intro_p3: "Cada transação é uma opinião.",
      intro_h2_1: "Neutralidade",
      intro_p4: "Sem ideologias. Sem influência.",
      intro_h2_2: "Como Funciona",
      intro_p5: "Opiniões via negociação.",
      note: "Observação, não influência.",
      conflict_ru_title: "Rússia × Ucrânia",
      conflict_ru_p1: "Conflito geopolítico relevante.",
      conflict_ru_p2: "Sentimento via mercado.",
      conflict_hi_title: "Hamas × Israel",
      conflict_hi_p1: "Décadas de tensão.",
      conflict_hi_p2: "Observação sem narrativa."
    }
  };

  /* ================= LANGUAGE ================= */
  function setLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
    localStorage.setItem("lang", lang);
  }

  document.querySelectorAll(".language-switcher img").forEach(img => {
    img.addEventListener("click", () => setLanguage(img.dataset.lang));
  });

  setLanguage(localStorage.getItem("lang") || "en");

  /* ================= SLIDES ================= */
  const slides = document.querySelectorAll(".slide");
  let index = 0;

  function showSlide(i) {
    slides.forEach(s => s.classList.remove("active"));
    slides[i].classList.add("active");
  }

  window.addEventListener("wheel", e => {
    if (e.deltaY > 0 && index < slides.length - 1) index++;
    if (e.deltaY < 0 && index > 0) index--;
    showSlide(index);
  });

  window.addEventListener("keydown", e => {
    if (e.key === "ArrowDown" && index < slides.length - 1) index++;
    if (e.key === "ArrowUp" && index > 0) index--;
    showSlide(index);
  });

});
