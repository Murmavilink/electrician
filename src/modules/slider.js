import Swiper, {Navigation, Pagination, Autoplay } from 'swiper';

const slider = () => {

	const tables = document.querySelectorAll('.table')
		
	tables.forEach(table => {
		table.classList.add('active');
	});

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
			540: {
			  slidesPerView: 2,
			},
			360: {
			  slidesPerView: 1,
			},
		},

	});


}


export default slider