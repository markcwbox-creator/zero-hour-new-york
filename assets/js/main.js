/* Zero Hour: New York — site interactions
   1) mobile nav toggle  2) scroll-reveal animations  3) header year */
(function () {
  "use strict";

  // ---- mobile nav toggle ----
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    // close menu after tapping a link (mobile)
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") links.classList.remove("open");
    });
  }

  // ---- scroll reveal ----
  var reveal = document.querySelectorAll(".reveal");
  function revealAll() {
    reveal.forEach(function (el) { el.classList.add("in"); });
  }
  var reduceMotion = window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reduceMotion || !("IntersectionObserver" in window) || !reveal.length) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    reveal.forEach(function (el) { io.observe(el); });
    // failsafe: never leave content stuck invisible if IO doesn't fire
    window.addEventListener("load", function () { setTimeout(revealAll, 1200); });
  }

  // ---- auto year in footer ----
  var y = document.querySelector("[data-year]");
  if (y) y.textContent = new Date().getFullYear();

  // ---- demo newsletter form (front-end only) ----
  var form = document.querySelector(".newsletter form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var note = form.parentElement.querySelector(".form-note");
      if (note) {
        note.textContent = "Thanks — you're on the list. (Demo only: no email was stored.)";
        note.style.color = "var(--amber)";
      }
      form.reset();
    });
  }
})();
