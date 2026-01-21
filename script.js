const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let isScrolling = false;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");
}

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
    showSlide(currentSlide);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentSlide);
  }
}

window.addEventListener("wheel", e => {
  if (isScrolling) return;
  isScrolling = true;

  if (e.deltaY > 0) {
    nextSlide();
  } else {
    prevSlide();
  }

  setTimeout(() => {
    isScrolling = false;
  }, 700);
});

window.addEventListener("keydown", e => {
  if (e.key === "ArrowDown") nextSlide();
  if (e.key === "ArrowUp") prevSlide();
});

showSlide(currentSlide);
