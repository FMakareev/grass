/**
 * Created by ASUS on 02.11.2017.
 */

$(window).on('load',function () {
    $("#preloader").delay(500).fadeOut(250);
    var animation = new TimelineMax();
    animation
        .fromTo('.menu__img', 1.7, {y: -30, opacity: 0 }, {y:0, opacity: 1 })
        .fromTo('.list', 0.5, {delay: 500, y:-30, opacity: 0 }, {y:0, opacity: 1 }, 1)
        .fromTo('.contacts', 0.5, {delay: 500, y: -30, opacity: 0 }, {y:0, opacity: 1 })
});

// animation

new WOW().init();

// burger

$("#baar").click(function (t) {
    var $message = $("#menu_bar");
    if ($message.css('display') != 'block') {
        $message.show();

        var firstClick = true;
        $(document).bind('click.myEvent', function (t) {
            if (!firstClick && $(t.target).closest("#menu_bar").length == 0) {
                $message.hide();
                $(document).unbind('click.myEvent');
            }
            firstClick = false;
        });
    }
    t.preventDefault();
});




$('.button-application').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400, // анимируем показ обложки
        function () { // далее показываем мод. окно
            $('.popup').fadeIn (400)
                .animate({opacity: 1}, 200);
            $('img#close').click(function () {
                $(".popup").hide(),
                    $('#overlay').fadeOut(400);
            });
            $('.popup__button').click(function () {
                $(".popup").hide(),
                    $('#overlay').fadeOut(400);
            });
        });
});

$('.accordion-button').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400, // анимируем показ обложки
        function () { // далее показываем мод. окно
            $('.popup-accordion').fadeIn (400)
                .animate({opacity: 1}, 200);
            $('img#close').click(function () {
                $(".popup-accordion").hide(),
                    $('#overlay').fadeOut(400);
            });
            $('.popup__button').click(function () {
                $(".popup-accordion").hide(),
                    $('#overlay').fadeOut(400);
            });
        });
});

$('.slider__button-green').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400, // анимируем показ обложки
        function () { // далее показываем мод. окно
            $('.popup-accordion').fadeIn (400)
                .animate({opacity: 1}, 200);
            $('img#close').click(function () {
                $(".popup-accordion").hide(),
                    $('#overlay').fadeOut(400);
            });
            $('.popup__button').click(function () {
                $(".popup-accordion").hide(),
                    $('#overlay').fadeOut(400);
            });
        });
});

$('.know-how__link').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
            $('.popup-certificate').fadeIn (400)
                .animate({opacity: 1}, 200);
            $('img#close-certificate').click(function () {
                $(".popup-certificate").hide(),
                    $('#overlay').fadeOut(400);
            });
        });
});

