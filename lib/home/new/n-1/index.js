var swiper = new Swiper('.ct-news .swiper-container', {
	spaceBetween: 30,
	slidesPerView: 3,
	navigation: {
		nextEl: '.ct-news .swiper-next',
		prevEl: '.ct-news .swiper-prev'
	},
	breakpoints: {
		1200: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		992: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 2,
			spaceBetween: 10
		},
		576: {
			slidesPerView: 1
		},
	}
})
