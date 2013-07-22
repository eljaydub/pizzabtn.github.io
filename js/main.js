$(document).ready(function(){

    $('.slider__item').first().addClass('slider__item_first');
    $('.slider__item').last().addClass('slider__item_last');

    function slideChange() {

        if( ! $('.slider__item_current').hasClass('slider__item_last') ) {
            $('.slider__item_current').next().fadeIn(function(){
                $(this).addClass('slider__item_current');
            });
        }
        else {
            $('.slider__item_first').fadeIn(function(){
                $(this).addClass('slider__item_current');
            });
        }

        $('.slider__item_current').fadeOut(function(){
            $(this).removeClass('slider__item_current');
        });

    }

    var slider = setInterval(slideChange, 215000);




/*
    $('.logo').on('click', function(){
        clearInterval(slider);
    });

    $('.ribbon').on('click', function(){
        clearInterval(slider);
        slider = setInterval(slideChange, 2000)
    });
*/

});