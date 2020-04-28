$(document).ready(function () {
    $('.unique__slider').slick({
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>'
    });

    $('.formats__slider').slick({
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>'
    });


    var time = 10;
    var $bar,
        $slick,
        isPause,
        tick,
        percentTime;

    $slick = $('.franchisee__slider');
    $slick.slick({
        draggable: true,
        customPaging : function(slider, i) {
            var title = $(slider.$slides[i]).find('[data-title]').data('title');
            return '<a class="pager__item"> '+title+' </a>';
        },
        dots: true,
        mobileFirst: true,
        pauseOnDotsHover: true,
        prevArrow: '<button id="prev" type="button" class="btn slick-custom-prev"></button>',
        nextArrow: '<button id="next" type="button" class="btn slick-custom-next"></button>',
    });

    $bar = $('.franchisee__pagination .franchise__progress');

    $('.franchisee__slider_wrap').on({
        mouseenter: function() {
            isPause = true;
        },
        mouseleave: function() {
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
        if(isPause === false) {
            percentTime += 1 / (time+0.1);
            $bar.css({
                width: percentTime+"%"
            });
            if(percentTime >= 100)
            {
                $slick.slick('slickNext');
                startProgressbar();
            }
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0+'%'
        });
        clearTimeout(tick);
    }

    startProgressbar();
});


$(function() {
    $(".vision-table__accordion > vision-table__accordion_item.is-active").children(".vision-table__accordion_panel").slideDown();

    $(".vision-table__accordion > .vision-table__accordion_item").click(function() {
        $(this).siblings(".vision-table__accordion_item").removeClass("is-active").children(".vision-table__accordion_panel").slideUp();
        $(this).toggleClass("is-active").children(".vision-table__accordion_panel").slideToggle("ease-out");
    });
});

