// JavaScript for Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function () {
    document.getElementById('side-menu').classList.toggle('active');
});


// GSAP for scrolling effect
gsap.to(".scroll-container", {
    x: "-130%",
    scrollTrigger: {
        trigger: ".scroll-container",
        scroller: "body",
        // markers: true,
   start: "top 30%",
   end: "bottom -125%",
        scrub: 3,
        pin: true,
       

    },

});


gsap.from(".text-container",{
    scale:0.5,
    opacity:0.,
    duration:1.5,
    scrollTrigger:{
        trigger:".text-container",
        // markers:true,
        scroller:"body",
        start:"top 100%",
        end:"bottom 50%",
        toggleActions:"restart pause reverse pause",
        scrub:2,

    }
})
gsap.from(".container-3",{
    scale:0.5,
    opacity:0.,
    duration:1.5,
    scrollTrigger:{
        trigger:".container-3",
        // markers:true,
        scroller:"body",
        start:"top 100%",
        end:"bottom 50%",
        toggleActions:"restart pause reverse pause",
        scrub:2,
    }
})
gsap.from(".box-container",{
    scale:0.5,
    opacity:0.,
    duration:1.5,
    scrollTrigger:{
        trigger:".box-container",
        // markers:true,
        scroller:"body",
        start:"top 100%",
        end:"bottom 50%",
        toggleActions:"restart pause reverse pause",
        scrub:2,
    }
})
gsap.from(".news-section",{
    scale:0.5,
    opacity:0.,
    duration:1.5,
    scrollTrigger:{
        trigger:".news-section",
        // markers:true,
        scroller:"body",
        start:"top 100%",
        end:"bottom 50%",
        toggleActions:"restart pause reverse pause",
        scrub:2,
    }
})
