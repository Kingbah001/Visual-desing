

var hamburgerdiv = document.querySelector(".hamburger");
var mobileLinks = document.querySelector(".mobile-link-holder")
var mybackdrop = document.querySelector(".backdrop")

function dosomething (){
    hamburgerdiv.classList.toggle("showburger")
    mobileLinks.classList.toggle("show-mobile-link-holder")
    mybackdrop.classList.toggle("show-backdrop")
}