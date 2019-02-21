function ctBanner() {
    let ctBanner  = new Swiper('.ct-banner .swiper-container', {
        autoplay: {
            delay: 5000
        },
        speed: 1000,
        loop: true,
        lazy: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 45,
            slideShadows: false,
        },
        // allowTouchMove: true,
        // navigation: {
        //     nextEl: '.ct-banner .swiper-next',
        //     prevEl: '.ct-banner .swiper-prev',
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true
		},
    })
}
$(document).ready(function() {
    ctBanner()
})
