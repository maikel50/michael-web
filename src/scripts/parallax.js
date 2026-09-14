const parallaxElements = document.querySelectorAll("[data-parallax]");

const updateParallax = () => {
  const scrollY = window.scrollY;

  parallaxElements.forEach((element) => {
    const speed = Number(element.dataset.parallax);

    element.style.translate = `0 ${scrollY * speed}px`;
  });
};

window.addEventListener("scroll", updateParallax, {
  passive: true,
});

updateParallax();