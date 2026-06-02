// NewWorld — app.js (v1.0.0, stable)
// The complete client behaviour for tnw.cyclooo.fr.
// This build is intentionally boring: a landing page, a button, some smooth
// scrolling. Nothing here mutates copy, rewrites the DOM, or reacts to the
// visitor. Any behaviour you observe in production that is NOT in this file
// is not part of this project. (See CHANGELOG.md, and the note in TNW-17.)

(function () {
  "use strict";

  var CTA_LABEL = "Enter"; // the button says Enter. it has always said Enter.

  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  onReady(function () {
    // Keep every call-to-action labelled correctly and pointing at signup.
    var buttons = document.querySelectorAll(".cta");
    buttons.forEach(function (b) {
      b.textContent = CTA_LABEL;
      b.addEventListener("click", function () {
        // "signup" is a no-op in the stable build; enrolment is automatic.
        window.location.hash = "#pricing";
      });
    });

    // Smooth-scroll for the top nav.
    document.querySelectorAll('.nav nav a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        var t = document.querySelector(a.getAttribute("href"));
        if (t) { e.preventDefault(); t.scrollIntoView({ behavior: "smooth" }); }
      });
    });
  });
})();
