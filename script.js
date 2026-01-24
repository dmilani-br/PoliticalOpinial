const slides = document.querySelectorAll(".slide");
let current = 0;

/* SLIDES */
function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("wheel", e => {
  if (e.deltaY > 0 && current < slides.length - 1) current++;
  if (e.deltaY < 0 && current > 0) current--;
  showSlide(current);
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowDown" && current < slides.length - 1) current++;
  if (e.key === "ArrowUp" && current > 0) current--;
  showSlide(current);
});

/* BASE LANGUAGE (FULL) */
const base = {
  intro_title: "Political Opinion",
  intro_p1: "The world is shaped by political decisions.",
  intro_p2: "Political Opinion observes public sentiment.",
  intro_p3: "Each transaction reflects an opinion.",
  intro_h2_1: "Neutrality",
  intro_p4: "No ideology. No influence.",
  intro_h2_2: "How It Works",
  intro_p5: "Opinions expressed through markets.",
  note: "Observation, not influence.",

  manifesto_title: "Manifesto",
  manifesto_p1: "This is an observational platform.",
  manifesto_p2: "No narratives are promoted.",
  manifesto_p3: "Only sentiment is observed.",

  ru_title: "Russia × Ukraine",
  ru_p1: "A major geopolitical conflict.",
  ru_p2: "It impacts global stability.",
  ru_p3: "Public sentiment is observed.",

  hi_title: "Hamas × Israel",
  hi_p1: "A long-standing regional conflict.",
  hi_p2: "Civilians are deeply affected.",
  hi_p3: "Sentiment is observed neutrally.",

  uc_title: "USA × China",
  uc_p1: "A strategic global rivalry.",
  uc_p2: "Technology and power are disputed.",
  uc_p3: "Markets reflect confidence.",

  ii_title: "Iran × Iraq",
  ii_p1: "A historic regional conflict.",
  ii_p2: "Its effects persist today.",
  ii_p3: "Sentiment is observed."
};

/* TRANSLATIONS (SAFE OVERRIDES) */
const translations = {
  pt: {
    manifesto_title: "Manifesto",
    ru_title: "Rússia × Ucrânia"
  },
  es: {
    ru_title: "Rusia × Ucrania"
  },
  fr: {
    ru_title: "Russie × Ukraine"
  },
  zh: {
    ru_title: "俄罗斯 × 乌克兰"
  }
};

/* LANGUAGE ENGINE */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent =
      (translations[lang] && translations[lang][key]) || base[key] || "";
  });

  document
    .querySelectorAll(".language-switcher img")
    .forEach(img =>
      img.classList.toggle("active", img.dataset.lang === lang)
    );
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

setLanguage("en");
