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
  const next = (currentSlide + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prev);
}

function resetAutoSlide() {
  clearTimeout(autoSlideTimer);
  autoSlideTimer = setTimeout(startAutoSlide, 35000);
}

function startAutoSlide() {
  autoSlideTimer = setInterval(nextSlide, 10000);
}

/* SCROLL DO MOUSE */
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

/* TECLADO ↑ ↓ */
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

/* INICIALIZA */
showSlide(0);
startAutoSlide();
