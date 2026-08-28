// Slider JavaScript

/*
  This code controls
  the hero slider
  on the homepage.

  slides[0]  // Slide 1
  slides[1]  // Slide 2
  slides[2]  // Slide 3
*/

let slides = document.querySelectorAll(".hero-slide");
let nextButton = document.querySelector(".next-btn");
let prevButton = document.querySelector(".prev-btn");
let heroSlider = document.querySelector(".hero-slider");

let currentSlide = 0;

function showNextSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide = (currentSlide + 1) % slides.length;

    slides[currentSlide].classList.add("active");
}

function showPreviousSlide() {
    slides[currentSlide].classList.remove("active");

    currentSlide = currentSlide - 1;

    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add("active");
}

nextButton.addEventListener("click", showNextSlide);
prevButton.addEventListener("click", showPreviousSlide);

let slideInterval = setInterval(showNextSlide, 5000);

heroSlider.addEventListener("mouseenter", function () {
    clearInterval(slideInterval);
    slideInterval = null;
});

heroSlider.addEventListener("mouseleave", function () {
    slideInterval = setInterval(showNextSlide, 5000);
});