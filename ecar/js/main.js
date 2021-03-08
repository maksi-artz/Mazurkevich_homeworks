'use strict';

// еще разбираюсь!!!
const selected = document.querySelectorAll(".selected");
const optionsContainer = document.querySelector(".options__container");

const optionsList = document.querySelectorAll(".option");

//  selected.forEachaddEventListener("click", () => {
//  console.log('1');
// optionsContainer.classList.toggle("active");
// });

selected.forEach(o => {
  o.addEventListener("click", () => {
    o.parentElement.querySelector(".options__container").classList.toggle("active");
  });
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});






// Header!!!
window.addEventListener('scroll', function () {
  var header = document.getElementById("nav");

  if (window.pageYOffset > 250) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});






