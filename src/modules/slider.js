import Swiper, { Navigation, Pagination } from 'swiper';

const slider = () => {

    const swiper = new Swiper('.top-slider-swiper', {
        modules: [Navigation, Pagination],
        loop: true,
        // speed: 2000,
        // autoplay: {
        //   enabled: true,
        //   delay: 1,
        // },
        // spaceBetween: 30,
        // centeredSlides: true,
        // loop: true,
        autoplay: {
          delay: 3000,
        //   disableOnInteraction: false,
        },
        // slidesPerView: 1,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
      });
}


export default slider