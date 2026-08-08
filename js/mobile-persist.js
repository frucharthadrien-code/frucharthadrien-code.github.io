/**
 * Mode mobile persistant — mobile.html + pages suivantes
 * index.html reste toujours en version bureau
 */
(function () {
  var KEY = "phare_mobile";

  function pageName() {
    var path = location.pathname || "";
    var parts = path.split("/");
    var last = (parts[parts.length - 1] || "").toLowerCase();
    if (!last || last.indexOf(".html") === -1) return "index.html";
    return last;
  }

  var name = pageName();
  var isMobilePage = name === "mobile.html";
  var isIndexPage = name === "index.html";

  if (isMobilePage) {
    try { localStorage.setItem(KEY, "1"); } catch (e) { /* ignore */ }
    document.documentElement.classList.add("force-mobile");
  } else if (isIndexPage) {
    try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
    document.documentElement.classList.remove("force-mobile");
  } else {
    try {
      if (localStorage.getItem(KEY) === "1") {
        document.documentElement.classList.add("force-mobile");
      }
    } catch (e) { /* ignore */ }
  }

  function bind() {
    document.querySelectorAll("[data-set-mobile]").forEach(function (el) {
      el.addEventListener("click", function () {
        try { localStorage.setItem(KEY, "1"); } catch (e) { /* ignore */ }
      });
    });

    document.querySelectorAll("[data-clear-mobile]").forEach(function (el) {
      el.addEventListener("click", function () {
        try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
        document.documentElement.classList.remove("force-mobile");
      });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bind);
  } else {
    bind();
  }
})();
