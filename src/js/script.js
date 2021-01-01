"use strict";

document.addEventListener("DOMContentLoaded", () => {



    var interleaveOffset = 0.5;

    var introOptions = {
        loop: true,
        speed: 800,
        grabCursor: true,
        watchSlidesProgress: true,
        keyboardControl: true,
        touchAngle: 45,
        touchRatio: 1,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,

        },

        // renderBullet: function(index, className) {
        //     return '<span class="' + className + '">' + (index + 1) + '</span>';
        // }


        // on: {
        //     progress: function() {
        //         var swiper = this;
        //         for (var i = 0; i < swiper.slides.length; i++) {
        //             var slideProgress = swiper.slides[i].progress;
        //             var innerOffset = swiper.width * interleaveOffset;
        //             var innerTranslate = slideProgress * innerOffset;
        //             swiper.slides[i].querySelector(".slide-inner").style.transform =
        //                 "translate3d(" + innerTranslate + "px, 0, 0)";
        //         }
        //     },
        //     touchStart: function() {
        //         var swiper = this;
        //         for (var i = 0; i < swiper.slides.length; i++) {
        //             swiper.slides[i].style.transition = "";
        //         }
        //     },
        //     setTransition: function(speed) {
        //         var swiper = this;
        //         for (var i = 0; i < swiper.slides.length; i++) {
        //             swiper.slides[i].style.transition = speed + "ms";
        //             swiper.slides[i].querySelector(".slide-inner").style.transition =
        //                 speed + "ms";
        //         }
        //     }
        // }
    };

    var swiper = new Swiper(".swiper-container", introOptions);








    // slideToClickedSlide: true













































    // const options = {
    //     // init: false,
    //     loop: true,
    //     speed: 900,
    //     slidesPerView: 2, // or 'auto'
    //     spaceBetween: 150,
    //     centeredSlides: true,
    //     effect: 'coverflow', // 'cube', 'fade', 'coverflow',

    //     coverflowEffect: {
    //         rotate: 1, // Slide rotate in degrees
    //         stretch: -60, // Stretch space between slides (in px)
    //         depth: 150, // Depth offset in px (slides translate in Z axis)
    //         modifier: 30, // Effect multipler
    //         slideShadows: false, // Enables slides shadows
    //     },
    //     grabCursor: true,
    //     // parallax: true,
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     //     clickable: true,
    //     // },
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //     // breakpoints: {
    //     //     1023: {
    //     //         slidesPerView: 1,
    //     //         spaceBetween: 0
    //     //     }
    //     // },
    //     // // Events
    //     // on: {
    //     //     imagesReady: function() {
    //     //         this.el.classList.remove('loading');
    //     //     }
    //     // }
    // };


    // var mySwiper = new Swiper(".swiper-container", options);

    // mySwiper.init();














    // const options1 = {
    //     loop: true,
    //     speed: 900,
    //     slidesPerView: 1, // or 'auto'
    //     effect: 'coverflow', // 'cube', 'fade', 'coverflow',
    //     grabCursor: true,
    //     // pagination: {
    //     //     el: '.swiper-pagination',
    //     //     clickable: true,
    //     // },
    //     navigation: {
    //         nextEl: '.swiper-button-next1',
    //         prevEl: '.swiper-button-prev1',
    //     },
    //     // breakpoints: {
    //     //     1023: {
    //     //         slidesPerView: 1,
    //     //         spaceBetween: 0
    //     //     }
    //     // },
    //     // // Events
    //     // on: {
    //     //     imagesReady: function() {
    //     //         this.el.classList.remove('loading');
    //     //     }
    //     // }
    // };


    // var mySwiper1 = new Swiper(".swiper-container-footer", options1);

    // mySwiper1.init();


























    document.querySelectorAll(".card__slider").forEach(item => {
        item.addEventListener("click", (e) => {
            if (e.target.matches("div.more")) {
                item.style = "transform: translateX(-100%)";
            }
            if (e.target.matches("div.back")) {
                item.style = "";
            }
        });
    });
















    // VanillaTilt.init(document.querySelectorAll(".card"), {
    //     max: 2,
    //     speed: 1000,
    //     glare: true,
    //     "max-glare": 0.1,
    //     // reverse: true, // reverse the tilt direction
    //     // startX: 10, // the starting tilt on the X axis, in degrees.
    //     scale: 1.05, // 2 = 200%, 1.5 = 150%, etc..



    //     transition: true, // Set a transition on enter/exit.
    //     speed: 1500, // Speed of the enter/exit transition

    //     // axis: X, // What axis should be disabled. Can be X or Y.


    //     // max: 15, // max tilt rotation (degrees)
    //     // startY: 0, // the starting tilt on the Y axis, in degrees.
    //     // reset: true // If the tilt effect has to be reset on exit.
    //     // easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
    //     // glare: false // if it should have a "glare" effect
    //     // "max-glare": 1, // the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    //     // "glare-prerender": false, // false = VanillaTilt creates the glare elements for you, otherwise
    //     // // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    //     // "mouse-event-element": null // css-selector or link to HTML-element what will be listen mouse events
    //     // // you need to add .js-tilt-glare>.js-tilt-glare-inner by yourself
    //     // gyroscope: true // Boolean to enable/disable device orientation detection,
    //     // gyroscopeMinAngleX: -45 // This is the bottom limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the left border of the element;
    //     // gyroscopeMaxAngleX: 45 // This is the top limit of the device angle on X axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the right border of the element;
    //     // gyroscopeMinAngleY: -45 // This is the bottom limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the top border of the element;
    //     // gyroscopeMaxAngleY: 45 // This is the top limit of the device angle on Y axis, meaning that a device rotated at this angle would tilt the element as if the mouse was on the bottom border of the element;
    // });

}); //end DOMContentLoaded;