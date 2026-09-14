const projectMedia = document.querySelectorAll("[data-project-media]");

let ticking = false;

const updateProjects = () => {
  const viewportHeight = window.innerHeight;

  projectMedia.forEach((media) => {
    const parent = media.parentElement;
    const rect = parent.getBoundingClientRect();

    // Solo calculamos elementos cercanos a la pantalla
    if (rect.bottom < 0 || rect.top > viewportHeight) {
      return;
    }

    const center = rect.top + rect.height / 2;
    const viewportCenter = viewportHeight / 2;

    const distance = center - viewportCenter;
    const movement = distance * -0.035;

    media.style.transform = `translateY(${movement}px) scale(1.04)`;
  });

  ticking = false;
};

const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(updateProjects);
    ticking = true;
  }
};

window.addEventListener("scroll", handleScroll, {
  passive: true,
});

window.addEventListener("resize", handleScroll);

updateProjects();