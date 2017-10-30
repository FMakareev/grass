$('.button').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400, // анимируем показ обложки
        function () { // далее показываем мод. окно
            $('.popup')
                .css('display', 'flex')
                .animate({opacity: 1}, 200);
            $('#close').click(function () {
                $(".popup").hide(),
                    $('#overlay').fadeOut(400);
            });

            $('.popup_button').click(function () {
                $(".popup").hide(),
                    $('#overlay').fadeOut(400);
            });
        });
});

// carousel

$(document).ready(function () {
    $("#why_we").owlCarousel()
});


$(".owl-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    margin: 0,
    slideBy: 1,
    items: 1,
    center: !0,
    autoWidth: !1,
    responsive: {0: {items: 1}, 800: {items: 1}, 1e3: {items: 1}}
});



