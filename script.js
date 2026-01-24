const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
}

document.addEventListener("wheel", e => {
  if (e.deltaY > 0 && currentSlide < slides.length - 1) currentSlide++;
  if (e.deltaY < 0 && currentSlide > 0) currentSlide--;
  showSlide(currentSlide);
});

document.addEventListener("keydown", e => {
  if (e.key === "ArrowDown" && currentSlide < slides.length - 1) currentSlide++;
  if (e.key === "ArrowUp" && currentSlide > 0) currentSlide--;
  showSlide(currentSlide);
});

const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "Political decisions shape nations and global dynamics.",
    intro_p2: "Public sentiment is often filtered, distorted or ignored.",
    intro_p3: "This platform observes opinion through decentralized markets.",
    note: "Observation, not influence.",

    ru_title: "Russia × Ukraine",
    ru_p1: "A large-scale conflict redefining European security.",
    ru_p2: "Energy markets, alliances and military balances are affected.",
    ru_p3: "Narratives differ sharply across regions.",
    ru_p4: "Sentiment is observed, not guided.",

    ih_title: "Israel × Hamas",
    ih_p1: "A prolonged conflict rooted in territory and identity.",
    ih_p2: "Civilian populations endure ongoing humanitarian crises.",
    ih_p3: "Global opinion remains deeply divided.",
    ih_p4: "Markets reflect collective perception.",

    uc_title: "United States × China",
    uc_p1: "A strategic rivalry shaping the 21st century.",
    uc_p2: "Technology, trade and influence are contested.",
    uc_p3: "Economic confidence reacts to political signals.",
    uc_p4: "Observation through market behavior."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "Decisões políticas moldam países e o mundo.",
    intro_p2: "A opinião pública muitas vezes é filtrada ou distorcida.",
    intro_p3: "Aqui, o sentimento é observado através do mercado.",
    note: "Observação, não influência.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Um conflito de grande escala que redefine a segurança europeia.",
    ru_p2: "Mercados de energia e alianças globais são impactados.",
    ru_p3: "Narrativas variam fortemente entre regiões.",
    ru_p4: "O sentimento é apenas observado.",

    ih_title: "Israel × Hamas",
    ih_p1: "Conflito prolongado baseado em território e identidade.",
    ih_p2: "Populações civis enfrentam crises humanitárias constantes.",
    ih_p3: "A opinião global permanece polarizada.",
    ih_p4: "O mercado reflete a percepção coletiva.",

    uc_title: "Estados Unidos × China",
    uc_p1: "Rivalidade estratégica que define o século XXI.",
    uc_p2: "Tecnologia, comércio e poder estão em disputa.",
    uc_p3: "O mercado reage a sinais políticos.",
    uc_p4: "Observação via comportamento econômico."
  },

  es: {
    intro_title: "Political Opinion",
    intro_p1: "Las decisiones políticas moldean el mundo.",
    intro_p2: "La opinión pública suele ser distorsionada.",
    intro_p3: "Aquí se observa a través del mercado.",
    note: "Observación, no influencia.",

    ru_title: "Rusia × Ucrania",
    ru_p1: "Conflicto que redefine la seguridad europea.",
    ru_p2: "Impacta energía y alianzas globales.",
    ru_p3: "Las narrativas varían según la región.",
    ru_p4: "Solo observación.",

    ih_title: "Israel × Hamas",
    ih_p1: "Conflicto histórico de identidad y territorio.",
    ih_p2: "Civiles enfrentan crisis humanitarias.",
    ih_p3: "Opinión global dividida.",
    ih_p4: "El mercado refleja percepción.",

    uc_title: "EE.UU. × China",
    uc_p1: "Rivalidad estratégica global.",
    uc_p2: "Tecnología y comercio en disputa.",
    uc_p3: "El mercado reacciona a la política.",
    uc_p4: "Observación económica."
  },

  fr: {
    intro_title: "Political Opinion",
    intro_p1: "Les décisions politiques façonnent le monde.",
    intro_p2: "L’opinion publique est souvent déformée.",
    intro_p3: "Ici, elle est observée via le marché.",
    note: "Observation, pas influence.",

    ru_title: "Russie × Ukraine",
    ru_p1: "Conflit redéfinissant la sécurité européenne.",
    ru_p2: "Impact sur l’énergie et les alliances.",
    ru_p3: "Narratifs très divergents.",
    ru_p4: "Observation uniquement.",

    ih_title: "Israël × Hamas",
    ih_p1: "Conflit prolongé et identitaire.",
    ih_p2: "Crises humanitaires persistantes.",
    ih_p3: "Opinion mondiale polarisée.",
    ih_p4: "Le marché reflète la perception.",

    uc_title: "États-Unis × Chine",
    uc_p1: "Rivalité stratégique mondiale.",
    uc_p2: "Technologie et commerce en tension.",
    uc_p3: "Le marché réagit aux signaux politiques.",
    uc_p4: "Observation collective."
  },

  zh: {
    intro_title: "政治观点",
    intro_p1: "政治决策塑造世界。",
    intro_p2: "公众情绪常被忽视或扭曲。",
    intro_p3: "本平台通过市场观察观点。",
    note: "观察，而非影响。",

    ru_title: "俄罗斯 × 乌克兰",
    ru_p1: "重塑欧洲安全的冲突。",
    ru_p2: "影响能源和全球联盟。",
    ru_p3: "地区叙事差异巨大。",
    ru_p4: "仅作观察。",

    ih_title: "以色列 × 哈马斯",
    ih_p1: "长期的领土与身份冲突。",
    ih_p2: "平民面临人道危机。",
    ih_p3: "全球观点分裂。",
    ih_p4: "市场反映感知。",

    uc_title: "美国 × 中国",
    uc_p1: "塑造世纪的战略竞争。",
    uc_p2: "科技与贸易角力。",
    uc_p3: "市场随政治信号波动。",
    uc_p4: "集体观察。"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });

  document.querySelectorAll(".language-switcher button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === lang)
  );
}

document.querySelectorAll(".language-switcher button").forEach(btn => {
  btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
});

setLanguage("en");
