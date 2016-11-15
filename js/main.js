$(document).ready(function() {


    var controller = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onLeave", duration: "200%" } });
    var controller2 = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "300%" } });
    var controller3 = new ScrollMagic.Controller({ globalSceneOptions: { triggerHook: "onEnter", duration: "250%" } });
    new ScrollMagic.Scene({ triggerElement: "#sec1" })
        .setTween("#bg1", { y: "60%", ease: Linear.easeNone })
        .addTo(controller);

    new ScrollMagic.Scene({ triggerElement: "#sec3" })
        .setTween("#bg3", { y: "40%", ease: Linear.easeNone })
        .addTo(controller2);

    new ScrollMagic.Scene({ triggerElement: "#sec5" })
        .setTween("#bg5", { y: "50%", ease: Linear.easeNone })
        .addTo(controller3);

});

/*
function openNavList() {
    var navList = document.querySelector('.navList')
    navList.classList.toggle('collapse');
}
*/
