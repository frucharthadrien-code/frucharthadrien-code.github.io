/**
 * Contact — FormSubmit AJAX → confirmation Phare (sans page anglaise FormSubmit)
 */
(function () {
  var LIVE_CONFIRM =
    "https://frucharthadrien-code.github.io/contact-envoye.html";
  var AJAX_URL = "https://formsubmit.co/ajax/frucharthadrien@gmail.com";
  var form = document.getElementById("contact-form");
  var replyInput = document.getElementById("formsubmit-replyto");
  var fileWarn = document.getElementById("contact-file-warning");
  var formError = document.getElementById("contact-form-error");
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

  function showError() {
    if (!formError) return;
    formError.hidden = false;
    formError.textContent = t("contact.form.error");
  }

  function hideError() {
    if (formError) formError.hidden = true;
  }

  function resetSubmitBtn() {
    if (!submitBtn) return;
    submitBtn.disabled = false;
    submitBtn.removeAttribute("aria-disabled");
    submitBtn.textContent = t("contact.submit");
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

  form.addEventListener("submit", function (ev) {
    if (form.getAttribute("data-local-blocked") === "true") {
      ev.preventDefault();
      return;
    }

    ev.preventDefault();
    hideError();

    var emailEl = document.getElementById("contact-email");
    if (replyInput && emailEl) {
      replyInput.value = emailEl.value.trim();
    }

    setSubmitting(true);

    fetch(AJAX_URL, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    })
      .then(function (res) {
        return res.json().then(function (data) {
          return { ok: res.ok, data: data };
        });
      })
      .then(function (result) {
        var ok =
          result.data &&
          (result.data.success === "true" || result.data.success === true);
        if (ok) {
          window.location.href = confirmUrl();
          return;
        }
        throw new Error(
          (result.data && result.data.message) || "FormSubmit error"
        );
      })
      .catch(function () {
        showError();
        resetSubmitBtn();
      });
  });
})();
