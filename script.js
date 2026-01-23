const slides = document.querySelectorAll(".slide");
let current = 0;

/* SLIDES */
function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
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
    intro_p2: "Political Opinion is a neutral platform that observes public sentiment through decentralized markets.",
    intro_p3: "Each transaction reflects an individual and voluntary perspective.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Opinions are expressed by trading digital assets linked to global events.",
    note: "Observation, not influence.",

    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform.",
    manifesto_p2: "It does not promote ideologies, candidates, or outcomes.",
    manifesto_p3: "It exists to observe how global sentiment emerges.",

    conflict_ru_title: "Russia × Ukraine",
    conflict_ru_p1: "A large-scale military conflict reshaping European security.",
    conflict_ru_p2: "It affects global energy, food supply, and diplomatic alliances.",
    conflict_ru_p3: "Public sentiment emerges through decentralized economic behavior.",

    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "A long-standing conflict rooted in territorial and political disputes.",
    conflict_hi_p2: "Marked by cycles of violence, humanitarian crises, and global reactions.",
    conflict_hi_p3: "This platform observes sentiment without promoting narratives.",

    conflict_uc_title: "USA × China",
    conflict_uc_p1: "A strategic rivalry spanning trade, technology, and geopolitics.",
    conflict_uc_p2: "It influences global markets, supply chains, and power balance.",
    conflict_uc_p3: "Economic behavior reflects global perception of this tension.",

    conflict_ii_title: "Iran × Iraq",
    conflict_ii_p1: "A historical regional rivalry with lasting geopolitical consequences.",
    conflict_ii_p2: "Its legacy still influences Middle Eastern power structures.",
    conflict_ii_p3: "Market sentiment reflects long-term regional instability."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes permanece invisível.",
    intro_p2: "Political Opinion é uma plataforma neutra de observação do sentimento público.",
    intro_p3: "Cada transação representa uma decisão individual e voluntária.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "As opiniões surgem por meio da negociação de ativos digitais.",
    note: "Observação, não influência.",

    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion é uma plataforma de observação.",
    manifesto_p2: "Não promove ideologias, candidatos ou resultados.",
    manifesto_p3: "Existe para observar o sentimento global.",

    conflict_ru_title: "Rússia × Ucrânia",
    conflict_ru_p1: "Um conflito militar de grande escala no leste europeu.",
    conflict_ru_p2: "Impacta energia, alimentos e alianças globais.",
    conflict_ru_p3: "O sentimento público emerge por comportamentos econômicos.",

    conflict_hi_title: "Hamas × Israel",
    conflict_hi_p1: "Conflito histórico marcado por disputas territoriais.",
    conflict_hi_p2: "Envolve crises humanitárias e reações globais.",
    conflict_hi_p3: "A plataforma observa o sentimento sem narrativas.",

    conflict_uc_title: "EUA × China",
    conflict_uc_p1: "Uma rivalidade estratégica em comércio e tecnologia.",
    conflict_uc_p2: "Afeta mercados globais e cadeias produtivas.",
    conflict_uc_p3: "O mercado reflete a percepção global desse embate.",

    conflict_ii_title: "Irã × Iraque",
    conflict_ii_p1: "Rivalidade regional com consequências duradouras.",
    conflict_ii_p2: "Ainda influencia o equilíbrio do Oriente Médio.",
    conflict_ii_p3: "O sentimento de mercado reflete instabilidade regional."
  },

  es: { /* se quiser, no próximo passo eu detalho */ },
  fr: { /* idem */ },
  zh: { /* idem */ }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });

  document.querySelectorAll(".language-switcher img")
    .forEach(img => img.classList.toggle("active", img.dataset.lang === lang));
}

document.querySelectorAll(".language-switcher img")
  .forEach(img => img.addEventListener("click", () => setLanguage(img.dataset.lang)));

setLanguage("en");
