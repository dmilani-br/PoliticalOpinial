const slider = document.getElementById("slider");
const boxTitle = document.getElementById("boxTitle");
const boxText = document.getElementById("boxText");
const boxNote = document.getElementById("boxNote");

const manifestoBtn = document.getElementById("manifestoBtn");
const manifestoModal = document.getElementById("manifestoModal");
const closeManifesto = document.getElementById("closeManifesto");
const manifestoTitle = document.getElementById("manifestoTitle");
const manifestoText = document.getElementById("manifestoText");

let currentLang = "en";
let currentSlide = 0;

const conflicts = [
  { id: "hamas_israel", image: "assets/hamas.png" },
  { id: "russia_ukraine", image: "assets/putin.png" },
  { id: "usa_china", image: "assets/eua.jpeg" },
  { id: "iran_israel", image: "assets/ira.jpeg" }
];

const translations = {
  en: {
    manifestoTitle: "Manifesto",
    manifestoText: "This platform observes global conflicts without influence.",
    conflicts: {
      hamas_israel: {
        title: "Hamas × Israel",
        text: "A conflict rooted in decades of tension.",
        note: "Observation, not influence."
      },
      russia_ukraine: {
        title: "Russia × Ukraine",
        text: "A geopolitical confrontation reshaping Europe.",
        note: "Observation, not influence."
      },
      usa_china: {
        title: "USA × China",
        text: "A dispute of power, economy and influence.",
        note: "Observation, not influence."
      },
      iran_israel: {
        title: "Iran × Israel",
        text: "Indirect conflict through regional tensions.",
        note: "Observation, not influence."
      }
    }
  },

  pt: {
    manifestoTitle: "Manifesto",
    manifestoText: "Esta plataforma observa conflitos globais sem influenciar.",
    conflicts: {
      hamas_israel: {
        title: "Hamas × Israel",
        text: "Um conflito enraizado em décadas de tensão.",
        note: "Observação, não influência."
      },
      russia_ukraine: {
        title: "Rússia × Ucrânia",
        text: "Confronto geopolítico que redefine a Europa.",
        note: "Observação, não influência."
      },
      usa_china: {
        title: "EUA × China",
        text: "Disputa de poder, economia e influência.",
        note: "Observação, não influência."
      },
      iran_israel: {
        title: "Irã × Israel",
        text: "Conflito indireto por tensões regionais.",
        note: "Observação, não influência."
      }
    }
  }
};

/* ---------- RENDER ---------- */
function renderSlides() {
  slider.innerHTML = "";
  conflicts.forEach(conflict => {
    const slide = document.createElement("div");
    slide.className = "slide";
    slide.style.backgroundImage = `url(${conflict.image})`;
    slider.appendChild(slide);
  });
}

function updateText() {
  const conflict = conflicts[currentSlide];
  const data = translations[currentLang].conflicts[conflict.id];

  boxTitle.textContent = data.title;
  boxText.textContent = data.text;
  boxNote.textContent = data.note;

  manifestoBtn.textContent = translations[currentLang].manifestoTitle;
  manifestoTitle.textContent = translations[currentLang].manifestoTitle;
  manifestoText.textContent = translations[currentLang].manifestoText;
}

function updateSlide() {
  slider.style.transform = `translateX(-${currentSlide * 100}vw)`;
  updateText();
}

/* ---------- CONTROLS ---------- */
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight") {
    currentSlide = (currentSlide + 1) % conflicts.length;
    updateSlide();
  }
  if (e.key === "ArrowLeft") {
    currentSlide =
      (currentSlide - 1 + conflicts.length) % conflicts.length;
    updateSlide();
  }
});

document.querySelectorAll("[data-lang]").forEach(btn => {
  btn.addEventListener("click", () => {
    currentLang = btn.dataset.lang;
    updateText();
  });
});

manifestoBtn.onclick = () => manifestoModal.classList.remove("hidden");
closeManifesto.onclick = () => manifestoModal.classList.add("hidden");

/* ---------- INIT ---------- */
renderSlides();
updateSlide();
