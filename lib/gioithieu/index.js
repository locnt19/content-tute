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
});
