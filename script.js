const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

/* ---------- SLIDES ---------- */
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

/* ---------- TRANSLATIONS ---------- */
const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "Political decisions shape the world.",
    intro_p2: "Yet public sentiment is often invisible or distorted.",
    intro_p3: "This platform observes opinion through market behavior.",
    note: "Observation, not influence.",

    ru_title: "Russia × Ukraine",
    ru_p1: "A large-scale military conflict impacting global security.",
    ru_p2: "Energy markets, alliances, and regional stability are affected.",
    ru_p3: "Narratives vary across borders and media systems.",
    ru_p4: "This platform observes sentiment without interference.",

    ih_title: "Israel × Hamas",
    ih_p1: "A decades-long conflict rooted in territory and identity.",
    ih_p2: "Civilian populations face ongoing humanitarian crises.",
    ih_p3: "International reactions are deeply polarized.",
    ih_p4: "Sentiment is observed through decentralized participation.",

    uc_title: "United States × China",
    uc_p1: "A strategic rivalry shaping the global order.",
    uc_p2: "Technology, trade, and military influence are contested.",
    uc_p3: "Economic confidence fluctuates with political signals.",
    uc_p4: "Markets reflect collective expectations."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "Decisões políticas moldam o mundo.",
    intro_p2: "Mas a opinião pública muitas vezes é invisível.",
    intro_p3: "Esta plataforma observa o sentimento pelo mercado.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Um conflito militar de grande escala.",
    ru_p2: "Afeta segurança global e mercados de energia.",
    ru_p3: "Narrativas variam entre países.",
    ru_p4: "Observação sem influência.",

    ih_title: "Israel × Hamas",
    ih_p1: "Conflito histórico marcado por território e identidade.",
    ih_p2: "Civis enfrentam crises humanitárias.",
    ih_p3: "Reações globais são polarizadas.",
    ih_p4: "O sentimento é observado livremente.",

    uc_title: "Estados Unidos × China",
    uc_p1: "Rivalidade estratégica global.",
    uc_p2: "Tecnologia e comércio estão no centro.",
    uc_p3: "O mercado reage a sinais políticos.",
    uc_p4: "Expectativas coletivas são observadas."
  },

  es: { /* segue mesma estrutura */ },
  fr: { /* segue mesma estrutura */ },
  zh: { /* segue mesma estrutura */ }
};

/* ---------- LANGUAGE ENGINE ---------- */
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    el.textContent = translations[lang][key] || translations.en[key];
  });

  document.querySelectorAll(".language-switcher img").forEach(img => {
    img.classList.toggle("active", img.dataset.lang === lang);
  });
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

setLanguage("en");
