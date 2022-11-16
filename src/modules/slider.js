import { animate } from './helpers'
import Swiper, {Pagination, Autoplay } from 'swiper';

const slider = () => {

  const tables = document.querySelectorAll('.table')

    const swiper = new Swiper('.top-slider-swiper', {
        modules: [Pagination, Autoplay],
        loop: true,
        autoplay: {
          delay: 3000,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
      });

      tables.forEach(table => {  
        table.classList.add('active')
      })


}


export default slider