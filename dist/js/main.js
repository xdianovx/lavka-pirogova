$(document).ready(function () {

    $('.menu__burger').click(function (event) {
        $('.menu__burger, .menu__ul').toggleClass('active');
        $('body').toggleClass('lock');
    })

    $('.menu__ul a').on("click", function () {
        $('.menu__burger, .menu__ul').toggleClass('active');
    });


    var sliderU = $('.unique__slider').slick({
        speed: 500,
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>'
    });



    $('.sl-count__total').text(sliderU.slick.slideCount);

    sliderU.on('afterChange', function (event, slick, currentSlide) {
        $(".sl-count__current").text(currentSlide + 1);

    });


    $('.formats__slider').each(function () {

      $(this).slick({
          prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
          nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>'

        });


    });


    let blogSlider = $('.blog-franchisee__slider').slick({
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>'
    });


    $('.sl-count__total').text(blogSlider.slick.slideCount);

    blogSlider.on('afterChange', function (event, blogSlider, currentSlide) {
        $(".sl-count__current").text(currentSlide + 1);

    });
});


$(document).ready(function () {
    var time = 10;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.franchisee__slider');
    $slick.slick({
        draggable: true,
        customPaging: function (slider, i) {
            var title = $(slider.$slides[i]).find('[data-title]').data('title');
            return '<a class="pager__item"> ' + title + ' </a>';
        },
        dots: true,
        mobileFirst: true,
        pauseOnDotsHover: true,
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>',
    });

    $bar = $('.franchisee__pagination .franchise__progress');

    $('.franchisee__slider_wrap').on({
        mouseenter: function () {
            isPause = true;
        },
        mouseleave: function () {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 2 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();


    $(function () {
        $(".vision-table__accordion > vision-table__accordion_item").children(".vision-table__accordion_panel").slideUp();

        $(".vision-table__accordion > .vision-table__accordion_item").click(function () {
            $(this).siblings(".vision-table__accordion_item").addClass("is-active").children(".vision-table__accordion_panel").slideDown();
            $(this).toggleClass("is-active").children(".vision-table__accordion_panel ").slideToggle("ease-out");
            $(this).on(".vision-table__chevron").toggleClass("is-active");

        });



    });


    $('a[href^="#"], *[data-href^="#"]').on('click', function (e) {
        e.preventDefault();
        var t = 1000;
        var d = $(this).attr('data-href') ? $(this).attr('data-href') : $(this).attr('href');
        $('html,body').stop().animate({scrollTop: $(d).offset().top - 250}, t);

    });
});


$(document).ready(function () {
    var time = 10;
    var $bar,
        $slickProg,
        isPause,
        tick,
        percentTime;


    $(".progress__wrap").slick({


        responsive: [
            {
                breakpoint: 769,
                settings: {
                    infinite: true,
                    arrows: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    prevArrow: '<button id="prev" type="submit" class="btn slick-custom-prev"></button>',
                    nextArrow: '<button id="next" type="submit" class="btn slick-custom-next"></button>',
                }
            },
            {
                breakpoint: 4000,
                settings: "unslick"
            }
        ]
    });

    $slickProg = $('.progress__wrap');
    $bar = $(' .progress__progress');

    $('.progress__wrap').on({
        mouseenter: function () {
            isPause = true;
        },
        mouseleave: function () {
            isPause = false;
        }
    })

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        isPause = false;
        tick = setInterval(interval, 10);
    }

    function interval() {
        if (isPause === false) {
            percentTime += 1 / (time + 0.1);
            $bar.css({
                width: percentTime + "%"
            });
            if (percentTime >= 100) {
                $slickProg.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    startProgressbar();

});


$(document).ready(function () {

    $(".franchisee__wrap").slick({


        responsive: [
            {
                breakpoint: 600,
                settings: {
                    infinite: true,
                    arrows: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    draggable: true,
                    prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
                    nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>',
                }
            },

            {
                breakpoint: 4000,
                settings: "unslick"
            }
        ]
    });


});
