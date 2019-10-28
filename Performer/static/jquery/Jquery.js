$(document).ready(function(){

//    Анімація для навбару
    $('#navbar').hover(function () {
        $('.navbar-toggle-arrow:first').animate({ 'top': '-7' }, 70);
        $('.navbar-toggle-arrow:last').animate({ 'top': '7' }, 70);
    }, function () {
        $('.navbar-toggle-arrow:first').animate({ 'top': '-5' }, 70);
        $('.navbar-toggle-arrow:last').animate({ 'top': '5' }, 70);
    });

//    Поява меню
    $('#navbar').click(function(){
        $('body').css('overflow', 'hidden')
        $('.menu').css('display', 'block')
        $('.menu').animate({'width': '100%', 'height': '100%', 'left': '0', 'top': '0'}, 300)

        $('.menu h1, h2').animate({'font-size': '30px'}, 300)
    })

//    Закрити меню
    $('#closer').click(function(){
        $('body').css('overflow', 'auto')
        $('.menu').css('display', 'none')
        $('.menu').animate({'width': '30%', 'height': '30%', 'left': '30%', 'top': '20%'}, 300)
        $('.menu h1, h2').animate({'font-size': '10px'}, 300)
    })

//    Анімований блок з ім'ям персони
    $('#animate-block').animate({'top': '44%', 'opacity': '1'}, 800)

    function repeat_info(){
        $('#animate-block .col:first').delay(4000).animate({'opacity': '0'}, 'slow')
        $('#animate-block .col:last').delay(4500).animate({'opacity': '1'}, 'slow')

        $('#animate-block .col:last').delay(4000).animate({'opacity': '0'}, 'slow')
        $('#animate-block .col:first').delay(4500).animate({'opacity': '1'}, 'slow')
    }

//    Повторення анімації
    setInterval(repeat_info)



//    Поява локу з послугами
    $('.services-content .window-titles, .services-content .col-sm-4').animate({'top': '0px', 'opacity': '1'}, 'slow')



//    Поява блоку з портфоліо
    $('.portfolio-content .window-titles, .portfolio-content .row:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

    if ( $(window).width() > 767 ){
        $('.resume-content h1:first').animate({'top': '0px', 'opacity': '0.5'}, 'slow')
    }



//  Анімації для сторінки "контакти"
    $('.contacts-content').animate({'top': '150px', 'opacity': '1'}, 'slow')

    $('.successful').animate({'top': '-40px', 'opacity': '1'}, 'slow')

    setInterval( function () {
        $('.successful').css({'top': '0px', 'opacity': '0'}, 'slow')
    }, 5000)

    if ( $(window).width() > 767 ) {
        //    Відрахунок від нуля до числа в блоці
        $(window).scroll(startCounter);

        function startCounter() {
            if ($(window).scrollTop() > 3600) {

                $(window).off('scroll', startCounter);

                $('.number1').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

                $('.number2').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 5500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

                $('.number3').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 7000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

            }
        }
    } else {
        $(window).scroll(startCounter);

        function startCounter() {
            if ($(window).scrollTop() > 5000) {

                $(window).off('scroll', startCounter);

                $('.number1').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

                $('.number2').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 5500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

                $('.number3').each(function () {
                    var $this = $(this);
                    jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                        duration: 7000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });

            }
        }
    }



//    Дія при наведенні на іконку телеграму
    $('.telegram').hover(function(){
        $('.telegram-info').animate({'opacity': '1', 'top': '-35px'}, 200)
    }, function(){
        $('.telegram-info').animate({'opacity': '0', 'top': '-45px'}, 200)
    })

//    Дії при відповідному значенні скролу
    $(window).on('scroll', function(){

        var scroll_value = $(this).scrollTop()

        console.log(scroll_value)

//      Затемнення блоку з ім'ям персони
        var s = 1 - scroll_value * 0.001 * 2.5

        $('#animate-block').css('opacity', s)

        if ($(window).width() <= 767) {

            //        Анімація фото та шрифту в блоці "About"
            if ((scroll_value > 0) && (scroll_value < 1400)) {

                var image_top = 180 - scroll_value / 4

                var image_top_2 = 100 - scroll_value / 3

                $('#main-image').css('top', image_top)

                if (scroll_value > 700) {
                    $('#about-author .col-sm-8 h1').animate({'top': '30px', 'opacity': '0.5'}, 'slow')
                }

                $('.resume-content #main-image').css('top', image_top_2)

                if (scroll_value > 300) {
                     $('.resume-content h1:first').animate({'top': '30px', 'opacity': '0.5'}, 'slow')
                }

            }


            //        Поява блоку з послугами
            if (scroll_value > 1600) {
                $('.third-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 1800) {
                $('.third-window .row .col-sm-4:first').animate({'top': '50px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 2000) {
                $('.third-window .row .col-sm-4:nth-child(2)').animate({'top': '50px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 2200) {
                $('.third-window .row .col-sm-4:last').animate({'top': '50px', 'opacity': '1'}, 'slow')
            }


        //        Анімації четвертого блоку з портфоліо
            if (scroll_value > 2750) {
                $('.fourth-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 3100) {
                $('.fourth-window .row:first').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 3000) && (scroll_value < 4500)) {

                var image_top = 1400 - scroll_value / 3

                $('.portfolio-image:first').css('top', image_top)
            }

            //        Адаптація останнього блоку в портфоліо
            $('.fourth-window .row:last, .portfolio-content .fourth-window .row:last').html('<div class="col-sm-6">' +
                                    '<div class="portfolio-info">' +
                                        '<h6>Портфоліо</h6>' +
                                        '<h1>Творчий проект</h1>' +
                                        '<h4>Настав час себе показати і розробити власне портфоліо. <br>' +
                                            'Це завдання порівняно просте, але воно дало мені ще <br>' +
                                            'досвіду в розробці.' +
                                        '</h4>' +
                                        '<h4>Переглянути проект</h4>' +
                                    '</div>' +
                                '</div>' +
                                '<div class="col-sm-6"><img class="portfolio-image" src="/static/img/coffee.jpg"></div>'
                                )


            if (scroll_value > 4000) {
                $('.fourth-window .row:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 3300) && (scroll_value < 5300)) {

                var image_top = 1670 - scroll_value / 3

                $('.portfolio-image:last').css('top', image_top)
            }


        //        Анімації п'ятого блоку з виконаною роботою
            if (scroll_value > 5000) {
                $('.fifth-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 5100) {
                $('.fifth-window .col-sm-12:first').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 5300) {
                $('.fifth-window .col-sm-12:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 5500) {
                $('.fifth-window .col-sm-12:last-child').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }


        //        Анімації для елементів футера
            if (scroll_value > 5950) {
                $('.footer .col:first-child').animate({'top': '-10px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 6000) {
                $('.footer .col:nth-child(2)').animate({'top': '-10px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 6050) {
                $('.footer .col:last-child').animate({'top': '-10px', 'opacity': '1'}, 'slow')
            }


//            Анімації для сторінки "резюме"
            if ( scroll_value > 1100 ) {
                $('.about-author ul, .about-author .row:first').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if ( scroll_value > 2400 ) {
                $('.about-author .row:nth-child(3)').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if ( scroll_value > 3050 ) {
                $('.about-author .row:nth-child(4)').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if ( scroll_value > 3650 ) {
                $('.about-author .row:nth-child(5)').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            // Анімації для елементів футера
            if (scroll_value > 5300) {
                $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }


//            Анімації для сторінки "послуги"
            // Анімації для елементів футера
            if (scroll_value > 700) {
                $('.services-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.services-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.services-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }



//           Анімації для сторінки "портфоліо"
            if ((scroll_value > 0) && (scroll_value < 1500)) {

                var image_top = 380 - scroll_value / 3

                $('.portfolio-content .portfolio-image:first').css('top', image_top)
            }

            if ( scroll_value > 950 ) {
                $('.portfolio-content .row:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 500) && (scroll_value < 3300)) {

                var image_top = 650 - scroll_value / 3

                $('.portfolio-content .portfolio-image:last').css('top', image_top)
            }

            // Анімації для елементів футера
            if (scroll_value > 1950) {
                $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }


//            Анімації для сторінки "контакти"
            // Анімації для елементів футера
            if (scroll_value > 1200) {
                $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }
        } else {

            // Анімація фото та шрифту в блоці "About"
            if ((scroll_value > 0) && (scroll_value < 1600)) {

                var image_top = 250 - scroll_value / 3

                var image_top_2 = 100 - scroll_value / 1.5

                $('#main-image').css('top', image_top)

                $('#about-author .col-sm-8 h1').animate({'top': '0', 'opacity': '0.5'}, 'slow')

                $('.resume-content #main-image').css('top', image_top_2)
            }

            // Поява блоку з послугами
            if (scroll_value > 1000) {
                $('.third-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 1300) {
                $('.third-window .row .col-sm-4').animate({'top': '50px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 1900) {
                $('.fourth-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }


            // Анімації четвертого блоку з портфоліо
            if (scroll_value > 2150) {
                $('.fourth-window .row:first').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 2100) && (scroll_value < 3200)) {

                var image_top = 920 - scroll_value / 2.8

                $('.portfolio-image:first').css('top', image_top)
            }


            if (scroll_value > 2700) {
                $('.fourth-window .row:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 2400) && (scroll_value < 3600)) {

                var image_top = 1100 - scroll_value / 2.8

                $('.portfolio-image:last').css('top', image_top)
            }


            // Анімації п'ятого блоку з виконаною роботою
            if (scroll_value > 3350) {
                $('.fifth-window .window-titles').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 3600) {
                $('.fifth-window .col-sm-12:first').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 3800) {
                $('.fifth-window .col-sm-12:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 4200) {
                $('.fifth-window .col-sm-12:last-child').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }


            // Анімації для елементів футера
            if (scroll_value > 4715) {
                $('.footer .col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.footer .col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.footer .col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }



//            Сторінка "резюме"
            if (scroll_value > 450) {
                $('.about-author .row:first, .about-author ul').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 1200) {
                $('.about-author .row:nth-child(3)').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 1700) {
                $('.about-author .row:nth-child(4)').animate({'top': '0', 'opacity': '1'}, 'slow')
            }

            if (scroll_value > 2150) {
                $('.about-author .row:last').animate({'top': '0', 'opacity': '1'}, 'slow')
            }


            // Анімації для елементів футера
            if (scroll_value > 3500) {
                $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.resume-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }



            //Сторінка "послуги" та "контакти"
            // Анімації для елементів футера
            if (scroll_value > 300) {
                $('.services-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')


                setInterval( function () {
                    $('.services-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')

                    $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.services-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')

                    $('.contacts-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }



            //Анімації для сторінки "портфоліо"
            if ( scroll_value > 420 ) {
                $('.portfolio-content .window-titles, .portfolio-content .row:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 0) && (scroll_value < 1500)) {

                var image_top = 80 - scroll_value / 3

                $('.portfolio-content .portfolio-image:first').css('top', image_top)
            }

            if ( scroll_value > 950 ) {
                $('.portfolio-content .row:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
            }

            if ((scroll_value > 300) && (scroll_value < 2000)) {

                var image_top = 300 - scroll_value / 3

                $('.portfolio-content .portfolio-image:last').css('top', image_top)
            }

            // Анімації для елементів футера
            if (scroll_value > 1215) {
                $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:first').animate({'top': '0px', 'opacity': '1'}, 'slow')

                setInterval( function () {
                    $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:nth-child(2)').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 200)

                setInterval( function () {
                    $('.portfolio-content').parent('.container').children('.footer').children('.row').children('.col:last').animate({'top': '0px', 'opacity': '1'}, 'slow')
                }, 400)
            }

        }

    })

});

