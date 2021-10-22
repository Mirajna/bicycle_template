window.$ = window.jQuery = require('jquery');
// Mobile menu
// $(document).ready(function () {
//     $('.mobile-menu-left').on('click', function () {
//         $('.menu-left').slideToggle().css('right', '0px !important').css('left', 'auto');
//     }); 
//     $('.mobile-menu-right').on('click', function () {
//         $('.menu-right').slideToggle().css('right', '0px !important').css('left', 'auto');
//     }); 
// });
// Anchor links
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});
// Mobile menu
$(document).ready(function () {
    $('.header').on('click', '.header__mobile-menu, .navigation__close', function () {
        $('.navigation').slideToggle();
    })
});
// Hide navigation
$(window).resize(function () {
    if($(window).width() >= 768) {
        $('.navigation').attr('style', '');
    }
});
// Pinned header
$(window).scroll(function () {
    const header = $('.header');
    // const windowPosition = $(window).scrollTop();
    // const bannerHeight = $('#banner').outerHeight();

    (/*windowPosition >= bannerHeight - header.outerHeight()*/window.pageYOffset > 0) ? header.addClass('sticky') : header.removeClass('sticky');
});
    //Pagination

//import Swiper from 'swiper';

const swiperReviews = new Swiper('.reviews', {
    loop: false,
    pagination: {
        el: '.swiper-pagination',
    },
    scrollbar: {
        el: '.swiper-scrollbar',
    },
});
