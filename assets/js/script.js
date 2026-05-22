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