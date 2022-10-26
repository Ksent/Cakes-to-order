'use strict';

let slidersForMobile = document.querySelectorAll('.carousel__inner');
let sliders = document.querySelectorAll('.carousel-desktop');
let sliderLists = document.querySelectorAll('.carousel-list');
let sliderInputs = document.querySelectorAll('.carousel__input');

function moveSlideByInput(slider) {
  let sliderList = slider.querySelector('.carousel-list');
  let items = slider.querySelectorAll('.carousel-item');
  let width = 0;
  let position = 0;

  slider.addEventListener('change', function(evt) {
    let target = evt.target;

    width = -100 / items.length;
    position = width * target.value;
    sliderList.style.transform = 'translateX(' + position + '%)';

  });

}

function moveSlideByButtons(slider) {
  let prevButton = slider.querySelector('.prev-btn');
  let nextButton = slider.querySelector('.next-btn');
  let sliderList = slider.querySelector('.carousel-list');
  let items = slider.querySelectorAll('.carousel-item');
  let counter = slider.querySelector('[data-number]');
  let count = Number(counter.dataset.number);
  let width = 0;
  let position = 0;
  
  prevButton.addEventListener('click', function() {
    width = 100 / items.length;
    position += width * count;
    position = Math.min(position, 0);
    sliderList.style.transform = 'translateX(' + position + '%)';
  });
  
  nextButton.addEventListener('click', function() {
    width = 100 / items.length;
    position -= width * count;  
    position = Math.max(position, -width * (items.length - count));
    sliderList.style.transform = 'translateX(' + position + '%)'; 
  });
  
}

function startingCounter(slider) {
  let items = slider.querySelectorAll('.carousel-item');
  let counter = slider.querySelector('[data-number]');
  let count = counter.dataset.number;
  
  counter.textContent = (count + '/' + items.length);  
}

function changeCounter(slider) {
  let prevButton = slider.querySelector('.prev-btn');
  let nextButton = slider.querySelector('.next-btn');
  let items = slider.querySelectorAll('.carousel-item');
  let counter = slider.querySelector('[data-number]');
  let count = Number(counter.dataset.number);
  let number = count;

  prevButton.addEventListener('click', function() {      
    number -= count;
    number = Math.max(number, count);
    counter.textContent = (number + '/' + items.length);  
  });

  nextButton.addEventListener('click', function() { 
    number += count;
    number = Math.min(number, items.length);
    counter.textContent = (number + '/' + items.length);  
  });
  
}

if (mobileWidth.matches) {
  slidersForMobile.forEach(moveSlideByInput);   
} else if (tabletWidth.matches) {
  sliders.forEach(startingCounter);
  sliders.forEach(moveSlideByButtons);
  sliders.forEach(changeCounter);     
}

mobileWidth.addEventListener('change', function(evt) {

  if (evt.matches) {
    slidersForMobile.forEach(moveSlideByInput); 

    for (let sliderList of sliderLists) {
      sliderList.style.transform = 'translateX(0)';
    }
  
    for (let sliderInput of sliderInputs) {   
      
      if (sliderInput.value == 0) {
        sliderInput.checked = true; 
      } else {
        sliderInput.checked = false; 
      }
  
    }

  }

});

tabletWidth.addEventListener('change', function(evt) {

  if (evt.matches) {
    sliders.forEach(startingCounter);
    sliders.forEach(moveSlideByButtons);
    sliders.forEach(changeCounter);   

    for (let sliderList of sliderLists) {
      sliderList.style.transform = 'translateX(0)';
    }

  }

});



