
// youtube channel
let swiper_one = new Swiper(".youtubeSwiper", {
    navigation: {
      nextEl: ".channel_next",
      prevEl: ".channel_prev",
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
    },
});
// youtube channel

// artist slider
let swiper_two = new Swiper(".artistSwiper", {
    navigation: {
      nextEl: ".artist_next",
      prevEl: ".artist_prev",
    },
    breakpoints: {
        300: {
            slidesPerView: 1,
            spaceBetween: 18,
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 18,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 18,
        },
        993: {
            slidesPerView: 6,
            spaceBetween: 18,
        },
    },
});
// artist slider