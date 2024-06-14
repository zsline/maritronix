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
  function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
        change.target.classList.add('animate');
      }
    });
  }
  let options = {
    threshold: [1]
  };
  let observer = new IntersectionObserver(onEntry, options);

  for (let elem of scrollItems) {
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

  const inputProperty = document.querySelectorAll('[name="billing-property"]');
  const inputShippingProperty = document.querySelectorAll('[name="shipping-property"]');
  const companyArt = document.querySelectorAll('.company-atr');
  const companyShippingArt = document.querySelectorAll('.shipping-company-atr');
  inputProperty.forEach(el => {
    el.addEventListener('click', () => {
      if (el.value == 'individual-costomer') {
        companyArt.forEach(el => {
          el.classList.add('hidden');
        })
      } else {
        companyArt.forEach(el => {
          el.classList.remove('hidden');
        })
      }
    });
  });
  inputShippingProperty.forEach(el => {
    el.addEventListener('click', () => {
      if (el.value == 'individual-costomer') {
        companyShippingArt.forEach(el => {
          el.classList.add('hidden');
        })
      } else {
        companyShippingArt.forEach(el => {
          el.classList.remove('hidden');
        })
      }
    });
  });


  const buttonShipping = document.querySelector('.button-shipping');
  const buttonBilling = document.querySelector('.button-billing');
  const billing = document.querySelector('.billing-form');
  const shipping = document.querySelector('.shipping-form');
  buttonShipping.addEventListener('click', () => {
    billing.classList.toggle('hidden');
    shipping.classList.toggle('hidden');
    buttonShipping.classList.toggle('hidden');
    buttonBilling.classList.toggle('hidden');
  });
  buttonBilling.addEventListener('click', () => {
    billing.classList.toggle('hidden');
    shipping.classList.toggle('hidden');
    buttonShipping.classList.toggle('hidden');
    buttonBilling.classList.toggle('hidden');
  });

});


