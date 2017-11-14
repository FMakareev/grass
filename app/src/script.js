/**
 * Created by ASUS on 02.11.2017.
 */
// animation
var animation = new TimelineMax();
animation
    .fromTo('.menu__img', 2, {y: -80, opacity: 0 }, {y:0, opacity: 1 })
    .fromTo('.list', 0.6, {y:-30, opacity: 0 }, {y:0, opacity: 1 }, 1)
    .fromTo('.contacts', 1, {y: -100, opacity: 0 }, {y:0, opacity: 1 })

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
    margin: 600,
    slideBy: 1,
    items: 1,
    center: !0,
    autoWidth: !1,
    responsive: {0: {items: 1}, 800: {items: 1}, 1e3: {items: 1}}
});


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
    $('#button-calculate').click(function() {
        function choosePopup() {
        $(".choose__popup")
            .css('display', 'block')
            .animate({
                opacity: 1,
                // width: "linear",
                // marginLeft: "3in",
                left:+10
            }, 2000);
        }
    choosePopup();
});



$('#close').click(function () {
    $(".choose__popup").hide()
});




$(function() {
    var selectSize,                       //размеры
        selectPrice,                       //цена
        selectInner,                   //наполнение
        selectCase = 0,               //чехол фиксированная зависит от размера (endpaper)
        sum = 0;

        matresSize = {
            "80":{12200: "Матрас с эффектом памяти",  11200: ["Эластичный", "Ортопедический"] },
            "90":{13480: "Матрас с эффектом памяти",  12480: ["Эластичный", "Ортопедический"]},
            "120":{16500: "Матрас с эффектом памяти",  15500: ["Эластичный", "Ортопедический"]},
        },

        matresCase = {
            "80": {343: "Обычный", 430: "Велюр"},
            "90": {374: "Обычный", 560: "Велюр"},
            "120": {468: "Обычный", 950: "Велюр"},
    },
        matresInner = {
               "memory": {
                    "80": {3320: "springs", 3500: "nonsprings"},
                    "90": {3490: "springs", 3880: "nonsprings"},
                    "120": {5180: "springs", 6370: "nonsprings"},
                },
                "elastic": {
                    "80": {2320: "springs", 2500: "nonsprings"},
                    "90": {2490: "springs", 2880: "nonsprings"},
                    "120": {4418: "springs", 5370: "nonsprings"},
                },
                "orthopedic": {
                    "80": {2320: "springs", 2500: "nonsprings"},
                    "90": {2490: "springs", 2880: "nonsprings"},
                    "120": {4418: "springs", 5370: "nonsprings"},
                }
        };

    // console.log(matresInner.memory);

        function insertMatresSize() {
            var html = '',
                size,
                price;
        for(size in matresSize) {                                    //интерация пройдет по размерам(80, 90, 120..
            for(price in matresSize[size]) {
                html += '<option data-size="'+ size +'" data-price="'+ price +'">'+ size +' '+ matresSize[size][price] + ' ' + price +'</option>';     //запишем данные размера и цены в html
            }
        }

            $('#select__size').append(html);                       //выведем данные

    }

    function changeSize() {
    sum = selectCase = 0;                                         //обнулим сумму чтобы при перезагрузке норм отображ
    selectSize = $('#calc option').filter(':selected').data('size');
    selectPrice = $('#calc option').filter(':selected').data('price');

    insertCase();
    // recalc();

    }


    function insertCase() {
    var html = '<option selected>Выберите чехол</option>',
        price;

    for(price in matresCase[selectSize])
        html += '<option data-price="' + price + '">'+ matresCase[selectSize][price] +' '+ price +'</option>';
        $('#select__case').append(html);
    }

    function changeCase() {
        selectCase = $('#select__case option').filter(':selected').data('price');
        console.log(selectCase);
        recalc();
    }

    function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
    }


    function recalc() {
    selectPrice = isNumeric(selectPrice) ? selectPrice:0;
    selectCase = isNumeric(selectCase) ? selectCase:0;
    sum = selectPrice+selectCase;
    // changeFinal()
    }

    // changeFinal() {
    //
    // }

    // function recalc() {
    //
    // }


     insertMatresSize();



    $('#select__size').change(function() {
        changeSize();
    });

    $('#select__case').change(function() {
        changeCase();
    });

});

