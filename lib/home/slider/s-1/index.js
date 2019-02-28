var swiper = new Swiper('.ct-sliders .swiper-container', {
	slidesPerView: 4,
	loop: true,
	autoplay: {
		delay: 2000
	},
	navigation: {
		nextEl: '.ct-sliders .swiper-next',
		prevEl: '.ct-sliders .swiper-prev'
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
		},
		992: {
			slidesPerView: 2,
		},
		576: {
			slidesPerView: 1
		},
	}
})
