$(document).ready(function () {
    // BEGIN HOME GALLERY TABS
    $('.gallery-tabs__link').click( function(e) {
        e.preventDefault();

        // Begin tab changing
        $('.gallery-tabs__link').each( function() {
            $(this).parent().removeClass('active');
        });

        $(this).parent().addClass('active').trigger('classChange3');;

        // $('.tabs-switcher__count').asPieProgress('go', 16);
        // End tab changing

        // Begin tab content changing
        var clickedTabName =  $(this).data('tab');
        var precentageTab;

        $('.tabs-content__item').each( function() {
            $(this).fadeOut();
        });

        $('#' + clickedTabName + '2').fadeIn();

        setTimeout(function() {
            galleryThumbs2.update(true);
            galleryTop2.update(true);
            
            galleryThumbs3.update(true);
            galleryTop3.update(true);

            galleryThumbs4.update(true);
            galleryTop4.update(true);

            galleryThumbs5.update(true);
            galleryTop5.update(true);

            galleryThumbs6.update(true);
            galleryTop6.update(true);
        }, 300)
        // End tab content changing
    });

    var nTab = 0;

    $('#tabsSwitcherNext').click( function() {
        if ( $('.gallery-tabs__item.active').children().data('tab') !== 'instagram' ) {
            $('.gallery-tabs__item.active').removeClass('active').next().addClass('active').trigger('classChange');

        }
    });

    $('#tabsSwitcherPrev').click( function() {
        if ( $('.gallery-tabs__item.active').children().data('tab') !== 'interior' ) {
            $('.gallery-tabs__item.active').removeClass('active').prev().addClass('active').trigger('classChangePrev');

        }
    });

    $('.gallery-tabs__item').on('classChangePrev', function() {
        var carrentTabG = $(this).children().data('tab');

        if (carrentTabG == 'interior') {
            $('#interior2').fadeIn();
            $('#dishes2').fadeOut();
            $('#tabCurrent').text('01');
        }
        else if (carrentTabG == 'dishes') {
            $('#greatHall2').fadeOut();
            $('#dishes2').fadeIn();
            $('#tabCurrent').text('02');
        }
        else if (carrentTabG == 'greatHall') {
            $('#visitors2').fadeOut();
            $('#greatHall2').fadeIn();
            $('#tabCurrent').text('03');
        }
        else if (carrentTabG == 'visitors') {
            $('#events2').fadeOut();
            $('#visitors2').fadeIn();
            $('#tabCurrent').text('04');
        }
        else if (carrentTabG == 'events') {
            $('#instagram2').fadeOut();
            $('#events2').fadeIn();
            $('#tabCurrent').text('0');
        }
        else if (carrentTabG == 'instagram') {

        }

        setTimeout(function() {
            galleryThumbs2.update(true);
            galleryTop2.update(true);
            
            galleryThumbs3.update(true);
            galleryTop3.update(true);

            galleryThumbs4.update(true);
            galleryTop4.update(true);

            galleryThumbs5.update(true);
            galleryTop5.update(true);

            galleryThumbs6.update(true);
            galleryTop6.update(true);
        }, 300)
    });

    $('.gallery-tabs__item').on('classChange', function() {
        var carrentTabG = $(this).children().data('tab');

        if (carrentTabG == 'interior') {
            $('.tabs-switcher__count').circleProgress({value: 0.16});
            $('#tabCurrent').text('01');
        }
        else if (carrentTabG == 'dishes') {
            $('.tabs-switcher__count').circleProgress({value: 0.33});
            $('#tabCurrent').text('02');
            $('#interior2').fadeOut();
            $('#dishes2').fadeIn();
        }
        else if (carrentTabG == 'greatHall') {
            $('.tabs-switcher__count').circleProgress({value: 0.50});
            $('#tabCurrent').text('03');
            $('#dishes2').fadeOut();
            $('#greatHall2').fadeIn();
        }
        else if (carrentTabG == 'visitors') {
            $('.tabs-switcher__count').circleProgress({value: 0.66});
            $('#tabCurrent').text('04');
            $('#greatHall2').fadeOut();
            $('#visitors2').fadeIn();
        }
        else if (carrentTabG == 'events') {
            $('.tabs-switcher__count').circleProgress({value: 0.83});
            $('#tabCurrent').text('05');
            $('#visitors2').fadeOut();
            $('#events2').fadeIn();
        }
        else if (carrentTabG == 'instagram') {
            $('.tabs-switcher__count').circleProgress({value: 1});
            $('#tabCurrent').text('06');
            $('#events2').fadeOut();
            $('#instagram2').fadeIn();
        }

        setTimeout(function() {
            galleryThumbs2.update(true);
            galleryTop2.update(true);
            
            galleryThumbs3.update(true);
            galleryTop3.update(true);

            galleryThumbs4.update(true);
            galleryTop4.update(true);

            galleryThumbs5.update(true);
            galleryTop5.update(true);

            galleryThumbs6.update(true);
            galleryTop6.update(true);
        }, 300)
    });

    $('.gallery-tabs__item').on('classChange3', function() {
        var carrentTabG = $(this).children().data('tab');

        if (carrentTabG == 'interior') {
            $('.tabs-switcher__count').circleProgress({value: 0.16});
            $('#tabCurrent').text('01');
        }
        else if (carrentTabG == 'dishes') {
            $('.tabs-switcher__count').circleProgress({value: 0.33});
            $('#tabCurrent').text('02');
        }
        else if (carrentTabG == 'greatHall') {
            $('.tabs-switcher__count').circleProgress({value: 0.50});
            $('#tabCurrent').text('03');
        }
        else if (carrentTabG == 'visitors') {
            $('.tabs-switcher__count').circleProgress({value: 0.66});
            $('#tabCurrent').text('04');
        }
        else if (carrentTabG == 'events') {
            $('.tabs-switcher__count').circleProgress({value: 0.83});
            $('#tabCurrent').text('05');
        }
        else if (carrentTabG == 'instagram') {
            $('.tabs-switcher__count').circleProgress({value: 1});
            $('#tabCurrent').text('06');
        }

        setTimeout(function() {
            galleryThumbs2.update(true);
            galleryTop2.update(true);
            
            galleryThumbs3.update(true);
            galleryTop3.update(true);

            galleryThumbs4.update(true);
            galleryTop4.update(true);

            galleryThumbs5.update(true);
            galleryTop5.update(true);

            galleryThumbs6.update(true);
            galleryTop6.update(true);
        }, 300)
    });
    // END HOME GALLERY TABS

    // BEGIN HOME GALLERY SLIDER
    var galleryThumbs = new Swiper('.gallery-thumbs', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop = new Swiper('.gallery-top', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    var galleryThumbs2 = new Swiper('.gallery-thumbs-2', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop2 = new Swiper('.gallery-top-2', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs2,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    var galleryThumbs3 = new Swiper('.gallery-thumbs-3', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop3 = new Swiper('.gallery-top-3', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs3,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    var galleryThumbs4 = new Swiper('.gallery-thumbs-4', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop4 = new Swiper('.gallery-top-4', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs4,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    var galleryThumbs5 = new Swiper('.gallery-thumbs-5', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop5 = new Swiper('.gallery-top-5', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs5,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });

    var galleryThumbs6 = new Swiper('.gallery-thumbs-6', {
        spaceBetween: 30,
        slidesPerView: 1,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryTop6 = new Swiper('.gallery-top-6', {
        spaceBetween: 0,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        thumbs: {
            swiper: galleryThumbs6,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
            formatFractionCurrent: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
            formatFractionTotal: function(number) {
                if (number < 10) {
                    number = '0' + number;
                }
                return number;
            },
        },
    });
    // END HOME GALLERY SLIDER

    // BEGIN HOME REVIEWS SLIDER
    var reviewsThumb = new Swiper('.home-reviews__thumbs', {
        // spaceBetween: 30,
        // slidesPerView: 3,
        // loop: true,
        // freeMode: true,
        // loopedSlides: 5, //looped slides should be the same
        // navigation: {
        //     nextEl: '.swiper-button-next1',
        //     prevEl: '.swiper-button-prev1',
        // },
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        allowTouchMove: false,
        // centeredSlides: true,
        // direction: 'vertical',
        // breakpoints: {
        //     320: {
        //       slidesPerView: 3,
        //       spaceBetween: 5,
        //     },
        //     768: {
        //         slidesPerView: 6,
        //         spaceBetween: 15,
        //     }
        // }
    });
    var galleryReview2 = new Swiper('.home-reviews__reviews', {
        spaceBetween: 60,
        // loop:true,
        // loopedSlides: 5, //looped slides should be the same
        slidesPerView: 1,
        // centeredSlides: true,
        // slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },
        breakpoints: {
            1200: {
                slidesPerView: 2,
            }
        },
        // thumbs: {
        //     swiper: reviewsThumb,
        // },
        on: {
            slideNextTransitionStart: function() {
                reviewsThumb.slideNext();
            },
            slidePrevTransitionStart: function() {
                reviewsThumb.slidePrev();
            },
        }
    });

    $('.home-reviews__pagination-slider .swiper-slide').click( function() {
        var revSlN = $(this).children().text();
        
        galleryReview2.slideTo(revSlN - 1);
        reviewsThumb.slideTo(revSlN - 1);
    });
    // END HOME REVIEWS SLIDER

    // Begin smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // End smooth scroll

    // Open mobile nav
    $('#hamburger').click( function () {
        $('#mobileNav').fadeIn();
    });

    $('#menuNav').click( function () {
        $('#mobileMenu').fadeIn();
    });

    // Close mobile nav
    $('#mobileNavClose').click( function () {
        $('#mobileNav').fadeOut();
    });

    $('#mobileNavClose2').click( function () {
        $('#mobileNav').fadeOut();
    });

    // Gallery progress
    $('.tabs-switcher__count').circleProgress({
        value: 0.16,
        fill: '#fff',
        thickness: 4
      });
//     $('.tabs-switcher__count').asPieProgress({
//         namespace: '',
//         classes: {
//           svg: 'pie_progress__svg',
//           element: 'pie_progress',
//           number: 'pie_progress__number',
//           content: 'pie_progress__content'
//         },
//         min: 0,
//         max: 100,
//         goal: 100,
//         size: 190,
//         speed: 15, // speed of 1/100
//         barcolor: '#fff',
//         barsize: '5',
//         trackcolor: 'transparent',
//         fillcolor: 'none',
//         easing: 'ease',
//         numberCallback: function numberCallback(n) {
//           'use strict';
        
//           var percentage = Math.round(this.getPercentage(n));
        
//           return percentage + '%';
//         },
        
//         contentCallback: null
//       });

//       $('.pie_progress').asPieProgress('start');
});