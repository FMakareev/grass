/**
 * Created by ASUS on 02.11.2017.
 */


// burger



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

$(document).change('.varRadio', function () {
    var score = 0;
$(".selectItem:checked").each(function(){
        score += parseInt($(this).val());
        var summ = score += parseInt($(this).val());
        console.log(summ);
        $(".summ").val(summ);
    });
});

//отловили изменение в состояние checked
//изначальный 0
//берем чекнутые баттоны производим интерацию
//сумма равна изначалному 0 + значение от возвращенного числа функции ParseInt
//задаем переменную summ
//summ в консоль

$('#button-calculate').click(function() {
    $(".choose__popup")
        .css('display', 'block')
        .animate({opacity: 1}, 200);
    // $("#close").click(function () {
    //     $(".choose__popup").hide();
});


$('#close').click(function () {
    $(".choose__popup").hide();
});