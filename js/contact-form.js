/**
 * Contact — FormSubmit (URL absolue) + avertissement file://
 */
(function () {
  var LIVE_CONFIRM =
    "https://frucharthadrien-code.github.io/contact-envoye.html";
  var form = document.getElementById("contact-form");
  var nextInput = document.getElementById("formsubmit-next");
  var replyInput = document.getElementById("formsubmit-replyto");
  var fileWarn = document.getElementById("contact-file-warning");
  var submitBtn = form && form.querySelector('[type="submit"]');

  function confirmUrl() {
    if (window.location.protocol === "file:") {
      return LIVE_CONFIRM;
    }
    var path = window.location.pathname.replace(/[^/]*$/, "");
    return window.location.origin + path + "contact-envoye.html";
  }

  if (nextInput) {
    nextInput.value = confirmUrl();
  }

  if (window.location.protocol === "file:") {
    if (fileWarn) fileWarn.hidden = false;
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.setAttribute("aria-disabled", "true");
    }
    if (form) form.setAttribute("data-local-blocked", "true");
  }

  if (form) {
    form.addEventListener("submit", function () {
      if (nextInput) nextInput.value = confirmUrl();
      var emailEl = document.getElementById("contact-email");
      if (replyInput && emailEl) {
        replyInput.value = emailEl.value.trim();
      }
    });
  }
})();
