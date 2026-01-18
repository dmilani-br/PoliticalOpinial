const slides = document.querySelectorAll(".slide");
let current = 0;
let isScrolling = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

window.addEventListener("wheel", (e) => {
  if (isScrolling) return;

  isScrolling = true;

  if (e.deltaY > 0 && current < slides.length - 1) {
    current++;
  } else if (e.deltaY < 0 && current > 0) {
    current--;
  }

  showSlide(current);

  setTimeout(() => {
    isScrolling = false;
  }, 1200);
});
