"use strict"
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


  // ==============  Hidden Company Input 


  const inputProperty = document.querySelectorAll('[name="billing-property"]');
  const inputShippingProperty = document.querySelectorAll('[name="shipping-property"]');
  const companyArt = document.querySelectorAll('.company-atr');
  const companyShippingArt = document.querySelectorAll('.shipping-company-atr');
  inputProperty.forEach(el => {
    el.addEventListener('click', () => {
      if (el.value == 'individual-costomer') {
        companyArt.forEach(el => {
          el.classList.add('hidden');
          el.children[1].classList.remove('_req');
          console.dir(el);
        })
      } else {
        companyArt.forEach(el => {
          el.classList.remove('hidden');
          el.children[1].classList.add('_req');
        })
      }
    });
  });
  inputShippingProperty.forEach(el => {
    el.addEventListener('click', () => {
      if (el.value == 'individual-costomer') {
        companyShippingArt.forEach(el => {
          el.classList.add('hidden');
          el.children[1].classList.remove('_req');
        })
      } else {
        companyShippingArt.forEach(el => {
          el.classList.remove('hidden');
          el.children[1].classList.add('_req');
        })
      }
    });
  });

// ===================  Billing VS Shipping

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



  // ================== FORM VALIDATE ===========

  const form = document.querySelector('form');
  form.addEventListener('submit', formSend);

  async function formSend(e) {
    e.preventDefault();
    let error = formValidate(form);
    let formData = new FormData(form);



    if(error === 0){
      document.querySelector('.main').classList.add('_sending');
      let response = await fetch('sendmail.php', {
        method: 'POST',
        body: formData
      });
      if(response.ok){
        let result = await response.json();
        alert(result.message);
        form.reset();

      } else {
        alert('Error');
      }
      console.log(formData);
    } else {
      console.log(error);
    }
  }

  function formValidate(form){
    let error = 0;
    
    let formReq = document.querySelectorAll('._req');
    for (let i = 0; i < formReq.length; i++) {
      const input = formReq[i];
      formRemoveError(input);

      if(input.value == ''){
        billing.classList.remove('hidden');
        buttonBilling.classList.add('hidden');
        formAddError(input);
        error++;
        
      }
    }
    return error;

  }
  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');

  }
  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }
});


