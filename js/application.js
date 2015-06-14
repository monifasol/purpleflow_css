
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

function is_on_screen(el){
	var bottom_of_object = $(el).offset().top + $(el).outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if( bottom_of_window > bottom_of_object ){
        return true;
    } else {
    	return false;
    }
}

