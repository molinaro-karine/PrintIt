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

let slideCounter = 0;

const btnLeft = document.querySelector(".arrow_left");
const btnRight = document.querySelector(".arrow_right");

/* The code is adding an event listener to the `btnRight` element, which represents the right arrow
button in a slideshow. When the button is clicked, the function is executed. */
btnRight.addEventListener("click", function () {
  if (slideCounter === slides.length - 1) {
    slideCounter = -1;
  }
  slideContainer.src = slides[slideCounter + 1].image;
  sliderText.innerHTML = slides[slideCounter + 1].tagLine;
  slideCounter++;
  updatePosition();
});

/* The code is adding an event listener to the `btnLeft` element, which represents the left arrow
button in a slideshow. When the button is clicked, the function is executed. */
btnLeft.addEventListener("click", function () {
  if (slideCounter === 0) {
    slideCounter = slides.length;
  }

  slideContainer.src = slides[slideCounter - 1].image;
  sliderText.innerHTML = slides[slideCounter - 1].tagLine;
  slideCounter--;
  updatePosition();
});

/**
 * The function updates the position of dots by adding and removing a "selected" class.
 */
function updatePosition() {
  dots.forEach((dot) => {
    dot.classList.remove("selected");
  });

  dots[slideCounter].classList.add("selected");
}

/* This code is creating and adding dots to the dotContainer element. */
const dotContainer = document.querySelector(".dots");
slides.forEach((_slide) => {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");
dots[slideCounter].classList.add("selected");

/* The code is adding an event listener to each dot element in the dots array. When a dot is clicked,
the function is executed. Inside the function, the slideCounter variable is updated with the index
of the clicked dot.*/
dots.forEach((dot, index) => {
  dot.addEventListener("click", function () {
    slideCounter = index;
  });
});
