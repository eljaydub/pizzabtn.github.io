$(document).ready(function(){

    var slider1;
    var slider2;
    var slideshowInterval;

    function slideshow() {
        $('.slideshow :first-child').fadeOut()
            .next('.slideshow__item').fadeIn()
            .end().appendTo('.slideshow');
    }

    $(function(){
        slideshowInterval = setInterval(slideshow,2000);
    });

    $(function(){
        setInterval(function(){
            $('.slider__item_video').fadeIn();
            $('.slider__item_iphone').fadeOut();
            clearInterval(slideshow);
            /*start video here*/
        },6000);
    });

});