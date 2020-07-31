$(document).ready(function () {
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
    autoHeight: true,

    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },

    keyboard: {
      enabled: true,
    },
  });

  /*=== Mobile Menu ===*/
  var menuButton = document.querySelector(".menu-button");
  menuButton.addEventListener("click", function () {
    document
      .querySelector(".navbar-bottom")
      .classList.toggle("navbar-bottom--visible");
  });

  /*=== Modal Form ===*/
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  var modalOverlay = $(".modal__overlay");
  var modalDialog = $(".modal__dialog");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
});
