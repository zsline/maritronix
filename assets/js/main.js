document.addEventListener('DOMContentLoaded', () => {
  const heroCenter = window.screen.height / 2;
  const main = document.querySelector('.main');
  const header = document.querySelector('.header');
  const scrollItems = document.querySelectorAll('.scroll-item');

  // ========== functions ================
  const headerFixed = () => {
    let scrollTop = window.scrollY;
    if (scrollTop >= heroCenter) {
      header.classList.add('fixed');
      main.style.marginTop = `${header.offsetHeight}px`;
    } else {
      header.classList.remove('fixed');
      main.style.marginTop = `0px`;
    }
  }

  const scrollAnimation = () => {
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    if (scrollItems) {
      scrollItems.forEach(el => {
        let scrollOffset = el.offsetTop;

        if (windowCenter >= scrollOffset) {
          el.classList.add('animate');
        } else {
          el.classList.remove('animate');
        }
      });
    }

  }
  // ========== end functions ================  

  headerFixed();
  window.addEventListener('scroll', () => {
    headerFixed();
    scrollAnimation();
  });

  if (document.querySelector('.swiper-product')) {
    const swiper = new Swiper('.swiper-product', {
      // Optional parameters
      loop: true,
      autoplay: true,
      // If we need pagination
      pagination: {
        el: '.swiper-product-pagination',
        clickable: true,
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-product-button-next',
        prevEl: '.swiper-product-button-prev',
      },

    });
  }

});


