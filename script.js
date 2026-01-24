const slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove("active"));
  slides[i].classList.add("active");
}

document.addEventListener("wheel", e => {
  if (e.deltaY > 0 && current < slides.length - 1) current++;
  if (e.deltaY < 0 && current > 0) current--;
  showSlide(current);
});

const translations = {
  en: {
    intro_title: "Political Opinion",
    intro_p1: "The world is shaped by political decisions.",
    intro_p2: "Public opinion is often invisible or distorted.",
    intro_p3: "This platform observes sentiment through markets.",
    note: "Observation, not influence.",

    ru_title: "Russia × Ukraine",
    ru_p1: "A large-scale war reshaping European security.",
    ru_p2: "Energy markets and global alliances are affected.",
    ru_p3: "Narratives vary dramatically across regions.",

    ih_title: "Hamas × Israel",
    ih_p1: "A decades-long conflict rooted in territory and identity.",
    ih_p2: "Civilians face ongoing humanitarian crises.",
    ih_p3: "Global opinion remains deeply polarized.",

    uc_title: "USA × China",
    uc_p1: "A strategic rivalry shaping the 21st century.",
    uc_p2: "Technology, trade and influence are contested.",
    uc_p3: "Markets respond to geopolitical signals."
  },

  pt: {
    intro_title: "Political Opinion",
    intro_p1: "O mundo é moldado por decisões políticas.",
    intro_p2: "A opinião pública muitas vezes é invisível.",
    intro_p3: "Observamos o sentimento através do mercado.",
    note: "Observação, não influência.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Uma guerra que redefine a segurança europeia.",
    ru_p2: "Impacta energia e alianças globais.",
    ru_p3: "Narrativas variam entre países.",

    ih_title: "Hamas × Israel",
    ih_p1: "Conflito histórico baseado em território.",
    ih_p2: "Populações civis enfrentam crises humanitárias.",
    ih_p3: "A opinião global é polarizada.",

    uc_title: "EUA × China",
    uc_p1: "Rivalidade estratégica do século XXI.",
    uc_p2: "Tecnologia e comércio em disputa.",
    uc_p3: "Mercados reagem à política."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

setLanguage("en");
