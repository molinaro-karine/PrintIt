const slider = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

let slidePosition = 0;

const sliders = document.querySelectorAll(".banner-img");
const totalSlider = sliders.length;
const btnPrev = document.querySelector(".arrow_left");
const btnNext = document.querySelector(".arrow_right");

btnPrev.addEventListener("click", function () {
  console.log(btnPrev);
  PrevSlide();
});
btnNext.addEventListener("click", function () {
  NextSlide();
});

function updatePosition() {
  sliders.forEach((slide) => {
    slide.classList.remove("active");
    slide.classList.add("hidden");
  });
  sliders[slidePosition].classList.add("active");

  dots.forEach((dot) => {
    dot.classList.remove("dot-active");
  });

  dots[slidePosition].classList.add("dot-active");
}

function PrevSlide() {
  if (slidePosition == 0) {
    slidePosition = totalSlider - 1;
  } else {
    slidePosition--;
  }
  updatePosition();
}
function NextSlide() {
  if (slidePosition == totalSlider - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }
  updatePosition();
}

const dotContainer = document.querySelector(".dots");
sliders.forEach((_slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[slidePosition].classList.add("dot.selected");

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slidePosition = index;
    updatePosition();
  });
});
