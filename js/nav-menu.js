/**
 * Menu mobile escalier — méthode Fruchart (§8bis METHODES_AGENT.md)
 */
(function () {
  var ANIM_MS = 400;
  var animTimer = null;
  var ignoreOutsideUntil = 0;

  function isMobileNav() {
    return window.matchMedia("(max-width: 760px)").matches ||
      document.documentElement.classList.contains("force-mobile");
  }

  function panel() {
    return document.querySelector("[data-nav]");
  }

  function toggleBtn() {
    return document.querySelector("[data-nav-toggle]");
  }

  function menuState(nav) {
    return nav ? (nav.getAttribute("data-menu-state") || "") : "";
  }

  function restartAnimations(nav) {
    nav.querySelectorAll("a").forEach(function (link) {
      link.style.animation = "none";
      void link.offsetWidth;
      link.style.animation = "";
    });
  }

  function resetClosed() {
    window.clearTimeout(animTimer);
    var nav = panel();
    var btn = toggleBtn();
    if (!nav) return;
    nav.classList.remove("is-open");
    nav.removeAttribute("data-menu-state");
    restartAnimations(nav);
    document.body.classList.remove("nav-menu-open");
    document.documentElement.classList.remove("nav-menu-open");
    if (btn) btn.setAttribute("aria-expanded", "false");
  }

  function closeMenu() {
    var nav = panel();
    var btn = toggleBtn();
    if (!nav || !nav.classList.contains("is-open")) return;
    if (menuState(nav) === "closing") return;
    window.clearTimeout(animTimer);
    if (btn) btn.setAttribute("aria-expanded", "false");
    if (!isMobileNav()) {
      resetClosed();
      return;
    }
    restartAnimations(nav);
    nav.setAttribute("data-menu-state", "closing");
    animTimer = window.setTimeout(resetClosed, ANIM_MS);
  }

  function openMenu() {
    var nav = panel();
    var btn = toggleBtn();
    if (!nav || !isMobileNav()) return;
    var state = menuState(nav);
    if (state === "opening" || state === "open" || state === "closing") return;
    window.clearTimeout(animTimer);
    nav.classList.add("is-open");
    restartAnimations(nav);
    nav.setAttribute("data-menu-state", "opening");
    document.body.classList.add("nav-menu-open");
    document.documentElement.classList.add("nav-menu-open");
    if (btn) btn.setAttribute("aria-expanded", "true");
    ignoreOutsideUntil = Date.now() + 150;
    animTimer = window.setTimeout(function () {
      if (menuState(nav) === "opening") {
        nav.setAttribute("data-menu-state", "open");
      }
    }, ANIM_MS);
  }

  function toggleMenu() {
    var nav = panel();
    if (!nav) return;
    var state = menuState(nav);
    if (state === "open" || state === "opening") closeMenu();
    else if (state !== "closing") openMenu();
  }

  function bind() {
    var btn = toggleBtn();
    var nav = panel();
    if (!btn || !nav) return;

    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (!isMobileNav()) return;
      toggleMenu();
    });

    document.addEventListener("click", function (e) {
      if (!isMobileNav()) return;
      if (Date.now() < ignoreOutsideUntil) return;
      if (!nav.classList.contains("is-open")) return;
      if (e.target.closest(".nav-bar")) return;
      closeMenu();
    });

    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (isMobileNav()) closeMenu();
      });
    });

    window.addEventListener("resize", function () {
      if (!isMobileNav()) resetClosed();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
