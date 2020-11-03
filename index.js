"use strict";

const burgerMenu = document.querySelector(".page-header__burgerMenu");
const burgerLine1 = document.querySelector(".page-header__burgerLine1");
const burgerLine2 = document.querySelector(".page-header__burgerLine2");
const burgerLine3 = document.querySelector(".page-header__burgerLine3");

console.log(burgerLine1);
console.log(burgerLine2);
console.log(burgerLine3);

const clickHandler = (e) => {
  burgerLine1.classList.toggle("page-header__burgerLine1_active");
  burgerLine1.classList.toggle("page-header__burgerLine1");

  burgerLine2.classList.toggle("page-header__burgerLine2_active");
  burgerLine2.classList.toggle("page-header__burgerLine2");

  burgerLine3.classList.toggle("page-header__burgerLine3_active");
  burgerLine3.classList.toggle("page-header__burgerLine3");
};

burgerMenu.addEventListener("click", clickHandler);

const mainPage = document.querySelector(".img-wrapper");
const photo = document.querySelector(".main-page__front");
const video = document.querySelector(".main-page__back");

console.log(video);

const showVideo = () => {
  mainPage.classList.toggle("toggle");
  video.play();
};

const showPhoto = () => {
  mainPage.classList.toggle("toggle");
  video.pause();
};

photo.addEventListener("click", showVideo);
video.addEventListener("click", showPhoto);
