"use strict";
// floating-hero-images
let heroGraphicDiv = document.querySelector(".hero-graphic");



// pointing man
const pointingPerson = new Image(450);
pointingPerson.src = "hero/img/pointingPerson33.png";
pointingPerson.classList.add("pointing-man-animation");

// floating woman
const floatingWoman = new Image(525);
floatingWoman.src = "hero/img/MetaverseGirl(1).png";
floatingWoman.classList.add("floating-woman-animation");

// leaning man
const leaningMan = new Image(450);
leaningMan.src = "hero/img/3d-Metaverse-man(2).png";
leaningMan.classList.add("leaning-man-animation");

// diving woman
const divingWoman = new Image(505);
divingWoman.src = "hero/img/Metaverse Girl (4).png";
divingWoman.classList.add("diving-woman-animation");

// array of image objects
let floatingHeroImages = [pointingPerson, floatingWoman, leaningMan, divingWoman];

// random image generator (from floatingHeroImages array)
let setFloatingHeroImage = () => {
    // let randRandNum = Math.floor(Math.random() * 999);
    heroGraphicDiv.appendChild(floatingHeroImages[Math.floor(Math.random() * 4)])
};

// function call
setFloatingHeroImage();
