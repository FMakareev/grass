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
