window.$ = window.jQuery = require('jquery');
// Mobile menu
$(document).ready(function () {
    $('.mobile-menu').on('click', function () {
        $('.menu').slideToggle().css('right', '0px !important').css('left', 'auto');
    }); 
})
// Anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
