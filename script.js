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
  },
  es: {
    intro_title: "Political Opinion",
    intro_p1: "El mundo está moldeado por decisiones políticas.",
    intro_p2: "Una plataforma neutral que observa el sentimiento público.",
    intro_p3: "Cada transacción representa una perspectiva individual.",
    intro_h2_1: "Neutralidad",
    intro_p4: "Sin ideologías. Sin influencia.",
    intro_h2_2: "Cómo funciona",
    intro_p5: "Los lectores expresan su opinión mediante activos digitales.",
    note: "Observación, no influencia.",
    manifesto_title: "Manifiesto",
    manifesto_p1: "Una plataforma de observación.",
    manifesto_p2: "Opiniones sin intermediarios.",
    manifesto_p3: "Observamos el sentimiento global."
  },
  fr: {
    intro_title: "Political Opinion",
    intro_p1: "Le monde est façonné par des décisions politiques.",
    intro_p2: "Une plateforme neutre d’observation publique.",
    intro_p3: "Chaque transaction est une opinion individuelle.",
    intro_h2_1: "Neutralité",
    intro_p4: "Aucune idéologie. Aucune influence.",
    intro_h2_2: "Fonctionnement",
    intro_p5: "Les lecteurs expriment leur opinion via des actifs numériques.",
    note: "Observation, pas influence.",
    manifesto_title: "Manifeste",
    manifesto_p1: "Une plateforme d’observation.",
    manifesto_p2: "Opinions sans récits.",
    manifesto_p3: "Sentiment global observé."
  },
  zh: {
    intro_title: "政治观点",
    intro_p1: "世界由政治决策塑造。",
    intro_p2: "一个中立的公共情绪观察平台。",
    intro_p3: "每一笔交易代表个人观点。",
    intro_h2_1: "中立性",
    intro_p4: "无意识形态。无影响。",
    intro_h2_2: "运作方式",
    intro_p5: "通过数字资产表达观点。",
    note: "观察，而非影响。",
    manifesto_title: "宣言",
    manifesto_p1: "一个观察平台。",
    manifesto_p2: "去中心化观点表达。",
    manifesto_p3: "观察全球情绪。"
  }
};

/* LANGUAGE SWITCH */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key];
  });

  document.querySelectorAll(".language-switcher img").forEach(img =>
    img.classList.toggle("active", img.dataset.lang === lang)
  );
}

/* EVENTS */
document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

/* DEFAULT */
setLanguage("en");
