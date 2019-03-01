var swiper = new Swiper('.home-clients .swiper-container', {
    slidesPerView: 4,
    loop: true,
    autoplay: {
        delay: 2000
    },
    navigation: {
        nextEl: '.home-clients .swiper-next',
        prevEl: '.home-clients .swiper-prev'
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