//  main_swiper
const autoplayBtn = document.getElementById("autoplayBtn");

var mainswiper = new Swiper(".main_swiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },

    pagination: {
        el: "#slider .swiper-pagination",
        type: "fraction",
    }
});

let isPaused = false;

autoplayBtn.addEventListener("click", () => {
    if (isPaused) {
        mainswiper.autoplay.start();
        autoplayBtn.textContent = "⏸️"; // 다시 재생 모양
        isPaused = false;
    } else {
        mainswiper.autoplay.stop();
        autoplayBtn.textContent = "▶️"; // 일시정지 후 재생 아이콘
        isPaused = true;
    }
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
    
    navigation: {
        nextEl: "#casting .swiper-button-next",
        prevEl: "#casting .swiper-button-prev",
    },
    slidesPerGroup: 5
});

// today_pick_slider today_pick_slider_left
var tpsl_swiper = new Swiper(".today_pick_slider_left_Swiper", {
    slidesPerView: 1,
    spaceBetween: 30,

    navigation: {
        nextEl: "#today_pick_slider .swiper-button-next",
        prevEl: "#today_pick_slider .swiper-button-prev",
    },
});

// today_pick_slider today_pick_slider_right
var tpsr_swiper = new Swiper(".today_pick_slider_right_Swiper", {
    initialSlide: 1,
    slidesPerView: 3,
    spaceBetween: 30,

    navigation: {
        nextEl: "#today_pick_slider .swiper-button-next",
        prevEl: "#today_pick_slider .swiper-button-prev",
    },
    slidesPerGroup: 1
});