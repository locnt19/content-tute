var swiper = new Swiper('.ct-sliders .swiper-container', {
	slidesPerView: 4,
	navigation: {
		nextEl: '.ct-news .swiper-next',
		prevEl: '.ct-news .swiper-prev'
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
