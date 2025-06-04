document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const isActive = item.classList.contains('active');

    document.querySelectorAll('.accordion-item').forEach(el => {
      el.classList.remove('active');
    });

    if (!isActive) {
      item.classList.add('active');
    }
  });
});

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.2)';
  } else {
    header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
  }
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('active');

  document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    nav.classList.remove('active');
    burger.classList.remove('active');
    document.body.style.overflow = '';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const swiperContainer = document.querySelector('.speakers-swiper');
  const slides = swiperContainer.querySelectorAll('.swiper-slide');

  if (slides.length > 3) {
    new Swiper('.speakers-swiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        480: {
          slidesPerView: 1,
        }
      }
    });
  } else {
    swiperContainer.classList.remove('swiper');
    const wrapper = swiperContainer.querySelector('.swiper-wrapper');
    wrapper.classList.remove('swiper-wrapper');
    slides.forEach(slide => slide.classList.remove('swiper-slide'));

    wrapper.style.display = 'flex';
    wrapper.style.flexWrap = 'wrap';
    wrapper.style.gap = '20px';
    wrapper.style.justifyContent = 'center';
  }
});

