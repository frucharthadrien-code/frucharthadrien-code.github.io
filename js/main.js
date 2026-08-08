/**
 * Portfolio Hadrien Fruchart — motion
 */
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const nodes = document.querySelectorAll(".reveal");

  if (!nodes.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    nodes.forEach((el) => el.classList.add("is-in"));
    return;
  }

  const isMobileView =
    window.matchMedia("(max-width: 760px)").matches ||
    document.documentElement.classList.contains("force-mobile");

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    },
    isMobileView
      ? { rootMargin: "0px 0px 8% 0px", threshold: 0.01 }
      : { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  nodes.forEach((el) => io.observe(el));

  /* Galerie case study : sécurité mobile si l'IO rate un bloc */
  if (isMobileView && document.body.classList.contains("case-page")) {
    window.setTimeout(function () {
      document.querySelectorAll(".case-gallery .phone-frame.reveal:not(.is-in), .case-gallery .shot-frame.reveal:not(.is-in)").forEach(function (el) {
        el.classList.add("is-in");
      });
    }, 600);
  }
})();
