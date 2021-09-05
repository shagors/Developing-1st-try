$(document).ready(function(){


    $('#mobile-menu').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu'
    });


    $('.slider-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        autoplaySpeed: 2000,
        slidesToScroll: 1
    });

    $('.testimonial-active').slick({
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        dots:true,
        slidesToScroll: 1
    });
    
    $('.brand-active').slick({
        infinite: true,
        slidesToShow: 5,
        autoplay: true,
        arrows: false,
        dots: false,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    new WOW().init();


})