"use strict";
const carouselSlide = document.querySelector ('.carousel_slide');
// console.log(carouselSlide);
const carouselImages = document.querySelectorAll ('.carousel_slide img');
const total_length = carouselImages.length
// Buttons
const prevBtn = document.querySelector ('.slider_btn .la');
const nextBtn = document.querySelector ('.slider_btn .ra');
// console.log(nextBtn);

// Counter
let counter = 0; 
const size = carouselImages[0].clientWidth;

// carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
carouselSlide.style.transform = 'translateX(' + ( counter * 100 /total_length) + '%)';
// console.log("carouselSlide.style.transform");

// Buttons Listeners
nextBtn.addEventListener('click',function(){
    if(counter >= carouselImages.length -1) {
        counter = 0
    }else{
        counter++;
    }
    carouselSlide.style.transition = "transform .5s ease-in-out";
    // console.log(counter);
    carouselSlide.style.transform = 'translateX(-' + ( counter * 100 /total_length) + '%)';
})


prevBtn.addEventListener('click',function(){
    if(counter <= 0){
        counter = carouselImages.length -1
    }else{
        counter --
    }
    carouselSlide.style.transition = "transform 1s ease-in-out";
    // console.log(counter);
    carouselSlide.style.transform = 'translateX(-' + ( counter * 100 /total_length) + '%)';
})

// carouselSlide.addEventListener('transitionend',function(){
//     if(carouselImages[counter].id === 'lastClone'){
//         carouselSlide.style.transition = "none";
//         // console.log(none);
//         counter = carouselImages.length - 2;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if(carouselImages[counter].id === 'firstClone'){
//         carouselSlide.style.transition = "none";
//         // console.log(none);
//         counter = carouselImages.length - counter;
//         carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
//     }
// })