/**
 * Contact — FormSubmit POST natif → contact-envoye.html?lang=…
 */
(function () {
  var LIVE_CONFIRM =
    "https://phare-numerique.github.io/contact-envoye.html";
  var form = document.getElementById("contact-form");
  var nextInput = document.getElementById("formsubmit-next");
  var replyInput = document.getElementById("formsubmit-replyto");
  var fileWarn = document.getElementById("contact-file-warning");
  var submitBtn = form && form.querySelector('[type="submit"]');

  function t(key) {
    var lang = currentLang();
    if (window.PhareI18n && window.PhareI18n.t) {
      return window.PhareI18n.t(lang, key);
    }
    return key;
  }

  function currentLang() {
    var saved = localStorage.getItem("phare_lang");
    if (saved === "fr" || saved === "en" || saved === "ru") return saved;
    var htmlLang = document.documentElement.lang;
    if (htmlLang === "fr" || htmlLang === "en" || htmlLang === "ru") return htmlLang;
    return "fr";
  }

  function confirmUrl() {
    var lang = currentLang();
    var base;
    if (window.location.protocol === "file:") {
      base = LIVE_CONFIRM;
    } else {
      var path = window.location.pathname.replace(/[^/]*$/, "");
      base = window.location.origin + path + "contact-envoye.html";
    }
    return base + "?lang=" + encodeURIComponent(lang);
  }

  function syncHiddenFields() {
    if (nextInput) nextInput.value = confirmUrl();
    var emailEl = document.getElementById("contact-email");
    if (replyInput && emailEl) {
      replyInput.value = emailEl.value.trim();
    }
  }

  function setSubmitting(on) {
    if (!submitBtn) return;
    submitBtn.disabled = on;
    submitBtn.setAttribute("aria-disabled", on ? "true" : "false");
    submitBtn.textContent = on ? t("contact.form.sending") : t("contact.submit");
  }

  if (window.location.protocol === "file:") {
    if (fileWarn) fileWarn.hidden = false;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-disabled", "true");
    }
    if (form) form.setAttribute("data-local-blocked", "true");
  }

  if (!form) return;

  syncHiddenFields();

  form.addEventListener("submit", function (ev) {
    if (form.getAttribute("data-local-blocked") === "true") {
      ev.preventDefault();
      return;
    }
    syncHiddenFields();
    setSubmitting(true);
    /* POST natif — FormSubmit redirige vers _next (contact-envoye.html) */
  });
})();
