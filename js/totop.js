$(function() {
    $(window).scroll(function() {
        if ($(window).scrollTop() > 400)
            $('.go-top').show();
        else
            $('.go-top').hide();
    });
    /*$('.go-top').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    });*/
});
