window.addEventListener("DOMContentLoaded", setup);
function setup() {
  const options = {
    rootMargin: "0px 0px -200px 0px",
  };

  const obs = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("hidden");
        observer.unobserve(entry.target);
      } else {
        return;
      }
    });
  }, options);

  const paras = document.querySelectorAll(".hidden");
  paras.forEach((p) => obs.observe(p));
}
