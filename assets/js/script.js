"use strict";

const NAV_BAR = document.querySelector(".nav-bar");
const NAV_TOGGLE = document.querySelector(".mobile-nav-toggle");
const OVERLAY = document.querySelector(".overlay");

NAV_TOGGLE.addEventListener("click", () => {
    const VISIBILITY = NAV_BAR.getAttribute("data-visible");

    if(VISIBILITY === "false"){
        NAV_BAR.setAttribute("data-visible", true);
        NAV_TOGGLE.setAttribute("aria-expanded", true);
        OVERLAY.style.transform = "translateX(0%)";
    }else {
        NAV_BAR.setAttribute("data-visible", false);
        NAV_TOGGLE.setAttribute("aria-expanded", false);
        OVERLAY.style.transform = "translateX(100%)";
    }
});