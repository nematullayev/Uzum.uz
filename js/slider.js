// todo slider
const swiper = new Swiper(".slider__all", {
  loop: true,
  // effect: "cards",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
  // slidesPerView: 1,
  // spaceBetween: 10,
  // breakpoints: {
  //   "@0.75": {
  //     slidesPerView: 2,
  //     spaceBetween: 20,
  //   },
  //   "@1.00": {
  //     slidesPerView: 3,
  //     spaceBetween: 40,
  //   },
  //   "@1.50": {
  //     slidesPerView: 4,
  //     spaceBetween: 50,
  //   },
  // },
});
// const swiper2 = new Swiper(".header__bottom-list", {
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: ".swiper-pagination",
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
