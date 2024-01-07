
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