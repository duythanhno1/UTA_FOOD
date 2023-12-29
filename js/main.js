$(document).ready(function () { 
    $("#3-dishes").owlCarousel({
      loop: true,
      center: true,
      nav: true,
      autoplay:true,
      margin:300,
    });

    $('#menu-slider').owlCarousel({
        loop:true,
        autoWidth: true,
        autoplay:true,
        items:6,
        margin:60,
        center:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });

    $('#customer-slider').owlCarousel({
        loop:true,
        items:1,
        dots:false,
        nav:true,
        navText: ["<img src='./image/pre-button.png' alt='pre-button'>","<img src='./image/next-button.png' alt='next-button'>"],
        margin:100,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

    $('#food-slider').owlCarousel({
        loop:false,
        autoWidth: true,
        autoplay:false,
        dots: false,
        items:1,
        center:true,
        margin:300,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

});

const Spinning = () => {
    const boxes = document.querySelectorAll("#spin");
    const windowHeight = window.innerHeight;
  
    boxes.forEach((box) => {
      const { top, bottom } = box.getBoundingClientRect();
      if (top < windowHeight && bottom > windowHeight) {
        box.classList.add("spinning");
      } 
      else {
        box.classList.remove("spinning");
      }
    });
  };
  
  window.addEventListener("scroll", Spinning);

  const MobileNav = () => {
    const x = document.getElementById("myNavs");
    
    if (x.style.display === "block") {
      x.style.width = "0";
      setTimeout(() => {
        x.style.display = "none";
      }, 300);
    } else {
      x.style.display = "block";
      setTimeout(() => {
        x.style.width = "70vw";
      }, 0);
    }
    
    x.style.transition = "width 0.3s";
  };
  
  const toggleMobileNav = () => {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('open');
  };
  
  const mobileNavIcon = document.querySelector('.icon');
  mobileNavIcon.addEventListener('click', toggleMobileNav);
  
  const toggleIcon = () => {
    const navIcon = document.getElementById('navIcon');
    const currentSrc = navIcon.getAttribute('src');
    const newSrc = currentSrc === './image/menu-nav.png' ? './image/close-icon.png' : './image/menu-nav.png';
    navIcon.setAttribute('src', newSrc);
  };
  
  const toggleOverflow = () => {
    const body = document.querySelector('body');
    body.classList.toggle('overflow-hidden');
  };

  const togglePageBackground = () => {
    const overlay = document.querySelector('.overlay');
    const body = document.body;
  
    if (overlay) {
      body.removeChild(overlay);
      body.style.backgroundColor = '';
      body.style.overflow = '';
    } else {
      const overlay = document.createElement('div');
      overlay.classList.add('overlay');
      body.appendChild(overlay);
      body.style.backgroundColor = 'rgba(0, 0, 0, 0.55)';
      body.style.overflow = 'hidden';
    }
  };