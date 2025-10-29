
  const carousel = document.getElementById('carousel');
  const bullets = document.getElementById('bullets');
  const slides = carousel.children;
  let currentIndex = 0;
  const slidesPerView = window.innerWidth < 768 ? 1 : 2;
  const totalPages = Math.ceil(slides.length / slidesPerView);

  // cria bullets
  for (let i = 0; i < totalPages; i++) {
    const b = document.createElement('span');
    b.style.cssText = "width:12px; height:12px; border-radius:50%; background:#666; display:inline-block; cursor:pointer;";
    b.onclick = () => goToSlide(i);
    bullets.appendChild(b);
  }
  updateBullets();

  function moveCarousel(dir) {
    currentIndex += dir;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > totalPages - 1) currentIndex = totalPages - 1;
    carousel.scrollTo({
      left: currentIndex * carousel.offsetWidth,
      behavior: "smooth"
    });
    updateBullets();
  }

  function goToSlide(index) {
    currentIndex = index;
    carousel.scrollTo({
      left: currentIndex * carousel.offsetWidth,
      behavior: "smooth"
    });
    updateBullets();
  }

  function updateBullets() {
    [...bullets.children].forEach((b, i) => {
      b.style.background = i === currentIndex ? "#ff6600" : "#666";
    });
  }
