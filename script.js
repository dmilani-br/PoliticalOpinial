const slides = document.querySelectorAll(".slide");
let current = 0;

/* ================= SLIDES ================= */
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

/* ================= TRANSLATIONS ================= */
const translations = {
  en: {
    /* INTRO */
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions, yet public opinion often remains invisible or distorted.",
    intro_p2: "Political Opinion is a neutral platform that reveals public sentiment through the buying and selling of cryptocurrencies.",
    intro_p3: "Each transaction represents a sincere individual perspective.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence.",
    intro_h2_2: "How It Works",
    intro_p5: "Readers express their opinion by trading digital assets linked to global events.",
    note: "Observation, not influence.",

    /* MANIFESTO */
    manifesto_title: "Manifesto",
    manifesto_p1: "Political Opinion is an observational platform.",
    manifesto_p2: "Opinions are expressed through decentralized market participation.",
    manifesto_p3: "This platform exists to observe global sentiment.",

    /* CONFLICTS */
    ru_title: "Russia × Ukraine",
    ru_p1: "A major geopolitical conflict reshaping regional and global power dynamics.",
    ru_p2: "Military actions, sanctions, and diplomacy influence international stability.",
    ru_p3: "Public sentiment is observed through decentralized market behavior.",

    hi_title: "Hamas × Israel",
    hi_p1: "A conflict rooted in decades of territorial, political, and humanitarian tension.",
    hi_p2: "Cycles of violence continue to affect regional security and civilians.",
    hi_p3: "This platform observes sentiment without promoting narratives.",

    uc_title: "USA × China",
    uc_p1: "A strategic rivalry shaping global economics, technology, and diplomacy.",
    uc_p2: "Trade, innovation, and geopolitical influence define this competition.",
    uc_p3: "Market behavior reflects shifting global confidence.",

    ii_title: "Iran × Iraq",
    ii_p1: "A historic regional conflict with long-lasting geopolitical consequences.",
    ii_p2: "Its legacy still influences Middle Eastern power structures.",
    ii_p3: "Public perception is observed through decentralized participation."
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
    manifesto_p3: "Observamos o sentimento global.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Um conflito geopolítico central no cenário internacional atual.",
    ru_p2: "Sanções, guerra e diplomacia impactam a estabilidade global.",
    ru_p3: "O sentimento público é observado por meio do mercado.",

    hi_title: "Hamas × Israel",
    hi_p1: "Um conflito marcado por décadas de tensões territoriais e humanitárias.",
    hi_p2: "A violência recorrente afeta civis e a estabilidade regional.",
    hi_p3: "A plataforma observa o sentimento sem promover narrativas.",

    uc_title: "EUA × China",
    uc_p1: "Uma rivalidade estratégica que molda a economia e a política global.",
    uc_p2: "Tecnologia, comércio e influência geopolítica estão em disputa.",
    uc_p3: "O mercado reflete mudanças de confiança global.",

    ii_title: "Irã × Iraque",
    ii_p1: "Um conflito histórico com impactos duradouros no Oriente Médio.",
    ii_p2: "Seu legado ainda influencia a política regional.",
    ii_p3: "A percepção pública é observada de forma descentralizada."
  },

  es: {
    ru_title: "Rusia × Ucrania",
    ru_p1: "Un conflicto geopolítico clave del siglo XXI.",
    ru_p2: "La guerra y la diplomacia influyen en la estabilidad global.",
    ru_p3: "El sentimiento público se observa a través del mercado.",

    hi_title: "Hamas × Israel",
    hi_p1: "Un conflicto marcado por décadas de tensiones territoriales.",
    hi_p2: "La violencia afecta a civiles y a la seguridad regional.",
    hi_p3: "La plataforma observa el sentimiento sin promover narrativas.",

    uc_title: "EE.UU. × China",
    uc_p1: "Una rivalidad estratégica con impacto global.",
    uc_p2: "Economía, tecnología y poder están en disputa.",
    uc_p3: "El mercado refleja cambios de confianza.",

    ii_title: "Irán × Irak",
    ii_p1: "Un conflicto histórico con efectos duraderos.",
    ii_p2: "Su legado sigue influyendo en la región.",
    ii_p3: "La percepción pública se observa de forma descentralizada."
  },

  fr: {
    ru_title: "Russie × Ukraine",
    ru_p1: "Un conflit géopolitique majeur du XXIe siècle.",
    ru_p2: "La guerre et la diplomatie influencent la stabilité mondiale.",
    ru_p3: "Le sentiment public est observé via le marché.",

    hi_title: "Hamas × Israël",
    hi_p1: "Un conflit enraciné dans des décennies de tensions.",
    hi_p2: "La violence impacte les civils et la sécurité régionale.",
    hi_p3: "La plateforme observe le sentiment sans récits.",

    uc_title: "États-Unis × Chine",
    uc_p1: "Une rivalité stratégique à portée mondiale.",
    uc_p2: "Économie, technologie et influence sont en jeu.",
    uc_p3: "Le marché reflète la confiance mondiale.",

    ii_title: "Iran × Irak",
    ii_p1: "Un conflit historique aux conséquences durables.",
    ii_p2: "Son héritage influence encore la région.",
    ii_p3: "La perception publique est observée."
  },

  zh: {
    ru_title: "俄罗斯 × 乌克兰",
    ru_p1: "21世纪最重要的地缘政治冲突之一。",
    ru_p2: "战争与外交影响全球稳定。",
    ru_p3: "公众情绪通过市场行为观察。",

    hi_title: "哈马斯 × 以色列",
    hi_p1: "一个持续数十年的地区冲突。",
    hi_p2: "暴力影响平民与地区安全。",
    hi_p3: "平台不推广任何叙事。",

    uc_title: "美国 × 中国",
    uc_p1: "塑造全球格局的战略竞争。",
    uc_p2: "经济、科技与影响力的较量。",
    uc_p3: "市场反映信心变化。",

    ii_title: "伊朗 × 伊拉克",
    ii_p1: "具有长期影响的历史冲突。",
    ii_p2: "其遗产仍影响地区政治。",
    ii_p3: "公众情绪被持续观察。"
  }
};

/* ================= LANGUAGE SWITCH ================= */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
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
