/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// buttons
const sliderControl = document.querySelector(".slider-control");

// slides informations
const slides = document.querySelectorAll(".slide");
const slidesLength = slides.length;

// slides array
let slidesArr = Array.from(slides);

// reverse array sorting
slidesArr = slidesArr.reverse();

// slide current
let slideCurrent = 0;

sliderControl.addEventListener("click", function (e) {
  const target = e.target.closest(".control");

  if (!target) return; // If the clicked element is not a control button, exit the function

  const isNext = target.classList.contains("next");

  if (isNext) {
    slideCurrent++;
  } else {
    slideCurrent--;
  }

  // Update classes for slides
  slidesArr.forEach((slide, index) => {
    if (index === slideCurrent) {
      slide.classList.add("text-on");
      slide.classList.remove("slide-on");
    } else {
      slide.classList.remove("text-on");
      slide.classList.add("slide-on");
    }
  });

  // Enable/disable next/prev buttons
  const prevButton = document.querySelector(".control.prev");
  const nextButton = document.querySelector(".control.next");
  
  if (slideCurrent === 0) {
    prevButton.classList.add("disabled");
  } else {
    prevButton.classList.remove("disabled");
  }
  
  if (slideCurrent === slidesLength - 1) {
    nextButton.classList.add("disabled");
  } else {
    nextButton.classList.remove("disabled");
  }
});

// balapaCop function call
balapaCop("Image Slider", "#999");






