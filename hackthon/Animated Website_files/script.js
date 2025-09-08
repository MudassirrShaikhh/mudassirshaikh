import { gsap } from "./node_modules/gsap/index.js";

const tls = gsap.timeline({
    scrollTrigger: {
        trigger: "#sec-two",
        scroller: "body",
        markers: true,
        start: "top 50%",
        end: "bottom 50%",
        scrub: true,
        pin: true,
    },
});

const tl = gsap.timeline();

tl.from('nav .heading-one, nav li, nav button',{
    y: -30,
    opacity: 0,
    duration: 0.8,
    delay:1,
    stagger: 0.2,
})
tl.from('.heading-two, .pera-one, .btn-two',{
    x: -300,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
})

tl.from('#main-image',{
    opacity: 0,
    duration: 1.5,
})

tl.from('#line', {
    width: 0, // Animation start from 0 width
    opacity: 0,
    duration: 1.5, // Animation duration
});

tl.from('.image-logos', {
    y: 40, // Animation
    opacity: 0,
    duration: 1.5, // Animation duration
    stagger: 0.2, // Staggering effect
    delay:1,
})


tls.from('#sec-two-heading, #pera-two',{
    x: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    delay:1,
})