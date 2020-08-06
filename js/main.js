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

  /*=== Google Map ===*/
  $(".map").click(initMap);
  function initMap(event) {
    var map = $(".map-google");
    map.append(
      '<iframe class= "map-google" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.2640198454924!2d12.418718315609166!3d47.42629497917319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4776529616349b93%3A0xf9cf0bb05dcf89d0!2sGrand%20Tirolia%20Hotel%20Kitzbuhel%2C%20Curio%20Collection%20by%20Hilton!5e0!3m2!1sru!2sru!4v1596634817027!5m2!1sru!2sru" style = "border: 0;" allowfullscreen = "" aria-hidden="false" tabindex = "0"></iframe >'
    );
  }

  /*=== Animation On Scroll ===*/
  AOS.init();
});
