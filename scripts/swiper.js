const partnersSwiper = new Swiper('.partners-swiper', {
  loop: false,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-partners-next',
    prevEl: '.swiper-partners-prev',
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    768: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
  },
});

const swiper = new Swiper('.speakers-swiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },
});

