// sub_event_tabcontent
const section = document.querySelector('#sub_event');
const btns = document.querySelectorAll('#sub_event_tabcontent button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.textContent == '더보기') {
            section.style.height = '720px';
            btn.textContent = '접기'
        } else {
            section.style.height = '500px';
            btn.textContent = '더보기'
        }
    });
});

// sub_bookcard
var sub_bookcard = new Swiper(".sub_bookcard_Swiper", {
    navigation: {
        nextEl: "#sub_bookcard .swiper-button-next",
        prevEl: "#sub_bookcard .swiper-button-prev",
    },

    slidesPerView: 2,
    spaceBetween: 7,
    loop: true
});

// sub_AI
var sub_AI_book = new Swiper(".sub_AI_Swiper", {
    slidesPerView: 5.8,
    spaceBetween: 15,
    pagination: {
        el: "#sub_AI .swiper-pagination",
        type: "progressbar",
    },

    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
});

// sub_img_tabcontent
const section2 = document.querySelector('#sub_img');
const btns2 = document.querySelectorAll('#sub_img_tabcontent button');

btns2.forEach(btn2 => {
    btn2.addEventListener('click', () => {
        if (btn2.textContent == '더보기') {
            section2.style.height = '4670px';
            btn2.textContent = '접기'
        } else {
            section2.style.height = '1300px';
            btn2.textContent = '더보기'
        }
    });
});

// sub_author
const section3 = document.querySelector('#sub_author_information_right_tabcontent p');
const btns3 = document.querySelectorAll('#sub_author_information_right_tabcontent button');

btns3.forEach(btn3 => {
    btn3.addEventListener('click', () => {
        if (btn3.textContent == '더보기') {
            section3.style.height = '190px';
            btn3.textContent = '접기'
        } else {
            section3.style.height = '60px';
            btn3.textContent = '더보기'
        }
    });
});

var sub_author_book = new Swiper(".sub_author_Swiper", {
    slidesPerView: 5.8,
    spaceBetween: 10,
    pagination: {
        el: "#sub_author .swiper-pagination",
        type: "progressbar",
    },

    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
});

// sub_translator
var sub_translator_book = new Swiper(".sub_translator_Swiper", {
    slidesPerView: 5.8,
    spaceBetween: 10,
    pagination: {
        el: "#sub_translator .swiper-pagination",
        type: "progressbar",
    },

    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
});

// sub_book_contents
const section4 = document.querySelector('#sub_book_contents_tabcontent p');
const btns4 = document.querySelectorAll('#sub_book_contents_tabcontent button');

btns4.forEach(btn4 => {
    btn4.addEventListener('click', () => {
        if (btn4.textContent == '더보기') {
            section4.style.height = '830px';
            btn4.textContent = '접기'
        } else {
            section4.style.height = '120px';
            btn4.textContent = '더보기'
        }
    });
});

// sub_book_review
const section5 = document.querySelector('#sub_book_review_tabcontent p');
const btns5 = document.querySelectorAll('#sub_book_review_tabcontent button');

btns5.forEach(btn5 => {
    btn5.addEventListener('click', () => {
        if (btn5.textContent == '더보기') {
            section5.style.height = '740px';
            btn5.textContent = '접기'
        } else {
            section5.style.height = '120px';
            btn5.textContent = '더보기'
        }
    });
});

// sud_notice
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('#sub_notice .accordion-header');
    const item = header.parentElement;

    header.addEventListener('click', () => {
        item.classList.toggle('active');
    });
});

// sub_discovery
var sub_AI_book = new Swiper(".sub_discovery_Swiper", {
    slidesPerView: 1.2,
    spaceBetween: 5,
    pagination: {
        el: "#sub_discovery .swiper-pagination",
        type: "progressbar",
    },

    slidesOffsetBefore: 10,
    slidesOffsetAfter: 10
});