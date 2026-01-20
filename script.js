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
    note: "Observation, not influence."
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
    note: "Observação, não influência."
  },

  es: {
    manifesto_btn: "Manifiesto",
    manifesto_title: "Manifiesto",
    manifesto_p1: "Political Opinion es una plataforma de observación. No promueve ideologías, candidatos ni resultados.",
    manifesto_p2: "Las opiniones se expresan mediante la participación en mercados descentralizados, no encuestas ni narrativas.",
    manifesto_p3: "Esta plataforma existe para observar cómo surge el sentimiento global — libre, anónimo y sin intermediarios.",

    intro_title: "Political Opinion",
    intro_p1: "El mundo está moldeado por decisiones políticas.",
    intro_p2: "Una plataforma neutral basada en criptomonedas.",
    intro_p3: "Cada transacción representa una perspectiva individual.",
    intro_h2_1: "Neutralidad",
    intro_p4: "Sin ideologías. Sin influencia.",
    intro_h2_2: "Cómo Funciona",
    intro_p5: "Los lectores expresan su opinión mediante activos digitales.",
    note: "Observación, no influencia."
  },

  fr: {
    manifesto_btn: "Manifeste",
    manifesto_title: "Manifeste",
    manifesto_p1: "Political Opinion est une plateforme d’observation. Elle ne promeut aucune idéologie, candidat ou résultat.",
    manifesto_p2: "Les opinions s’expriment par la participation à des marchés décentralisés, pas par des sondages ou récits.",
    manifesto_p3: "Cette plateforme existe pour observer l’émergence du sentiment mondial — librement, anonymement et sans intermédiaires.",

    intro_title: "Political Opinion",
    intro_p1: "Le monde est façonné par des décisions politiques.",
    intro_p2: "Une plateforme neutre basée sur les cryptomonnaies.",
    intro_p3: "Chaque transaction reflète une opinion individuelle.",
    intro_h2_1: "Neutralité",
    intro_p4: "Sans idéologies. Sans influence.",
    intro_h2_2: "Fonctionnement",
    intro_p5: "Expression via des actifs numériques.",
    note: "Observation, pas influence."
  },

  zh: {
    manifesto_btn: "宣言",
    manifesto_title: "宣言",
    manifesto_p1: "Political Opinion 是一个观察平台，不推广任何意识形态、候选人或结果。",
    manifesto_p2: "观点通过去中心化市场参与表达，而非调查、叙事或引导。",
    manifesto_p3: "该平台用于观察全球情绪如何自由、匿名且无中介地形成。",

    intro_title: "政治观点",
    intro_p1: "世界由政治决策塑造。",
    intro_p2: "一个基于加密货币的中立平台。",
    intro_p3: "每一笔交易代表个人观点。",
    intro_h2_1: "中立性",
    intro_p4: "无意识形态。无影响。",
    intro_h2_2: "运作方式",
    intro_p5: "通过数字资产表达观点。",
    note: "观察，而非影响。"
  }
};

/* ===== LANGUAGE SWITCH ===== */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
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

/* INIT */
setLanguage(localStorage.getItem("lang") || "en");
