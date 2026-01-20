const translations = {
  en: {
    manifesto_btn: "Manifesto",
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
    intro_title: "Opinião Política",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes permanece invisível ou distorcida.",
    intro_p2: "Opinião Política é uma plataforma neutra que revela o sentimento público por meio da compra e venda de criptomoedas.",
    intro_p3: "Cada transação representa uma perspectiva individual sincera.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Leitores expressam sua opinião negociando ativos digitais ligados a eventos globais.",
    note: "Observação, não influência."
  },

  es: {
    manifesto_btn: "Manifiesto",
    intro_title: "Opinión Política",
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
    intro_title: "Opinion Politique",
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
document.querySelectorAll(".language-switcher img").forEach(flag => {
  flag.addEventListener("click", () => {
    const lang = flag.dataset.lang;
    setLanguage(lang);
  });
});

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}
