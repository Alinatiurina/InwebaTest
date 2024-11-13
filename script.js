document.addEventListener("DOMContentLoaded", () => {
    const accordeonItems = document.querySelectorAll(".accordeon-item");
  
    accordeonItems.forEach((item) => {
      const btn = item.querySelector(".accordeon-btn");
      const text = item.querySelector(".accordeon-text");
  
      text.style.display = "none";
      btn.textContent = "+";
  
      btn.addEventListener("click", () => {
        if (text.style.display === "none") {
          text.style.display = "block";
          btn.textContent = "-";
        } else {
          text.style.display = "none";
          btn.textContent = "+";
        }
      });
    });
  });
  const swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.slider-btn-next',
      prevEl: '.slider-btn-prev',
    },
    keyboard: true,
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      1120: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${className} custom-pagination-bullet"></span>`;
      },
    },
  });

  
  const btn = document.querySelector(".header-courses-btn");
  const coursesMenu = document.querySelector(".courses-menu-container");
  const mainDoc = document.querySelector('main');
  const menuList = document.querySelector('.courses-menu-list');

  function coursesMenuOpen() {
    coursesMenu.classList.toggle("courses-is-open") 
   }

   btn.addEventListener("click", coursesMenuOpen);

   mainDoc.addEventListener('click', (e) => {
    if (e.target !== coursesMenu) {
        coursesMenu.classList.remove("courses-is-open")
        return;
    }
})
menuList.addEventListener('click', (e) => {
    coursesMenu.classList.remove("courses-is-open")
    return;
})