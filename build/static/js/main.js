$(document).ready(function () {
    // BEGIN HOME GALLERY TABS
    $('.gallery-tabs__link').click( function(e) {
        e.preventDefault();

        // Begin tab changing
        $('.gallery-tabs__link').each( function() {
            $(this).parent().removeClass('active');
        });

        $(this).parent().addClass('active');
        // End tab changing

        // Begin tab content changing
        var clickedTabName =  $(this).data('tab');

        $('.tabs-content__item').each( function() {
            $(this).slideUp();
        });

        $('#' + clickedTabName).slideDown();
        // End tab content changing
    });
    // END HOME GALLERY TABS
});