$('.button-payment').click(function (event) {
    event.preventDefault();
    $('#overlay').fadeIn(400,
        function () {
            $('.popup-payment').fadeIn (400)
                .animate({opacity: 1}, 200);
            $('img#close-white').click(function () {
                $(".popup-payment").hide(),
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
    margin: 600,
    slideBy: 1,
    items: 1,
    center: !0,
    autoWidth: !1,
    responsive: {0: {items: 1}, 800: {items: 1}, 1e3: {items: 1}}
});

//
// $('.accordion-item').click(function(){
//     $('.accordion-button').css("display","block");
// });

// $('.accordion').find('.accordion-item').click(function () {
//     $('.accordion-item').each(function () {
//         $(this).find('.accordion-item--active').removeClass('.accordion-item--active');
//     });
// });

// var item =
// var button = '.accordion-button';
//     $('.accordion-item').click(function(){
//         $('.accordion-button').removeClass(".accordion-button");
//         $('.accordion-button').addClass(".accordion-button--active");
//
//         if($(".accordion-button").hasClass(".accordion-button--active"))
//             $(".accordion-button--active").css('display', 'block');
//         // $('.accordion-button').css('display', 'block');
//     });

// $('.button-wrap_calculate').find('.button-toggle').click(function () {
//     $('.button-wrap_calculate').each(function () {
//         $(this).find('.button-toggle_active').removeClass('button-toggle_active');
//     });
//     $(this).addClass('button-toggle_active');

//
// $('.accordion').find('.accordion-item').click(function (e) {
//         e.preventDefault();
//     $('.accordion li a').each(function () {
//         $('.accordion li a').find('.accordion-button--active').removeClass('accordion-button--active');
//
//         // if($('.accordion-item a').hasClass('accordion-button--active'))
//         //     $(".accordion-button--active:visible");
//     });
//     $('.accordion-button').addClass('accordion-button--active');
// });

$(document).ready(function(){
    $('.accordion-item').hover(function(){
        $('.accordion-button--active').removeClass("accordion-button--active");
        $(this).addClass("accordion-button--active");
    });
});

//     console.log('hello');

            // $('.accordion-button').css('display', 'block');

// product=JSON.stringify(product);
// product=JSON.parse(product);



// вызовем name из первого массива
// console.log(product.adult[1].name);



//вызовем весь массив
// console.log(product);



//вызовем все массивы
// for(var i =0;i < adult.length; i++) {
//     console.log(people[i]);
// }


//вызовем все имена из массивов
// for(var i =0;i < adult.length; i++) {
//     console.log(people[i].name);
// }



// выведем на экран имена
// <ul id="adult"></ul>
//
// var output = '';
// for(var i = 0; i < adult.length; i++) {
//     output += '<li>'+adult[i].name+'</li>';
// }
// document.getElementById('adult').innerHTML = output;


// var viewModel = {
//     radio: ko.observable("0"),
//     select: ko.observable([new size("80"), new size("90"), new size("120"), new size("140"), new size("160"), new size("180"), new size("200") ])
// };
// viewModel.calculate = ko.computed(function(){
//     var sum = this.radio() |0;
//     this.select().forEach(function(value){
//         sum += value |0;
//     });
//     return sum;
// }, viewModel)
// ko.applyBindings(viewModel);



// $(document).ready(function() { // Ждём загрузки страницы
//
//     $(".button-white").click( function () { // Событие нажатия на кнопку "Расчёт"
//
//         var action = $("select[name=size]").val(); // Получаем значение действия, которое нужно выполнить
//         var first = $("input[name=first]").val() * 1; // Переменная первого числа
//         var second = $("input[name=second]").val() * 1; // Переменная второго числа
//         var result; // Переменная результата
//         if (action == '+') { // Если действие - сложение
//             result = first + second; //  складываем
//         }
//         else if (action == '-'){ // Если действие вычитание
//             result = first - second; // вычитаем
//         }
//
//         }
//         $("input[name=result]").val(result); // записываем результат
//     });
// });


// рабочий калькулятор на value

// $(document).change('.varRadio', function () {
//     var score = 0;
// $(".selectItem:checked").each(function(){
//         score += parseInt($(this).val());
//         var summ = score += parseInt($(this).val());
//         console.log(summ);
//         $(".summ").val(summ);
//     });
// });

//отловили изменение в состояние checked
//изначальный 0
//берем чекнутые баттоны производим интерацию
//сумма равна изначалному 0 + значение от возвращенного числа функции ParseInt
//задаем переменную summ
//summ в консоль

//

// if(window.matchMedia("(max-width: 768px)").matches) {
//     console.log('hello');
// }


$('#button-calculate').click(function() {
    function choosePopup() {
        $(".choose__popup--mobile").fadeIn()
            .animate({
                'left': '0',
                opacity: 1
            }, 500);
        // console.log('hello');

        $('#close-mobile').click(function () {
            $(".choose__popup--mobile").fadeOut()
                .animate({
                    'right': '500',
                    opacity: 0
                }, 500);
        });
    }
    choosePopup();
});

// $("#button-calculate").toggle(
//
// function() {
//
//     $("#choose__popup").hide("slide", { direction: "right" }, 1000);
//
// },
//
// function() {
//
//     $("#choose__popup").show("slide", { direction: "right" }, 500);
//
// }
//
// );





$('.button-wrap_calculate').find('.button-toggle').click(function () {
    $('.button-wrap_calculate').each(function () {
        $(this).find('.button-toggle_active').removeClass('button-toggle_active');
    });
    $(this).addClass('button-toggle_active');
    var tabs_bg = $('.calculate__form-wrap');
    var i = $(this).index();
    tabs_bg.find('.form-calc_active').removeClass('form-calc_active');
    tabs_bg.find('.form-calc').eq(i).addClass('form-calc_active');

    if ($('#calc').hasClass('form-calc_active')){
        $(function ($) {
            var id_order,
                id_size,
                id_inner,
                id_type;
            var price_order ;

            $('#select__softy').on('change', function () {
                var val = $(this).val();
                id_order = parseInt(val);

                $('#select__size').val(1);
                $('#select__inner').val(1);
                $('#select__case').val(1);
                id_size = 1;
                id_inner = 1;
                id_type = 1;

                fadeIn_popup();
                getPrice();
            });
            $('#select__size').on('change', function () {
                var val = $(this).val();
                id_size = parseInt(val);

                fadeIn_popup();
                getPrice();
            });

            $('#select__case').on('change', function () {
                var val = $(this).val();
                id_type = parseInt(val);

                fadeIn_popup();
                getPrice();
            });

            $('#select__inner').on('change', function () {
                var val = $(this).val();
                id_inner = parseInt(val);

                fadeIn_popup();
                getPrice();
            });


            var getPrice = function () {
                price_order = 0;
                var price_ord,
                    price_case,
                    price_inner;
                jQuery.ajax({
                    async: false,
                    url: 'js/orders.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.type_order).each(function () {
                            if (($(this).attr('id') === id_order)) {
                                $('#name-order').html($(this).attr('full-name'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/orders-image.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_img).each(function () {
                            if (($(this).attr('id-order') === id_order) && ($(this).attr('id-case') === id_type) && ($(this).attr('id-inner') === id_inner )) {
                                $(".main-picture").attr("src", $(this).attr('image'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_size.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_size).each(function () {
                            if (($(this).attr('id_size') === id_size)) {
                                $('#popup-size').html($(this).attr('name'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_price.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_price).each(function () {
                            if (($(this).attr('id_order') === id_order) && ($(this).attr('id_size') === id_size)) {
                                price_ord = parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_case-price.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.case_price).each(function () {
                            if (($(this).attr('id_type') === id_type) && ($(this).attr('id_size') === id_size)) {
                                price_case =  parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_inner-price.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.inner_price).each(function () {
                            if (($(this).attr('id_type') === id_inner) && ($(this).attr('id_size') === id_size) && ($(this).attr('id_order') === id_order)) {
                                price_inner =  parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                $('#popup-price').html(price_case + price_ord + price_inner);

            };
            getPrice();
        });
    } else  if ($('#calc-child').hasClass('form-calc_active')){
        $(function ($) {
            var id_order,
                id_size,
                id_inner,
                id_type;
            var price_order ;

            // $('#select__softy_child').on('change', function () {
            //     var val = $(this).val();
            //     id_order = parseInt(val);
            //
            //     fadeIn_popup();
            //     getPrice();
            // });
            id_order = 1;
            $('#select__size_child').on('change', function () {
                var val = $(this).val();
                id_size = parseInt(val);

                fadeIn_popup();
                getPrice();
            });

            $('#select__case_child').on('change', function () {
                var val = $(this).val();
                id_type = parseInt(val);

                fadeIn_popup();
                getPrice();
            });

            $('#select__inner_child').on('change', function () {
                var val = $(this).val();
                id_inner = parseInt(val);

                fadeIn_popup();
                getPrice();
            });


            var getPrice = function () {
                price_order = 0;
                var price_ord,
                    price_case,
                    price_inner;
                jQuery.ajax({
                    async: false,
                    url: 'js/orders-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.type_order).each(function () {
                            if (($(this).attr('id') === id_order)) {
                                $('#name-order').html($(this).attr('name'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/orders-image-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_img).each(function () {
                            if (($(this).attr('id-order') === id_order) && ($(this).attr('id-case') === id_type) && ($(this).attr('id-inner') === id_inner )) {
                                $(".main-picture").attr("src", $(this).attr('image'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_size-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_size).each(function () {
                            if (($(this).attr('id_size') === id_size)) {
                                $('#popup-size').html($(this).attr('name'));
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_price-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.order_price).each(function () {
                            if (($(this).attr('id_order') === id_order) && ($(this).attr('id_size') === id_size)) {
                                price_ord = parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_case-price-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.case_price).each(function () {
                            if (($(this).attr('id_type') === id_type) && ($(this).attr('id_size') === id_size)) {
                                price_case =  parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                jQuery.ajax({
                    async: false,
                    url: 'js/order_inner-price-child.json',
                    dataType: 'json',
                    success: function(result)
                    {
                        $(result.inner_price).each(function () {
                            if (($(this).attr('id_type') === id_inner) && ($(this).attr('id_size') === id_size) && ($(this).attr('id_order') === id_order)) {
                                price_inner =  parseInt($(this).attr('price') );
                            }
                        });
                    }
                });
                $('#popup-price').html(price_case + price_ord + price_inner);
            };
        });
    }
});

$('.button-wrap_price').find('.button-toggle').click(function () {
    $('.button-wrap_price').each(function () {
        $(this).find('.button-toggle_active').removeClass('button-toggle_active');
    });
    $(this).addClass('button-toggle_active');
    var tabs_bg = $('.choose__blocks');
    var i = $(this).index();
    tabs_bg.find('.choose__block-wrap_active').removeClass('choose__block-wrap_active');
    tabs_bg.find('.choose__block-wrap').eq(i).addClass('choose__block-wrap_active');
});

$(function ($) {
    var id_order,
        id_size,
        id_inner,
        id_type;
    var price_order ;

    $('#select__softy').on('change', function () {
        var val = $(this).val();
        id_order = parseInt(val);

        $('#select__size').val(1);
        $('#select__inner').val(1);
        $('#select__case').val(1);
        id_size = 1;
        id_inner = 1;
        id_type = 1;

        fadeIn_popup();
        getPrice();
    });
    $('#select__size').on('change', function () {
        var val = $(this).val();
        id_size = parseInt(val);

        fadeIn_popup();
        getPrice();
    });

    $('#select__case').on('change', function () {
        var val = $(this).val();
        id_type = parseInt(val);

        fadeIn_popup();
        getPrice();
    });

    $('#select__inner').on('change', function () {
        var val = $(this).val();
        id_inner = parseInt(val);

        fadeIn_popup();
        getPrice();
    });


    var getPrice = function () {
        price_order = 0;
        var price_ord,
            price_case,
            price_inner;
        jQuery.ajax({
            async: false,
            url: 'js/orders.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.type_order).each(function () {
                    if (($(this).attr('id') === id_order)) {
                        $('#name-order').html($(this).attr('full-name'));
                    }
                });
            }
        });
        jQuery.ajax({
            async: false,
            url: 'js/orders-image.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.order_img).each(function () {
                    if (($(this).attr('id-order') === id_order) && ($(this).attr('id-case') === id_type) && ($(this).attr('id-inner') === id_inner )) {
                        $(".main-picture").attr("src", $(this).attr('image'));
                    }
                });
            }
        });
        jQuery.ajax({
            async: false,
            url: 'js/order_size.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.order_size).each(function () {
                    if (($(this).attr('id_size') === id_size)) {
                        $('#popup-size').html($(this).attr('name'));
                    }
                });
            }
        });
        jQuery.ajax({
            async: false,
            url: 'js/order_price.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.order_price).each(function () {
                    if (($(this).attr('id_order') === id_order) && ($(this).attr('id_size') === id_size)) {
                        price_ord = parseInt($(this).attr('price') );
                    }
                });
            }
        });
        jQuery.ajax({
            async: false,
            url: 'js/order_case-price.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.case_price).each(function () {
                    if (($(this).attr('id_type') === id_type) && ($(this).attr('id_size') === id_size)) {
                        price_case =  parseInt($(this).attr('price') );
                    }
                });
            }
        });
        jQuery.ajax({
            async: false,
            url: 'js/order_inner-price.json',
            dataType: 'json',
            success: function(result)
            {
                $(result.inner_price).each(function () {
                    if (($(this).attr('id_type') === id_inner) && ($(this).attr('id_size') === id_size) && ($(this).attr('id_order') === id_order)) {
                        price_inner =  parseInt($(this).attr('price') );
                    }
                });
            }
        });
        $('#popup-price').html(price_case + price_ord + price_inner);

    };
    getPrice();
});

var fadeIn_popup = function () {
    $(".choose__popup").fadeIn();
}


$(document).ready(function () {
    $.getJSON('js/orders.json', function (result) {
        var orders = $('#select__softy');
        $(result.type_order).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id');
            orders.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_size.json', function (result) {
        var orders_size = $('#select__size');
        $(result.order_size).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_size');
            orders_size.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_case-type.json', function (result) {
        var orders_case = $('#select__case');
        $(result.order_type).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_type');
            orders_case.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_inner-type.json', function (result) {
        var orders_inner = $('#select__inner');
        $(result.inner_type).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_inner');
            orders_inner.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    // child
    $.getJSON('js/orders-child.json', function (result) {
        var orders = $('#select__softy_child');
        $(result.type_order).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id');
            orders.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_size-child.json', function (result) {
        var orders_size = $('#select__size_child');
        $(result.order_size).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_size');
            orders_size.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_case-type-child.json', function (result) {
        var orders_case = $('#select__case_child');
        $(result.order_type).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_type');
            orders_case.append('<option value="' + id + '">' + name + '</option>');
        });
    });

    $.getJSON('js/order_inner-type-child.json', function (result) {
        var orders_inner = $('#select__inner_child');
        $(result.inner_type).each(function () {
            var name = $(this).attr('name');
            var id = $(this).attr('id_inner');
            orders_inner.append('<option value="' + id + '">' + name + '</option>');
        });
    });
});

$('#close').click(function () {
    $(".choose__popup").fadeOut();
});











