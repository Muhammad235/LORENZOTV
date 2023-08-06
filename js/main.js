
"use strict";

    // -----------------counter js-----------------------
    new PureCounter();

    // -----------------Aos js-----------------------
     AOS.init();

     
    // -----------------preloader-----------------------

    $(window).on("load", function (){
        $("#preloader").fadeOut("slow")
    });


    // document.addEventListener("DOMContentLoaded", function () {
    //     // Get the preloader element
    //     var preloader = document.querySelector("#preloader");
        
    //     // Fade out the preloader
    //     preloader.style.transition = "opacity 4s";
    //     preloader.style.opacity = "0.5";

    //     // Hide the preloader after the fade-out
    //     setTimeout(function() {
    //         preloader.style.display = "none";
    //     }, 1800); 
    // });


    // -----------------Typed js-----------------------

    var typed = new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 150,
        backSpeed: 10,
        backDelay: 200,
        startDelay: 100
    });

