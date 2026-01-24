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

document.addEventListener("keydown", e => {
  if (e.key === "ArrowDown" && current < slides.length - 1) current++;
  if (e.key === "ArrowUp" && current > 0) current--;
  showSlide(current);
});

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
    intro_p2: "A opinião pública muitas vezes é invisível.",
    intro_p3: "Esta plataforma observa o sentimento via mercados.",
    note: "Observação, não influência.",

    ru_title: "Rússia × Ucrânia",
    ru_p1: "Uma guerra que redefine a segurança europeia.",
    ru_p2: "Energia, alianças e mercados são impactados.",
    ru_p3: "O sentimento global varia entre regiões.",

    ih_title: "Hamas × Israel",
    ih_p1: "Conflito histórico territorial e político.",
    ih_p2: "Populações civis enfrentam crises humanitárias.",
    ih_p3: "A opinião pública é altamente polarizada.",

    uc_title: "EUA × China",
    uc_p1: "Rivalidade estratégica global.",
    uc_p2: "Tecnologia e comércio em disputa.",
    uc_p3: "Mercados reagem à política internacional."
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[lang][el.dataset.i18n];
  });

  document.querySelectorAll(".language-switcher img").forEach(img => {
    img.classList.toggle("active", img.dataset.lang === lang);
  });
}

document.querySelectorAll(".language-switcher img").forEach(img => {
  img.addEventListener("click", () => setLanguage(img.dataset.lang));
});

setLanguage("en");
