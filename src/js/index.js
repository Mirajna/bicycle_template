window.$ = window.jQuery = require('jquery');
// Mobile menu
$(document).ready(function () {
    $('.mobile-menu-left').on('click', function () {
        $('.menu-left').slideToggle().css('right', '0px !important').css('left', 'auto');
    }); 
    $('.mobile-menu-right').on('click', function () {
        $('.menu-right').slideToggle().css('right', '0px !important').css('left', 'auto');
    }); 
})
// Anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
