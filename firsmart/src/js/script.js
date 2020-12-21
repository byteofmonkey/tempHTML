"use strict";

document.addEventListener("DOMContentLoaded", () => {


  const accordionItems = document.querySelectorAll(".accordion__item");

  accordionItems.forEach((item) => {
    item.addEventListener("click", function (event) {
      if (event.target.matches('.accordion__btn')) {
        console.log('asdf');
        this.classList.toggle("open");
      }
    });
  });
























}); //end DOMContentLoaded;