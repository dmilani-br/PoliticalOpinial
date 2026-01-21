/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform.",
    manifesto_p2: "Opinions are expressed through decentralized markets.",
    manifesto_p3: "This platform exists to observe global sentiment.",
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions.",
    intro_p2: "This platform observes public sentiment through markets.",
    intro_h2_1: "Neutrality",
    intro_p3: "No ideologies. No influence.",
    conflict_ru_title: "Russia × Ukraine",
    conflict_ru_p1: "A major geopolitical conflict of the 21st century.",
    conflict_ru_p2: "Public sentiment is observed, not influenced.",
    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "A conflict rooted in decades of tension.",
    conflict_hi_p2: "This platform remains neutral.",
    note: "Observation, not influence."
  },

  pt: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion é uma plataforma de observação.",
    manifesto_p2: "As opiniões são expressas por mercados descentralizados.",
    manifesto_p3: "A plataforma observa o sentimento global.",
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas.",
    intro_p2: "A plataforma observa o sentimento público.",
    intro_h2_1: "Neutralidade",
    intro_p3: "Sem ideologias. Sem influência.",
    conflict_ru_title: "Rússia × Ucrânia",
    conflict_ru_p1: "Uma grande crise geopolítica.",
    conflict_ru_p2: "O sentimento público é observado.",
    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "Conflito marcado por décadas de tensão.",
    conflict_hi_p2: "A plataforma permanece neutra.",
    note: "Observação, não influência."
  }
};

/* ================= LANGUAGE SWITCH ================= */

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

/* ================= SLIDES ================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let isScrolling = false;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

window.addEventListener("wheel", e => {
  if (isScrolling) return;
  isScrolling = true;
  e.deltaY > 0 ? currentSlide++ : currentSlide--;
  currentSlide = Math.max(0, Math.min(slides.length - 1, currentSlide));
  showSlide(currentSlide);
  setTimeout(() => isScrolling = false, 700);
});

window.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") currentSlide++;
  if (e.key === "ArrowUp") currentSlide--;
  currentSlide = Math.max(0, Math.min(slides.length - 1, currentSlide));
  showSlide(currentSlide);
});

/* INIT */
setLanguage(localStorage.getItem("lang") || "en");
showSlide(currentSlide);
