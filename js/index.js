'use strict';

const carousel = document.querySelector('#home img');

const images = [
  'https://via.placeholder.com/1200x400/333?text=IMG+1',
  'https://via.placeholder.com/1200x400/333?text=IMG+2',
  'https://via.placeholder.com/1200x400/333?text=IMG+3',
];

let currentImage = 0;

function changeImage() {
  currentImage++;
  if (currentImage >= images.length) {
    currentImage = 0;
  }
  carousel.src = images[currentImage];
}

setInterval(changeImage, 2000);
