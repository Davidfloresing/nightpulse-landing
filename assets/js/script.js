/* ========================= */
/* HERO SLIDER */
/* ========================= */

const slides = document.querySelectorAll(".slide");

let current = 0;

function changeSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){

        current = 0;

    }

    slides[current].classList.add("active");

}

setInterval(changeSlide, 3000);


/* ========================= */
/* HERO TITLE ANIMATION */
/* ========================= */

window.addEventListener("load", () => {

    const heroTitle = document.querySelector(".hero-title");

    setTimeout(() => {

        heroTitle.classList.add("animate");

    }, 500);

});


/* ========================= */
/* SERVICES SWIPER */
/* ========================= */

let swiper;

function initSwiper(){

    if(window.innerWidth <= 991){

        swiper = new Swiper(".servicesSwiper", {

            slidesPerView: 1.05,

            spaceBetween: 16,

            centeredSlides: true,

            loop: false,

            speed: 500,

            grabCursor: true,

            touchRatio: 1.2,

            touchReleaseOnEdges: true,

            pagination: {

                el: ".swiper-pagination",

                clickable: true,

            },

        });

    }

}

/* ONLY MOBILE */

window.addEventListener("load", () => {

    if(window.innerWidth <= 991){

        initSwiper();

    }

});

/* ========================= */
/* EVENTS SWIPER */
/* ========================= */

const eventsSwiper = new Swiper(".eventsSwiper", {

    slidesPerView: "auto",

    spaceBetween: 25,

    loop: true,

    speed: 5000,

    freeMode: true,

    grabCursor: true,

    allowTouchMove: true,

    autoplay: {

        delay: 0,

        disableOnInteraction: false,

    },

    breakpoints: {

        0: {

            spaceBetween: 15,

        },

        992: {

            spaceBetween: 25,

        }

    }

});