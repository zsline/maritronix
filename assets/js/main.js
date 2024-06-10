const swiper = new Swiper('.swiper-product', {
    // Optional parameters
    loop: true,
    autoplay: true,
    // If we need pagination
    pagination: {
      el: '.swiper-product-pagination',
      clickable:true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-product-button-next',
      prevEl: '.swiper-product-button-prev',
    },
  
  });