/*=== Swiper Slider ===*/
var mySwiper = new Swiper(".swiper-container", {
  loop: true,
  speed: 500,

  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev",
  },

  keyboard: {
    enabled: true,
  },
});
