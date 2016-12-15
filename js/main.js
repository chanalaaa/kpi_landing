$(document).ready(function() {
    $('a[data-target="#collapse1"]').click(function() {
        setTimeout(function() {
            $('#collapse1 .owl-carousel').owlCarousel({
                navContainer: '#customNav',
                mouseDrag: false,
                touchDrag: false,
                //animateOut: 'fadeOut',
                //smartSpeed:150,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            })
        }, 10)
    });
    $('a[data-target="#collapse2"]').click(function() {
        setTimeout(function() {
            $('#collapse2 .owl-carousel').owlCarousel({
                navContainer: '#customNav',
                mouseDrag: false,
                touchDrag: false,
                //animateOut: 'fadeOut',
                //smartSpeed:150,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            })
        }, 10)
    });
    $('a[data-target="#collapse3"]').click(function() {
        setTimeout(function() {
            $('#collapse3 .owl-carousel').owlCarousel({
                navContainer: '#customNav',
                mouseDrag: false,
                touchDrag: false,
                //animateOut: 'fadeOut',
                //smartSpeed:150,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            })
        }, 10)
    });

    $(".owl-carousel").each(function() {
        var $this = $(this);
        // Custom Navigation Events
        $this.parent().find(".next").click(function() {
            $this.trigger('next.owl.carousel');
        });
        $this.parent().find(".prev").click(function() {
            $this.trigger('prev.owl.carousel');
        });
    });

    setTimeout(function() {
        $('#card_one').addClass('slideDown');
        $('#card_two').addClass('slideUp');
        $('#card_three').addClass('slideDown');
    }, 800);
    // var collapse_width = $(".for_collapse .col-centered").width();
    // console.log(collapse_width);
    // $(".cl-sec2 .owl-stage").css('width', collapse_width * 2);
    // $(".cl-sec2 .owl-item").css('width', collapse_width);

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return;
    } else {
        var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "200%" } });
        var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "250%" } });
        var controller3 = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "300%" } });
        new ScrollMagic.Scene({ triggerElement: "#sec1" })
            .setTween("#bg1", { y: "60%", ease: Linear.easeNone })
            .addTo(controller);

        new ScrollMagic.Scene({ triggerElement: "#sec3" })
            .setTween("#bg3", { y: "30%", ease: Linear.easeNone })
            .addTo(controller2);

        new ScrollMagic.Scene({ triggerElement: "#sec5" })
            .setTween("#bg5", { y: "50%", ease: Linear.easeNone })
            .addTo(controller3);

    }

    $('a[data-toggleTab="sec2"]').click(function() {
        $('.collapse.in').collapse('hide');
    });
    $('#scrollToTop').hide();
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('#scrollToTop').fadeIn(300);
        } else {
            $('#scrollToTop').fadeOut(300);
        }
    });

    //Click event to scroll to top
    $('#scrollToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 200);
        return false;
    });



});

/*
function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
*/
