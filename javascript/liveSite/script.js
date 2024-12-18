const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

slider.appendChild(firstClone); 
slider.prepend(lastClone);     

let currentIndex = 0; 
const totalSlides = slides.length + 2; 
const slideWidth = slides[0].clientWidth; 

slider.style.transform = `translateX(-${slideWidth}px)`; 

function updateSliderPosition() {
  slider.style.transition = 'transform 0.5s ease-in-out'; 
  slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
}

function handleTransitionEnd() {
  if (currentIndex === -1) {
    slider.style.transition = 'none';
    currentIndex = slides.length - 1;
    slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
  } else if (currentIndex === slides.length) {
    slider.style.transition = 'none';
    currentIndex = 0;
    slider.style.transform = `translateX(-${(currentIndex + 1) * slideWidth}px)`;
  }
}

prevButton.addEventListener('click', () => {
  currentIndex--;
  updateSliderPosition();
});

nextButton.addEventListener('click', () => {
  currentIndex++;
  updateSliderPosition();
});

slider.addEventListener('transitionend', handleTransitionEnd);

window.addEventListener('resize', () => {
  const newSlideWidth = slides[0].clientWidth;
  slider.style.transition = 'none'; 
  slider.style.transform = `translateX(-${(currentIndex + 1) * newSlideWidth}px)`;
});


