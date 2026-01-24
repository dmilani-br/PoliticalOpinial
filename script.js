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

/* TRANSLATIONS */
const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions.",
    intro_p2: "Public opinion often remains invisible or distorted.",
    intro_p3: "This platform observes sentiment through markets.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Opinions emerge from decentralized market behavior.",
    note: "Observation, not influence.",

    manifesto_title: "Manifesto",
    manifesto_p1: "This project does not seek to persuade.",
    manifesto_p2: "It observes political sentiment through markets.",
    manifesto_p3: "Markets react faster than narratives.",
    manifesto_p4: "Political Opinion is a lens, not a voice.",

    ru_title: "Russia × Ukraine",
    ru_p1: "A defining geopolitical conflict of the 21st century.",
    ru_p2: "Shaping security, energy, and alliances worldwide.",
    ru_p3: "Market reactions reveal global sentiment.",

    hi_title: "Hamas × Israel",
    hi_p1: "A long-standing conflict with regional impact.",
    hi_p2: "Rooted in political, territorial and humanitarian tensions.",
    hi_p3: "Observed without narrative framing.",

    uc_title: "USA × China",
    uc_p1: "Strategic rivalry shaping global power.",
    uc_p2: "Technology, trade and influence are at stake.",
    uc_p3: "Markets reflect shifting expectations."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas.",
    intro_p2: "A opinião pública muitas vezes permanece invisível.",
    intro_p3: "Esta plataforma observa o sentimento via mercados.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Opiniões emergem do comportamento do mercado.",
    note: "Observação, não influência.",

    manifesto_title: "Manifesto",
    manifesto_p1: "Este projeto não busca persuadir.",
    manifesto_p2: "Observa o sentimento político através dos mercados.",
    manifesto_p3: "Mercados reagem mais rápido que narrativas.",
    manifesto_p4: "Political Opinion é uma lente, não uma voz.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Um conflito central do século XXI.",
    ru_p2: "Impacta segurança, energia e alianças globais.",
    ru_p3: "Mercados refletem o sentimento global.",

    hi_title: "Hamas × Israel",
    hi_p1: "Conflito prolongado com impacto regional.",
    hi_p2: "Enraizado em tensões políticas e humanitárias.",
    hi_p3: "Observado sem narrativas.",

    uc_title: "EUA × China",
    uc_p1: "Rivalidade estratégica global.",
    uc_p2: "Tecnologia, comércio e influência em disputa.",
    uc_p3: "Mercados indicam expectativas futuras."
  }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });

  document.querySelectorAll(".language-switcher img").forEach(img =>
    img.classList.toggle("active", img.dataset.lang === lang)
  );
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

setLanguage("en");
