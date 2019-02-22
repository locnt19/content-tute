var swiper = new Swiper('.contact .swiper-container', {
	loop: true,
	slidesPerView: 3,
	autoplay: {
		delay: 2000
	},
	breakpoints: {
		1024: {
			slidesPerView: 2,
		},
		640: {
			slidesPerView: 1,
		}
	}
});
