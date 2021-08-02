const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
// const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".block");
const navItem = document.querySelectorAll(".nav-item");
let showMenu = false;
menuBtn.addEventListener("click", toggleMenu);
navItem.forEach((item) => item.addEventListener("click", toggleMenu));
function toggleMenu() {
    if (!showMenu) {
        // menuBtn.classList.add("show");
        menu.classList.add("show");
        // menuNav.classList.add("show");
        navItems.forEach((item) =>
        item.classList.add("show"));
        navItem.forEach((item) =>
        item.classList.add("show"));
        navItem.forEach((item) =>
        item.classList.remove("close"));
        showMenu = true;
        navItems.forEach((item) =>
        item.classList.remove("close"));
        showMenu = true;
    } else {
        // menuBtn.classList.add("close");
        menu.classList.remove("show");
        // menuNav.classList.remove("show");
        navItems.forEach((item) =>
        item.classList.add("close"));
        showMenu = false;
        navItem.forEach((item) =>
        item.classList.add("close"));
        showMenu = false;
    }
};

var btn = $('.btn');

btn.on('click', function() {
  $(this).toggleClass('open');
  $(this).toggleClass('not-open');
  $('.logo').toggleClass('lc');
  $('.logo').toggleClass('lc1');
}); 

var menua = $('.menu-nav a');

menua.on('click', function() {
    $('.btn').toggleClass('open');
  $('.btn').toggleClass('not-open');
    $('.logo').toggleClass('lc');
    $('.logo').toggleClass('lc1');
}); 

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 2300) {
        $('.btn').addClass('color');
    } else {
        $('.btn').removeClass('color');
    }
    if ($(window).scrollTop() > 3050){
        $('.btn').removeClass('color');
    }
});

$(document).on('scroll', function(){
    if ( $(window).scrollTop() > 2300) {
        $('.logo').addClass('lc1');
    } else {
        $('.logo').removeClass('lc1');
    }
    if ($(window).scrollTop() > 3050){
        $('.logo').removeClass('lc1');
    }
});

const next = document.querySelector(".left");
const prev = document.querySelector(".right");

var owl = $('.owl-carousel');
owl.owlCarousel({
    items: 1,
    loop:true,
    margin:10,
    autoplay:true,
    nav: true,
    navText:[
      next,prev
    ],
    autoplayTimeout:5000,
    autoplayHoverPause:true
});