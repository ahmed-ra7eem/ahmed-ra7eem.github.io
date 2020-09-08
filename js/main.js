/*global $*/
$(function () {
    "use strict";

    // Nice Scroll
    if (screen.width > 991) {
        $(".bio, .about, .projects, .contact").niceScroll({
            position: 'relative',
            zindex: '99999',
            cursorcolor:'#2098D1'
        });
    }

    // MixItUp
    mixitup('.portfolio');

    // hire me button
    $('.bio .hire-me').on('click', function () {
        $(this).parentsUntil('.bio').parent().fadeOut(200);
        $('.contact').delay(200).fadeIn();
        $('.navigation li:last-child').addClass('active');
    });

    // Add Active Class For Ul
    $('ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // fadein & out Sections
    $('.navigation li').on('click', function () {
        $('body').find(' > div').not($(this).data('class')).fadeOut(200);
        $($(this).data('class')).delay(200).fadeIn();
    });

    // make style to form label
    $('form .form-control').on('focusout', function () {
        if ($(this).val() !== '') {
            $(this).parent().addClass('label-data');
        } else {
            $(this).parent().removeClass('label-data');
        }
    });

});


// loading page
$(window).on('load', function () {
    "use strict";
    $('.loading').fadeOut(500);
});

/*$(this).addClass('active').siblings().removeClass('active'); */