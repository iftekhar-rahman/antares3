;(function($){
    $(document).ready(function($){ 

        // lazy load js
        $("img").unveil(200, function() {
            $(this).load(function() {
                this.style.opacity = 1;
            });
        });

        $(".trigger").on("click", function(){
            $(".offcanvas-menu-wrap, .off-canvas-overlay, .menu-close").addClass("active");
            return false;
        });
        $(".menu-close, .off-canvas-overlay").on("click", function(){
            $(".offcanvas-menu-wrap, .off-canvas-overlay, .menu-close").removeClass("active");
        });


        // Testimonials Page JS
        // var spansCounts =  $('#rating .single-star').length
        // $('#rating .single-star').on('click', function(e) {
        //     console.log($(this).index())
        //     $('#rating .single-star').removeClass('active');

        //     for(var i=0 ; i < $(this).index() + 1; i++){
        //         $('#rating .single-star').eq(i).addClass('active')
        //     }
        // })
        // $('.single-star').click(function () {
        //     $('.single-star').removeClass('show-arrow');
        //     $(this).addClass('show-arrow');
        // });
        // ends

        
        // if($('#finanace').offset() !== undefined){
        //     $('html, body').animate({
        //         scrollTop: $('#finanace').offset().top,
        //     }, 'slow');
        // }
        
        // Code for alert boxes on search section
        // $(".make").change(function(){
        //     var make = $(".make").val();
        //     alert("you have selected: " + make);   
        // });
        // $('.model').change(function(){
        //     var model = $(".model").val();
        //     alert("you have selected: " + model);   
        // });
        // $('.type').change(function(){
        //     var type = $(".type").val();
        //     alert("you have selected: " + type);   
        // });
        // $('.age').change(function(){
        //     var age = $(".age").val();
        //     alert("you have selected: " + age);   
        // });

        // $(".switch input[type='checkbox']").change(function(){
        //     if(this.checked){
        //         alert("You have selected monthly payment.");
        //     } else {
        //         alert("You have selected Cash Price.")
        //     }
        // })

        // $('.view-btn .boxed-btn').click(function(){
        //     var make = $(".make").val();
        //     var model = $(".model").val();
        //     var type = $(".type").val();
        //     var age = $(".age").val();
        //     var switcher = $(".switch input[type='checkbox'").val();
        //     alert('You have submitted: \n' + "\nMake: " + make + "\nModel: " + model + "\nType: " + type + "\nAge: " + age + "\nPayment: " + switcher);
        // });

        /*-----------------------------------------
                     Home Page JS
        -----------------------------------------*/ 
        // $(".switch-slider").on("click", function(){
        //     $(this).toggleClass("active");
        // });
        // responsive menu
        $('#menu').slicknav();
        
        // nice select
        $('select').niceSelect();
    
        // perfectScrollbar
        $(".nice-select .list").perfectScrollbar();

        // Sticky Header with smooth animation
        $(window).on('scroll', function() {
            if ($(window).scrollTop() >= 300) {
                $('.header-area').addClass('fixed');
            } else {
                $('.header-area').removeClass('fixed');
            }
        })
    
        /*---------- Double handle Range Slider  ----------*/
        // $(function () {
        //     $("#range-slider-1").slider({
        //         range: true,
        //         min: 0,
        //         max: 5000,
        //         step: 100,
        //         values: [500, 5000],
        //         slide: function (event, ui) {
        //             $('.amount1').val("£" + ui.values[0]);
        //             $('.amount2').val("£" + ui.values[1]);
        //         },
        //         stop: function( event, ui ) {
        //             alert("Your Min Value: " + ui.values[0] +"\n" +  "Your Max Value: " + ui.values[1]);

        //         }
        //     });
        //     $('.amount1').val("£" + $("#range-slider-1").slider("values", 0));
        //     $('.amount2').val("£" + $("#range-slider-1").slider("values", 1));
        // });

        /*---------- Single Handle Range Slider  ----------*/
        // $(function () {
        //     var handle = $("#custom-handle");
        //     $("#range-slider-2").slider({
        //         range: "max",
        //         value: 200,
        //         min: 150,
        //         max: 250,
        //         step: 1,
        //         prefix: "£",
        //         create: function() {
        //             handle.text( $( this ).slider( "value" ) );
        //         },
        //         slide: function( event, ui ) {
        //             handle.text( ui.value );
        //         },
        //         stop: function( event, ui ) {
        //             alert("Car finance slider value is =" + ui.value);

        //         }
        //     });
        // });

        // homepage-slides
        $(".homepage-slides").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: true,
            autoplay: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        // .reviews-wrapper
        $(".reviews-wrapper").owlCarousel({
            items: 3,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 30,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false
                },
                580: {
                    items: 2,
                    margin: 20,
                    nav: false
                },
                720: {
                    items: 3,
                    nav: false,
                    margin: 20,
                },
                960: {
                    items: 3
                },
                1140: {
                    items: 3
                }
            }
        });
        // .blog-carousel
        $(".blog-carousel").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 15,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 10,
                    nav: false
                },
                580: {
                    items: 2,
                    margin: 10,
                    nav: false
                },
                720: {
                    items: 3,
                    nav: false
                },
                960: {
                    items: 4
                },
                1140: {
                    items: 4
                }
            }
        });
        // featured-carousel
        $(".featured-car-carousel").owlCarousel({
            items: 4,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            margin: 15,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    nav: false
                },
                520: {
                    items: 2,
                    margin: 10,
                    nav: false
                },
                720: {
                    items: 3,
                    margin: 10,
                    nav: false
                },
                960: {
                    items: 3,
                },
                1140: {
                    items: 4
                }
    
            }
        });
        // testimonial-wrap
        $(".testimonial-wrap").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoHeight: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });


        // Scroll To Top starts
        $(window).scroll(function(){
            if ($(this).scrollTop() > 500) {
                $('.scrollTop').addClass('scrollBtn');
            } else {
                $('.scrollTop').removeClass('scrollBtn');
            }
        });
        $(".scrollTop").click(function() {
            $('html, body').animate({
                scrollTop: 0
            }, 800);
            return false;
        }); // click() scroll top ENDS
    

        /*----------------------------------
               CarDetails Page JS
        ----------------------------------*/
        //testimonial-carousel
        $(".testimonial-wrap").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoHeight: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });
        // gallery-col carousel
        $(".gallery-col").owlCarousel({
            items: 1,
            loop: true,
            nav: true,
            dots: false,
            autoplay: false,
            autoHeight: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
        });

 // Flickity sliders


