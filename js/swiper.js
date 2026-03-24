//  main_swiper
var mainswiper = new Swiper(".main_swiper", {
    pagination: {
        el: "#slider .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#slider .swiper-button-next",
        prevEl: "#slider .swiper-button-prev",
    },
});

// swiper_right
var mainswiper_right = new Swiper(".swiper_right", {
      pagination: {
        el: ".swiper_right .swiper-pagination",
        dynamicBullets: true,
      },
    });

// Recommendation
var Recommendation_swiper = new Swiper(".Recommendation_Swiper", {
    slidesPerView: 6,
    spaceBetween: 25,
    pagination: {
        el: "#Recommendation .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Recommendation .swiper-button-next",
        prevEl: "#Recommendation .swiper-button-prev",
    },
    slidesPerGroup: 6
});

// Recommendation_2
var Recommendation_2_swiper = new Swiper(".Recommendation_2_Swiper", {
    slidesPerView: 6,
    spaceBetween: 25,
    pagination: {
        el: "#Recommendation_2 .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#Recommendation_2 .swiper-button-next",
        prevEl: "#Recommendation_2 .swiper-button-prev",
    },
    slidesPerGroup: 6
});

// casting_slider
var casting_slider_Swiper = new Swiper(".casting_slider_Swiper", {
    slidesPerView: 5,
    spaceBetween: 25,
    pagination: {
        el: "#casting .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: "#casting .swiper-button-next",
        prevEl: "#casting .swiper-button-prev",
    },
    slidesPerGroup: 5
});