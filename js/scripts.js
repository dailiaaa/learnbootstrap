$(document).ready(function() {
    $('#mycarousel').carousel({interval: 2000});
    var carouselSpan = $('#carouselButton').children('span');
    $('#carouselButton').click(function() {
        if (carouselSpan.hasClass('fa-pause')) {
            carouselSpan.removeClass('fa-pause');
            carouselSpan.addClass('fa-play');
            $('#mycarousel').carousel('pause');
        } else {
            carouselSpan.removeClass('fa-play');
            carouselSpan.addClass('fa-pause');
            $('#mycarousel').carousel('cycle');
        }
    });
});