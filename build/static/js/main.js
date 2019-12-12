$(document).ready(function () {
    // BEGIN HOME GALLERY TABS
    $('.gallery-tabs__link').click( function(e) {
        e.preventDefault();

        // Begin tab changing
        $('.gallery-tabs__link').each( function() {
            $(this).parent().removeClass('active');
        });

        $(this).parent().addClass('active');
        // End tab changing

        // Begin tab content changing
        var clickedTabName =  $(this).data('tab');

        $('.tabs-content__item').each( function() {
            $(this).slideUp();
        });

        $('#' + clickedTabName).slideDown();

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
    var galleryReview = new Swiper('.home-reviews__reviews', {
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

    // Close mobile nav
    $('#mobileNavClose').click( function () {
        $('#mobileNav').fadeOut();
    });
});