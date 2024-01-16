"use strict";

let navBar = document.getElementById("nav-bar");
let menuIcon = document.getElementById("menu");

menuIcon.onclick = function() {
    navBar.classList.toggle("open-menu");

    if(navBar.classList.contains("open-menu")) {
        menuIcon.src = "../image/icon-menu-close.svg";
    }
    else{
        menuIcon.src = "../images/icon-menu.svg";
    }
}