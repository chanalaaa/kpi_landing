$(document).ready(function() {

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
            .setTween("#bg3", { y: "27%", ease: Linear.easeNone })
            .addTo(controller2);

        new ScrollMagic.Scene({ triggerElement: "#sec5" })
            .setTween("#bg5", { y: "50%", ease: Linear.easeNone })
            .addTo(controller3);

    }

    $('a[data-toggleTab="sec2"]').click(function() {
        $('.collapse.in').collapse('hide');
    });


    setTimeout(function() {
        $('#card_one').addClass('slideDown');
        $('#card_two').addClass('slideUp');
        $('#card_three').addClass('slideDown');
    }, 800);


});

/*
function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
*/
