const translations = {
  en: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform.",
    manifesto_p2: "Opinions are expressed through decentralized market participation.",
    manifesto_p3: "This platform exists to observe how global sentiment emerges.",
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions, yet public opinion often remains invisible or distorted.",
    intro_p2: "Political Opinion is a neutral platform that reveals public sentiment through digital markets.",
    intro_p3: "Each interaction represents an individual perspective.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Opinions are expressed through voluntary market participation.",
    note: "Observation, not influence."
  },

  pt: {
    manifesto_btn: "Manifesto",
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion é uma plataforma de observação.",
    manifesto_p2: "As opiniões são expressas por meio de participação em mercados descentralizados.",
    manifesto_p3: "Esta plataforma existe para observar como o sentimento global emerge.",
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes é distorcida.",
    intro_p2: "Political Opinion é uma plataforma neutra baseada em mercados digitais.",
    intro_p3: "Cada interação representa uma perspectiva individual.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Opiniões são expressas por participação voluntária no mercado.",
    note: "Observação, não influência."
  },

  es: {
    manifesto_btn: "Manifiesto",
    manifesto_title: "Manifiesto",
    manifesto_p1: "Political Opinion es una plataforma de observación.",
    manifesto_p2: "Las opiniones se expresan mediante mercados descentralizados.",
    manifesto_p3: "Esta plataforma observa cómo surge el sentimiento global.",
    intro_title: "Political Opinion",
    intro_p1: "El mundo está moldeado por decisiones políticas.",
    intro_p2: "Una plataforma neutral basada en mercados digitales.",
    intro_p3: "Cada interacción representa una perspectiva individual.",
    intro_h2_1: "Neutralidad",
    intro_p4: "Sin ideologías. Sin influencia.",
    intro_h2_2: "Cómo Funciona",
    intro_p5: "Las opiniones se expresan mediante participación voluntaria.",
    note: "Observación, no influencia."
  },

  fr: {
    manifesto_btn: "Manifeste",
    manifesto_title: "Manifeste",
    manifesto_p1: "Political Opinion est une plateforme d’observation.",
    manifesto_p2: "Les opinions s’expriment via des marchés décentralisés.",
    manifesto_p3: "Cette plateforme observe le sentiment mondial.",
    intro_title: "Political Opinion",
    intro_p1: "Le monde est façonné par des décisions politiques.",
    intro_p2: "Une plateforme neutre basée sur des marchés numériques.",
    intro_p3: "Chaque interaction reflète une perspective individuelle.",
    intro_h2_1: "Neutralité",
    intro_p4: "Aucune idéologie. Aucune influence.",
    intro_h2_2: "Fonctionnement",
    intro_p5: "Les opinions s’expriment volontairement via le marché.",
    note: "Observation, pas influence."
  },

  zh: {
    manifesto_btn: "宣言",
    manifesto_title: "宣言",
    manifesto_p1: "Political Opinion 是一个观察平台。",
    manifesto_p2: "观点通过去中心化市场表达。",
    manifesto_p3: "该平台用于观察全球情绪的形成。",
    intro_title: "政治观点",
    intro_p1: "世界由政治决策塑造。",
    intro_p2: "一个基于数字市场的中立平台。",
    intro_p3: "每次互动代表个人观点。",
    intro_h2_1: "中立性",
    intro_p4: "无意识形态。无影响。",
    intro_h2_2: "运作方式",
    intro_p5: "观点通过自愿参与市场表达。",
    note: "观察，而非影响。"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || "";
  });
  localStorage.setItem("lang", lang);
}

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    setLanguage(btn.dataset.lang);
  });
});

setLanguage(localStorage.getItem("lang") || "en");
