const slides = document.querySelectorAll(".slide");
let current = 0;

/* SLIDES NAVIGATION */
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

/* TRANSLATIONS */
const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions, yet public opinion often remains invisible or distorted.",
    intro_p2: "Political Opinion is a neutral platform that reveals public sentiment through the buying and selling of cryptocurrencies.",
    intro_p3: "Each transaction represents a sincere individual perspective.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Readers express their opinion by trading digital assets linked to global events.",
    note: "Observation, not influence.",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform.",
    manifesto_p2: "Opinions are expressed through decentralized market participation.",
    manifesto_p3: "This platform exists to observe global sentiment."
  },
  pt: {
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes permanece invisível.",
    intro_p2: "Political Opinion é uma plataforma neutra que revela o sentimento público.",
    intro_p3: "Cada transação representa uma perspectiva individual sincera.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Os leitores expressam sua opinião negociando ativos digitais.",
    note: "Observação, não influência.",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion é uma plataforma de observação.",
    manifesto_p2: "As opiniões surgem de mercados descentralizados.",
    manifesto_p3: "Observamos o sentimento global."
  }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

/* DEFAULT */
setLanguage("en");
