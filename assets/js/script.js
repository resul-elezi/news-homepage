"use strict";

let navBar = document.getElementById("nav-bar");
let menuIcon = document.getElementById("menu");
let body = document.getElementById("body");

menuIcon.onclick = function() {
    navBar.classList.toggle("open-menu");
    menuIcon.classList.toggle("open-menu");
    body.classList.toggle("open-menu");

    if(navBar.classList.contains("open-menu")) {
        menuIcon.src = "assets/images/icon-menu-close.svg";
    }
    else{
        menuIcon.src = "assets/images/icon-menu.svg";
    }
}