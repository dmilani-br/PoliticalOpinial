const slides = document.querySelectorAll(".slide");
let current = 0;
let autoplay;
let pauseTimeout;

/* MOSTRAR SLIDE */
function showSlide(index) {
  slides[current].classList.remove("active");
  current = (index + slides.length) % slides.length;
  slides[current].classList.add("active");
}

/* AUTOPLAY */
function startAutoplay() {
  autoplay = setInterval(() => {
    showSlide(current + 1);
  }, 8000);
}

/* PAUSAR AUTOPLAY */
function pauseAutoplay() {
  clearInterval(autoplay);
  clearTimeout(pauseTimeout);

  pauseTimeout = setTimeout(() => {
    startAutoplay();
  }, 35000);
}

/* SCROLL CONTROL */
window.addEventListener("wheel", (e) => {
  pauseAutoplay();

  if (e.deltaY > 0) {
    showSlide(current + 1);
  } else {
    showSlide(current - 1);
  }
});

/* INICIAR */
startAutoplay();
