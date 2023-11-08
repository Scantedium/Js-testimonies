const swiper = new Swiper('.swiper', {
    // Optional parameters
    autoplay:{
        delay:3000,
    },
    loop: true,
  
    // If we need pagination
    pagination: {
        clickable: true,
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });