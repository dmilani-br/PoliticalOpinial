/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform. It does not promote ideologies, candidates, or outcomes.",
    manifesto_p2: "Opinions are expressed through decentralized market participation, not surveys, narratives, or influence.",
    manifesto_p3: "This platform exists to observe how global sentiment emerges — freely, anonymously, and without intermediaries.",

    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions, yet public opinion often remains invisible or distorted.",
    intro_p2: "Political Opinion is a neutral platform that reveals public sentiment through the buying and selling of cryptocurrencies.",
    intro_p3: "Each transaction represents a sincere individual perspective.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Readers express their opinion by trading digital assets linked to global events.",
    note: "Observation, not influence.",

    conflict_ru_title: "Russia × Ukraine",
    conflict_ru_p1: "One of the most significant geopolitical crises of the 21st century.",
    conflict_ru_p2: "Public sentiment is observed through decentralized markets.",

    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "A conflict rooted in decades of political, territorial and humanitarian tension.",
    conflict_hi_p2: "This platform observes sentiment without promoting narratives."
  },

  pt: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion é uma plataforma de observação. Não promove ideologias, candidatos ou resultados.",
    manifesto_p2: "As opiniões são expressas por meio da participação em mercados descentralizados, não por pesquisas ou narrativas.",
    manifesto_p3: "Esta plataforma existe para observar como o sentimento global emerge — livremente, anonimamente e sem intermediários.",

    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes permanece invisível ou distorcida.",
    intro_p2: "Political Opinion é uma plataforma neutra que revela o sentimento público por meio da compra e venda de criptomoedas.",
    intro_p3: "Cada transação representa uma perspectiva individual e sincera.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Os leitores expressam sua opinião negociando ativos digitais ligados a eventos globais.",
    note: "Observação, não influência.",

    conflict_ru_title: "Rússia × Ucrânia",
    conflict_ru_p1: "Uma das crises geopolíticas mais significativas do século XXI.",
    conflict_ru_p2: "O sentimento público é observado por meio de mercados descentralizados.",

    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "Um conflito enraizado em décadas de tensões políticas, territoriais e humanitárias.",
    conflict_hi_p2: "Esta plataforma observa o sentimento sem promover narrativas."
  }
};

/* ================= LANGUAGE ================= */

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".language-switcher img").forEach(flag => {
  flag.addEventListener("click", () => {
    setLanguage(flag.dataset.lang);
  });
});

setLanguage(localStorage.getItem("lang") || "en");

/* ================= SLIDES ================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let isScrolling = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

/* Mouse wheel */
window.addEventListener("wheel", e => {
  if (isScrolling) return;
  isScrolling = true;

  e.deltaY > 0 ? nextSlide() : prevSlide();

  setTimeout(() => isScrolling = false, 900);
});

/* Keyboard */
window.addEventListener("keydown", e => {
  if (e.key === "ArrowDown" || e.key === "ArrowRight") nextSlide();
  if (e.key === "ArrowUp" || e.key === "ArrowLeft") prevSlide();
});
