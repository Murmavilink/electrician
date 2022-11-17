import { animate } from './helpers'
import Swiper, {Navigation, Pagination, Autoplay } from 'swiper';

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


	///////////////////////////////////////////////////////////////////////////


	const swiperCarusel = new Swiper('.services-elements', {
		modules: [Navigation, Pagination, Autoplay],
		loop: true,
		// slidesPerView: 3,
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".arrow-right",
			prevEl: ".arrow-left",
		  },
		  breakpoints: {
			1024: {
			  slidesPerView: 3,
			  spaceBetween: 20,
			},
			768: {
			  slidesPerView: 2,
			},
			425: {
			  slidesPerView: 1,
			},
		},

	});


}


export default slider