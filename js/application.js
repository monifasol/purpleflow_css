
$(document).ready(function() {

    $(".menu-icon").click(function() {
        $(".menu").addClass("is-active");
    });

    $(".close-menu").click(function() {
        $(".menu").removeClass("is-active");
    });
    
    $(".dropdown").click(function() {
        $(this).toggleClass("is-active");
    });

});
