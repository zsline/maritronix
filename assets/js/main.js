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
  function onEntry(entry){
    entry.forEach(change => {
      if(change.isIntersecting) {
        change.target.classList.add('animate');
      }
    });
  }
  let options = {
    threshold: [1]
  };
  let observer = new IntersectionObserver(onEntry, options);

  for(let elem of scrollItems) {
    observer.observe(elem);
  }
  // ========== end functions ================  
  window.addEventListener('scroll', () => {
    headerFixed();
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


