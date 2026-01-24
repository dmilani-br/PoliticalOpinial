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

/* ================= TRANSLATIONS ================= */

const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions.",
    intro_p2: "Public opinion often remains invisible or distorted.",
    intro_p3: "This platform observes sentiment through markets.",
    note: "Observation, not influence.",

    ru_title: "Russia × Ukraine",
    ru_p1: "A war redefining European security.",
    ru_p2: "Energy, alliances and markets are deeply affected.",
    ru_p3: "Global sentiment varies across regions.",

    ih_title: "Hamas × Israel",
    ih_p1: "A long-standing territorial and political conflict.",
    ih_p2: "Civilians face ongoing humanitarian crises.",
    ih_p3: "Public opinion remains polarized worldwide.",

    uc_title: "USA × China",
    uc_p1: "A strategic rivalry shaping global power.",
    uc_p2: "Technology and trade are key battlegrounds.",
    uc_p3: "Markets react to geopolitical signals."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas.",
    intro_p2: "A opinião pública muitas vezes permanece invisível.",
    intro_p3: "Esta plataforma observa o sentimento por meio dos mercados.",
    note: "Observação, não influência.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Uma guerra que redefine a segurança europeia.",
    ru_p2: "Energia, alianças e mercados são profundamente afetados.",
    ru_p3: "O sentimento global varia entre regiões.",

    ih_title: "Hamas × Israel",
    ih_p1: "Um conflito territorial e político de longa data.",
    ih_p2: "Populações civis enfrentam crises humanitárias contínuas.",
    ih_p3: "A opinião pública permanece polarizada no mundo.",

    uc_title: "EUA × China",
    uc_p1: "Uma rivalidade estratégica que molda o poder global.",
    uc_p2: "Tecnologia e comércio são os principais campos de disputa.",
    uc_p3: "Os mercados reagem a sinais geopolíticos."
  },

  es: {
    intro_title: "Political Opinion",
    intro_p1: "El mundo está moldeado por decisiones políticas.",
    intro_p2: "La opinión pública a menudo permanece invisible o distorsionada.",
    intro_p3: "Esta plataforma observa el sentimiento a través de los mercados.",
    note: "Observación, no influencia.",

    ru_title: "Rusia × Ucrania",
    ru_p1: "Una guerra que redefine la seguridad europea.",
    ru_p2: "Energía, alianzas y mercados se ven afectados.",
    ru_p3: "El sentimiento global varía entre regiones.",

    ih_title: "Hamas × Israel",
    ih_p1: "Un conflicto territorial y político de larga duración.",
    ih_p2: "Las poblaciones civiles enfrentan crisis humanitarias.",
    ih_p3: "La opinión pública sigue polarizada a nivel mundial.",

    uc_title: "EE.UU. × China",
    uc_p1: "Una rivalidad estratégica que define el poder global.",
    uc_p2: "La tecnología y el comercio están en disputa.",
    uc_p3: "Los mercados reaccionan a señales geopolíticas."
  },

  fr: {
    intro_title: "Political Opinion",
    intro_p1: "Le monde est façonné par des décisions politiques.",
    intro_p2: "L’opinion publique reste souvent invisible ou déformée.",
    intro_p3: "Cette plateforme observe le sentiment via les marchés.",
    note: "Observation, pas influence.",

    ru_title: "Russie × Ukraine",
    ru_p1: "Une guerre qui redéfinit la sécurité européenne.",
    ru_p2: "L’énergie, les alliances et les marchés sont impactés.",
    ru_p3: "Le sentiment mondial varie selon les régions.",

    ih_title: "Hamas × Israël",
    ih_p1: "Un conflit territorial et politique de longue date.",
    ih_p2: "Les civils font face à des crises humanitaires.",
    ih_p3: "L’opinion publique reste fortement polarisée.",

    uc_title: "États-Unis × Chine",
    uc_p1: "Une rivalité stratégique façonnant le pouvoir mondial.",
    uc_p2: "La technologie et le commerce sont au cœur du conflit.",
    uc_p3: "Les marchés réagissent aux signaux géopolitiques."
  },

  zh: {
    intro_title: "政治观点",
    intro_p1: "世界由政治决策塑造。",
    intro_p2: "公众舆论往往被忽视或扭曲。",
    intro_p3: "该平台通过市场观察公众情绪。",
    note: "观察，而非影响。",

    ru_title: "俄罗斯 × 乌克兰",
    ru_p1: "一场重塑欧洲安全格局的战争。",
    ru_p2: "能源、联盟和市场受到深远影响。",
    ru_p3: "全球情绪因地区而异。",

    ih_title: "哈马斯 × 以色列",
    ih_p1: "一个长期存在的领土与政治冲突。",
    ih_p2: "平民正面临持续的人道主义危机。",
    ih_p3: "全球舆论高度分化。",

    uc_title: "美国 × 中国",
    uc_p1: "塑造全球力量格局的战略竞争。",
    uc_p2: "科技与贸易是核心战场。",
    uc_p3: "市场对地缘政治信号作出反应。"
  }
};

/* ================= LANGUAGE SWITCH ================= */

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll(".language-switcher img").forEach(img => {
    img.classList.toggle("active", img.dataset.lang === lang);
  });
}

/* EVENTS */
document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

/* DEFAULT */
setLanguage("en");
