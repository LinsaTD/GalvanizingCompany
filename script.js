document.addEventListener("DOMContentLoaded", function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slideshow-image');

  function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  // Initial activation
  if (slides.length > 0) slides[0].classList.add('active');
  setInterval(showSlides, 3000);
});

  if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
