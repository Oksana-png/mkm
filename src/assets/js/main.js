document.addEventListener("DOMContentLoaded", () => {
  // табы в продукции
  const btnsTabs = document.querySelectorAll(".products__head-btn");
  const bodyTabs = document.querySelectorAll(".products__body-item");
  btnsTabs.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      const btn = e.target;

      btnsTabs.forEach((btn2, index) => {
        if (i == index) {
          btn2.classList.add("active");
          bodyTabs[index].classList.add("active");
        } else {
          btn2.classList.remove("active");
          bodyTabs[index].classList.remove("active");
        }
      });
    });
  });

  // inputMask
  let phones = document.querySelectorAll("input[type=tel]");
  let im = new Inputmask("+7 (999) 999 99-99");
  im.mask(phones);

  // fancybox
  Fancybox.bind("[data-fancybox]", {
    // Your custom options
  });

  // открытие формы
  const btnsOpenModal = document.querySelectorAll(".btn-open-modal");
  const modal = document.querySelector(".modal__form");
  btnsOpenModal.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      modal.classList.add("active");
      modal.querySelector(".body").classList.add("active");
    });
  });

  window.addEventListener("click", (e) => {
    const target = e.target;
    if (
      (target.closest(".modal__form") &&
        !target.closest(".modal__form .body")) ||
      (target.closest(".modal__form") && target.closest(".modal-close"))
    ) {
      closeModal("modal__form");
    }
  });

  function closeModal(selector) {
    document.querySelector(`.${selector}`).classList.remove("active");
    document.querySelector(`.${selector} .body`).classList.remove("active");
  }

  // Слайдер портфолио главная
  var swiper = new Swiper(".s-portfolio-slider-thambs", {
    loop: true,
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
      // when window width is >= 320px
      300: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 4,
      },
      // when window width is >= 640px
    },
  });
  var swiper2 = new Swiper(".s-portfolio-slider", {
    loop: true,
    navigation: {
      nextEl: ".s-portfolio-slider__btn.next",
      prevEl: ".s-portfolio-slider__btn.prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
