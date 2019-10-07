$(document).ready(function(){

//$('.navigation li').localScroll();

$('.navigation').mobileMenu({
	defaultText: 'Navigation',
	className: 'select-menu',
	subMenuDash: '&ndash;'
});
/*
$('#main-slider').flexslider({
    animation: "fade",
    slideshowSpeed: 3500,
    controlNav: false,
	directionNav: false
});

$('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails",
    directionNav: true
});

$("#owl-example").owlCarousel();
*/
//$('.navigation').onePageNav();

$(window).scroll( function() {
    var value = $(this).scrollTop();
    if ( value > 350 )
        $(".header").css("padding", "0px 0px 3px");
    else
        $(".header").css("padding", "15px 0px 15px");
});

 $(".backtotop").click(function(){

    $('html,body').animate({scrollTop:0},700);
    return false;

  });
 
$("a[class^='prettyPhoto']").prettyPhoto({theme:'pp_default'});


}); 
