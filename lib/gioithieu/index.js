var swiper = new Swiper('.choose .swiper-container', {
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
var swiper = new Swiper('.team .swiper-container', {
	navigation: {
		nextEl: '.mdi-chevron-right',
		prevEl: '.mdi-chevron-left',
	},
	loop: true,
	slidesPerView: 4,
	autoplay: {
		delay: 2500
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
var swiper = new Swiper('.feedback .swiper-container', {
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 3000
	},
});
