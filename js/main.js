const navbar = document.querySelector('#nav-bar');
const menu = document.querySelector('.nav');

navbar.onclick = () =>{
    navbar.classList.toggle('fa-times');
    menu.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('fa-times');
    menu.classList.remove('active');
}





var swiper = new Swiper(".couser-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });

  
  
  var swiper = new Swiper(".techer-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    grabCursor:true,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
  });

  function load(){
    document.querySelector('.load-container').classList.add('fade-out');
  }
  function fadeout(){
    setInterval(load , 3000);
  }
  window.onload = fadeout();