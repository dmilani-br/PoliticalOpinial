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
    intro
