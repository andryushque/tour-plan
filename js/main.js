/*=== Hotel Slider ===*/
var hotelSwiper = new Swiper(".hotel-slider", {
  loop: true,
  speed: 500,

  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },

  keyboard: {
    enabled: true,
  },
});

/*=== Reviews Slider ===*/
var reviewsSwiper = new Swiper(".reviews-slider", {
  loop: true,
  speed: 500,

  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },

  keyboard: {
    enabled: true,
  },
});

/*=== Parallax ===*/
$("parallax-window").parallax({
  speed: 0.2,
  bleed: 10,
});
