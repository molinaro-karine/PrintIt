const slides = [
  {
    image: "./assets/images/slideshow/slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "./assets/images/slideshow/slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "./assets/images/slideshow/slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "./assets/images/slideshow/slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];
const slideContainer = document.querySelector(".banner-img");
const sliderText = document.querySelector("#banner > p");
console.log(sliderText);

let slideCounter = 0;

const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");
console.log(btnRight);

const startSlider = () => {
  sliderText.innerHTML = slides[0].tagLine;
};

btnRight.addEventListener("click", function () {
  if (slideCounter === slides.length - 1) {
    slideCounter = -1;
  }
  slideContainer.src = slides[slideCounter + 1].image;
  sliderText.innerHTML = slides[slideCounter + 1].tagLine;
  slideCounter++;
});

btnLeft.addEventListener("click", function () {
  if (slideCounter === 0) {
    slideCounter = slides.length;
  }

  slideContainer.src = slides[slideCounter - 1].image;
  sliderText.innerHTML = slides[slideCounter - 1].tagLine;
  slideCounter--;
});

startSlider();

/*function ChangeSlide(sens) {
  numero = numero + sens;
  if (numero < 0) numero = slides.length - 1;
  if (numero > slides.length - 1) numero = 0;
  document.getElementBy("banner").src = slides[numero];
}
console.log(slides);*/

/*let slidePosition = 0;

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
    dot.classList.remove("selected");
  });

  dots[slidePosition].classList.add("selected");
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
dots[slidePosition].classList.add("selected");

dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slidePosition = index;
    updatePosition();
  });
});*/
