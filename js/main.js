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
  var menuButton = $(".menu-button");
  menuButton.on("click", function () {
    $(".navbar-bottom").toggleClass("navbar-bottom--visible");
  });

  /*=== Modal Form ===*/
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  $(document).keydown(function (e) {
    if (e.key == "Escape") {
      closeModal(event);
    }
  });

  function openModal() {
    var targetModal = $(this).attr("data-href");
    $(targetModal).find(".modal__overlay").addClass("modal__overlay--visible");
    $(targetModal).find(".modal__dialog").addClass("modal__dialog--visible");
    $("body").addClass("modal-open");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    $("body").removeClass("modal-open");
  }

  /*=== Validation ===*/
  $(".form").each(function () {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlength: "Please enter at least 2 characters.",
        },
        email: {
          required: "Please specify your email",
          email: "Email address format: name@domain.com",
        },
        phone: {
          required: "Please specify your phone number",
          phone: "Phone number format: +7-(999)-999-99-99",
          minlength: "Please enter at least 11 characters.",
        },
      },
    });
  });

  /*=== Phone Number Mask ===*/
  $(".phone_with_ddd").mask("+7(000) 000-00-0000");
});
