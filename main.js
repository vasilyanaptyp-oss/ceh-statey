// Цех статей — минимальная интерактивность
(function () {
  "use strict";

  var body = document.body;
  body.classList.add("js-ready");

  // Тень хедера после скролла
  var header = document.querySelector(".header");
  function onScroll() {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
})();
