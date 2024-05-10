"use strict";

// let navBar = document.getElementById("nav-bar");
// let menuIcon = document.getElementById("h-menu");
// let header = document.getElementById("header");
// let overlay = document.getElementById("overlay");

// menuIcon.onclick = function() {
//     navBar.classList.toggle("open-menu");
//     menuIcon.classList.toggle("open-menu");
//     header.classList.toggle("open-menu");
//     overlay.classList.toggle("open-menu");

//     if(navBar.classList.contains("open-menu")) {
//         menuIcon.src = "assets/images/icon-menu-close.svg";
//     }
//     else{
//         menuIcon.src = "assets/images/icon-menu.svg";
//     }
// }

const NAV_BAR = document.querySelector(".nav-bar");
const NAV_TOGGLE = document.querySelector(".mobile-nav-toggle");
const OVERLAY = document.querySelector(".overlay");

NAV_TOGGLE.addEventListener("click", () => {
    const VISIBILITY = NAV_BAR.getAttribute("data-visible");
    const OVERLAY_VIS = OVERLAY.getAttribute("data-visible");

    if(VISIBILITY === "false" && OVERLAY_VIS === "false"){
        NAV_BAR.setAttribute("data-visible", true);
        NAV_TOGGLE.setAttribute("aria-expanded", true);
        OVERLAY.setAttribute("data-visible", true);
    }else {
        NAV_BAR.setAttribute("data-visible", false);
        NAV_TOGGLE.setAttribute("aria-expanded", false);
        OVERLAY.setAttribute("data-visible", false);
    }
});