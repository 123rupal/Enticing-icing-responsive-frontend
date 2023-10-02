/*=============================
       services
==============================*/
$(function () {
    //animate on scroll
    new WOW().init();
});
/*=============================
      Work
==============================*/
$(function () {
    $('.workMagnific').magnificPopup({
        delegate: 'a', //child item selector ,by clicking on it popup will open
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});
/*=============================
      Team
==============================*/

$(function () {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        resposive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 2
            },
            //breakpoint from 768 up
            768: {
                items: 3
            }
        }
    });
});
/*=============================
      Testimonials
==============================*/

$(function () {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true
    });
});
/*=============================
    Stats
==============================*/
$(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });
});
/*=============================
      Clients
==============================*/

$(function () {
    $("#client-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        resposive: {
            //breakpoint from 0 up
            0: {
                items: 1
            },
            //breakpoint from 480 up
            480: {
                items: 3
            },
            //breakpoint from 768 up
            768: {
                items: 5
            },
            //breakpoint from 992 up
            992: {
                items: 6
            }

        }
    });
});

/*====================================
         Google Maps
====================================*/
$(window).on('load', function () {

    //Map Variables
    var addressString = '230 Braodway , NY , New York 10007, USA';
    var myLatlng = {
        lat: 40.712685,
        lng: -74.005920
    };

    //1.Render Map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    // 2. Add Marker
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: "Click To See Address"
    });

    // 3. Add Info Window
    var infowindow = new google.maps.InfoWindow({
        content: addressString
    });

    // Show info window when user clicks marker
    marker.addListener('click', function () {
        infowindow.open(map, marker);
    });

    // 4. Resize Function
    google.maps.event.addDomListener(window, 'resize', function () {

        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);

    });


});


/*=============================
      Navigation
==============================*/
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() < 50) {
            //hide nav
            $("nav").removeClass("vesco-top-nav");
            $("#back-to-top").fadeOut();
        } else {
            //show nav
            $("nav").addClass("vesco-top-nav");
            $("#back-to-top").fadeIn();
        }
    })
});
/*=============================
    Smooth scrolling
==============================*/
$(function () {
    $("a.smooth-scroll").click(function (event) {
        event.preventDefault();

        //this=get/return id like,#home,#about etc(this)
        var section = $(this).attr("href");

        $('html,body').animate({
                scrollTop: $(section).offset().top - 64
            },
            1250, "easeInOutExpo");
    })
});
//Close mobile menu on click

$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {

        $(".navbar-toggle").click();
    });
});