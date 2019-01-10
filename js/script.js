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