var truncates = $('.single-car-slide');

if (truncates.length) { // here you validate if there is any element with that class

    // Gallery Carousel
    var $gallerySlider = $(".slider-carousel").flickity({
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        cellAlign: "center",
        percentPosition: true,
        dragThreshold: 5,
        lazyLoad: true,
        lazyLoad: 1
    });

    // $('.open-popup').on('click', function () {
    //     $('.slider-carousel .is-selected .popup-link').click();
    // });
    // $('.popup-link').magnificPopup({
    //     type: 'image',
    //     gallery: {
    //         enabled: true,
    //     },
    // });

    

    // Gallery "zoomed"
    // $(".overlay-carousel").flickity({
    //     asNavFor: ".slider-carousel",
    //     contain: true,
    //     pageDots: false,
    //     prevNextButtons: false
    // });

    // Zoom gallery
    // $(".gallery-zoom").featherlightGallery({
    //     gallery: {
    //     fadeIn: 300,
    //     fadeOut: 300
    // },
    //     openSpeed: 300,
    //     closeSpeed: 300
    // });
}


        // $('.main-carousel').flickity({
        //     cellAlign: "center",
        //     wrapAround: true,
        //     freeScroll: true,

        //     prevNextButtons: false,
        //     pageDots: false,
        //     percentPosition: false,
        //     dragThreshold: 5,
        //     lazyLoad: true,
        //     lazyLoad: 1
        // });
        
        // slider-carousel
        // $('.slider-carousel').owlCarousel({
        //     stagePadding: 200,
        //     loop:true,
        //     dots:false,
        //     nav:true,
        //     items:1,
        //     lazyLoad: true,
        //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        //     responsive:{
        //         0:{
        //             items:1,
        //             stagePadding: 60
        //         },
        //         600:{
        //             items:1,
        //             stagePadding: 100
        //         },
        //         1000:{
        //             items:1,
        //             stagePadding: 200
        //         },
        //         1200:{
        //             items:1,
        //             stagePadding: 250
        //         },
        //         1400:{
        //             items:1,
        //             stagePadding: 300
        //         },
        //         1600:{
        //             items:1,
        //             stagePadding: 350
        //         },
        //         1800:{
        //             items:1,
        //             stagePadding: 400
        //         },
        //         2000:{
        //             stagePadding: 450
        //         },
        //     }
        // });

        // magnificPopup for video
        $('.video-btn').magnificPopup({
            type : 'iframe',
            autoPlay: true,
            iframe: {
                markup: '<div class="mfp-iframe-scaler">'+
                          '<div class="mfp-close"></div>'+
                          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                        '</div>', 
                patterns: {
                  youtube: {
                    index: 'youtube.com/',
                    id: 'v=', 
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe.
                  },
                  vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                  },
                  gmaps: {
                    index: 'https://maps.google.',
                    src: '%id%&output=embed'
                  }
                  // you may add here more sources
                },
                srcAction: 'iframe_src',
              }
        });


        // Code by Shajal
        
        // magnificPopup for images
        $('.open-popup').on('click', function () {
            $('.slider-carousel .single-car-slide.is-selected .popup-link').click();
		});
		$('.popup-link').magnificPopup({
			type: 'image',
			gallery: {
				enabled: true,
			},
        });



        $('.popup-link2').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            }
        });
        //jQuery smooth scroll
        $('.smooth-menu a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '150';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutExpo');
            
            event.preventDefault();
        });
        // submenu-area
        $(".submenu-area").sticky({ topSpacing: 0 });
        // sticky call-to-action-area
        $(window).scroll(function(){
            if ($(this).scrollTop() > 200) {
                $('.call-to-action-area, .footer-area').addClass('sticky-action');
            } else {
                $('.call-to-action-area, .footer-area').removeClass('sticky-action');
            }
        });
        
        
        /*----------------------------------
                   Listing Page JS
        -----------------------------------*/ 
        /*---------- Double handle Range Slider  ----------*/
        $(function () {
            $("#range-slider-3").slider({
                range: true,
                min: 0,
                max: 500,
                step: 1,
                values: [80, 320],
                slide: function (event, ui) {
                    $('.slider-price .min-price').val("£" + ui.values[0]);
                    $('.slider-price .max-price').val("£" + ui.values[1]);
                }
            });
            $('.slider-price .min-price').val("£" + $("#range-slider-3").slider("values", 0));
            $('.slider-price .max-price').val("£" + $("#range-slider-3").slider("values", 1));
        });

        // refine search box js
        $(".refine-text").on("click", function(){
            $(".sidebar-wrapper, .refine-text, .refine-close, .listing-content-area, .footer-area").addClass("show-searchbox");
        });
        $(".refine-close").on("click", function(){
            $(".sidebar-wrapper, .refine-text, .refine-close, .listing-content-area, .footer-area").removeClass("show-searchbox");
        });

        // jQuery for clicking effect on sidebar single item
        $('.toggle-btn').click(function() {
            var $pane = $(this).closest('.single-sidebar-item').find('.pane');
            if ($pane.hasClass('inactive')) {
                $('.single-sidebar-item .pane').addClass('inactive');
                $pane.removeClass('inactive');
            } else {
                $pane.addClass('inactive');
            }
        });

        // jquery code to highlight the search bar header
        $(".search-header h5").on('click', function(){
            $(".search-header h5").removeClass("active");
            $(this).toggleClass("active");
        });
        $(".sidebar-close, .refine-close, .single-dropdown-item .nice-select").on('click', function(){
            $(".search-header h5").removeClass("active");
        });
    
        // jQuery to close sidebar content
        $(".sidebar-close, .single-dropdown-item.age, .single-dropdown-item.years-dropdown, .refine-close, .single-color").on("click", function(){
            $(".search-body.pane").addClass("inactive");
        });

        // $(".refine-text").on("click", function(){
        //     $(".refine-search-box").css("left", "0px");
        // });
        // $(".refine-close").on("click", function(){
        //     $(".refine-search-box").css("left", "-300px");
        // });

        $(".refine-text").on("click", function(){
            $(".footer").removeClass("footer-margin");
        });
        $(".refine-close").on("click", function(){
            $(".footer").addClass("footer-margin");
        });

        
    
    });
})(jQuery);




// $(window).load(function() {
//     alert("window load occurred!");
// });
