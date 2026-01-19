/* ================= SLIDES ================= */

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let autoSlideTimer;
let isScrolling = false;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

function resetAutoSlide() {
  clearInterval(autoSlideTimer);
  autoSlideTimer = setInterval(nextSlide, 10000);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, 10000);
}

/* ===== SCROLL DO MOUSE ===== */
window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }

  resetAutoSlide();
  setTimeout(() => (isScrolling = false), 1200);
});

/* ===== TECLADO ↑ ↓ ===== */
window.addEventListener("keydown", (e) => {
  if (isScrolling) return;

  if (e.key === "ArrowDown") {
    nextSlide();
  }

  if (e.key === "ArrowUp") {
    prevSlide();
  }

  resetAutoSlide();
  isScrolling = true;
  setTimeout(() => (isScrolling = false), 1200);
});

/* ===== INICIALIZA ===== */
showSlide(0);
startAutoSlide();

/* ================= LANGUAGES ================= */

const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions, yet public opinion often remains invisible or distorted.",
    intro_p2: "Political Opinion is a neutral platform that reveals public sentiment through the buying and selling of cryptocurrencies.",
    intro_p3: "Each transaction represents a sincere individual perspective, expressed freely without surveys, manipulation, or intermediaries.",
    intro_h2_1: "Neutrality",
    intro_p4: "No ideologies. No endorsements. No influence over decisions.",
    intro_h2_2: "How It Works",
    intro_p5: "Readers express their opinion by trading digital assets linked to global political events and leaders.",
    note: "Observation, not influence.",
    ru_title: "Russia × Ukraine",
    ru_p1: "The conflict between Russia and Ukraine represents one of the most significant geopolitical crises of the 21st century.",
    ru_p2: "Political Opinion does not endorse positions or outcomes. It observes public sentiment expressed through decentralized markets.",
    hi_title: "Hamas × Israel",
    hi_p1: "The Israel–Hamas conflict is rooted in decades of political tensions in the Middle East.",
    hi_p2: "It encompasses issues of security, governance and international law.",
    hi_p3: "Political Opinion does not promote narratives or outcomes."
  },

  pt: {
    intro_title: "Opinião Política",
    intro_p1: "O mundo é moldado por decisões políticas, mas a opinião pública muitas vezes permanece invisível ou distorcida.",
    intro_p2: "Opinião Política é uma plataforma neutra que revela o sentimento público por meio da compra e venda de criptomoedas.",
    intro_p3: "Cada transação representa uma perspectiva individual sincera, expressa livremente.",
    intro_h2_1: "Neutralidade",
    intro_p4: "Sem ideologias. Sem endossos. Sem influência.",
    intro_h2_2: "Como Funciona",
    intro_p5: "Leitores expressam sua opinião negociando ativos digitais.",
    note: "Observação, não influência.",
    ru_title: "Rússia × Ucrânia",
    ru_p1: "O conflito entre Rússia e Ucrânia representa uma das maiores crises geopolíticas do século XXI.",
    ru_p2: "A plataforma não endossa posições. Apenas observa o sentimento público.",
    hi_title: "Hamas × Israel",
    hi_p1: "O conflito Israel–Hamas tem raízes em décadas de tensões políticas.",
    hi_p2: "Inclui questões de segurança, governança e direito internacional.",
    hi_p3: "A plataforma não promove narrativas."
  },

  es: {
    intro_title: "Opinión Política",
    intro_p1: "El mundo está moldeado por decisiones políticas, pero la opinión pública a menudo permanece invisible.",
    intro_p2: "Opinión Política es una plataforma neutral basada en criptomonedas.",
    intro_p3: "Cada transacción representa una perspectiva individual.",
    intro_h2_1: "Neutralidad",
    intro_p4: "Sin ideologías. Sin influencia.",
    intro_h2_2: "Cómo Funciona",
    intro_p5: "Los lectores expresan su opinión mediante activos digitales.",
    note: "Observación, no influencia.",
    ru_title: "Rusia × Ucrania",
    ru_p1: "El conflicto representa una crisis geopolítica clave.",
    ru_p2: "La plataforma observa el sentimiento público.",
    hi_title: "Hamas × Israel",
    hi_p1: "Conflicto arraigado en décadas de tensión.",
    hi_p2: "Incluye seguridad y derecho internacional.",
    hi_p3: "No promueve narrativas."
  },

  fr: {
    intro_title: "Opinion Politique",
    intro_p1: "Le monde est façonné par des décisions politiques.",
    intro_p2: "Une plateforme neutre basée sur les cryptomonnaies.",
    intro_p3: "Chaque transaction reflète une opinion individuelle.",
    intro_h2_1: "Neutralité",
    intro_p4: "Sans idéologie.",
    intro_h2_2: "Fonctionnement",
    intro_p5: "Expression via actifs numériques.",
    note: "Observation, pas influence.",
    ru_title: "Russie × Ukraine",
    ru_p1: "Une crise géopolitique majeure.",
    ru_p2: "Observation du sentiment public.",
    hi_title: "Hamas × Israël",
    hi_p1: "Conflit de longue date.",
    hi_p2: "Sécurité et droit international.",
    hi_p3: "Aucune promotion narrative."
  },

  zh: {
    intro_title: "政治观点",
    intro_p1: "世界由政治决策塑造。",
    intro_p2: "一个基于加密货币的中立平台。",
    intro_p3: "每一笔交易代表个人观点。",
    intro_h2_1: "中立性",
    intro_p4: "无意识形态。",
    intro_h2_2: "运作方式",
    intro_p5: "通过数字资产表达观点。",
    note: "观察，而非影响。",
    ru_title: "俄罗斯 × 乌克兰",
    ru_p1: "重大的地缘政治危机。",
    ru_p2: "观察公众情绪。",
    hi_title: "哈马斯 × 以色列",
    hi_p1: "长期冲突。",
    hi_p2: "涉及安全与国际法。",
    hi_p3: "不推广立场。"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

setLanguage(localStorage.getItem("lang") || "en");

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => {
    setLanguage(img.dataset.lang);
  });
});
