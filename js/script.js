/* =============
    Preloader
================ */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
})

/* ==========================
    Drawings - Isotope
============================= */
$(window).on('load', function () {
    // Initialize Isotope
    $("#isotope-container").isotope({});
    // filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        // get filter value
        var filterValue = $(this).attr('data-filter');
        // filter drawings
        $("#isotope-container").isotope({
            filter: filterValue
        });
        // active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});

/* ==========================
    Drawings - MagnificPopup
============================= */
$(function () {
    $("#drawings-wrapper").magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

// Navigation
// Show & Hide white navigation
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {
        // show/hide nav on window's scroll
        showHideNav();
    })

    function showHideNav() {
        if ($(window).scrollTop() > 50) {
            // Show white nav
            $('nav').addClass('white-nav-top')

            //show logo name initials
            $('a.name-logo').text('JM').addClass('initials')

            // show back to top btn
            $('#back-to-top').fadeIn()
        } else {
            // Hide white nav
            $('nav').removeClass('white-nav-top')

            //show logo name
            $('a.name-logo').text('JuJu de Morais').removeClass('initials')

            // hide back to top btn
            $('#back-to-top').fadeOut()
        }
    }
});

// Smooth Scrolling
$(function () {
    $('a.smooth-scroll').click(function (e) {
        e.preventDefault();
        // get section id like #about, #service, #work, #team, etc.
        let section_id = $(this).attr('href')
        $('html, body').animate({
            scrollTop: $(section_id).offset().top - 64
        }, 1250, "easeInOutExpo")
    })
})

// Mobile Menu
$(function () {

    // Show mobile nav
    $("#mobile-nav-open-btn").click(function () {
        $("#mobile-nav").css("height", "100%");
    });

    // Hide mobile nav
    $("#mobile-nav-close-btn, #mobile-nav a").click(function () {
        $("#mobile-nav").css("height", "0%");
    });

});

// Animation Wow
// animate on scroll 
$(function () {
    new WOW().init();
})

// home animation on page load
$(window).on('load', function () {
    $('a.name-logo').addClass('animated bounceInDown')
    $('#home-heading-1').addClass('animated fadeInRightBig')
    $('#home-heading-2 span').addClass('animated fadeInLeftBig')
    $('#home-text').addClass('animated jackInTheBox')
    $('#home-btn').addClass('animated zoomIn')
    $('#arrow-down i').addClass('animated fadeInDown infinite')
})