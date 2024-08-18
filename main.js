const tl = gsap.timeline();

tl.from('.menu-area .parent-item', {
    y:10,
    duration:0.4,
    delay:1,
    opacity:0,
    // stagger:1
});

tl.from('.hero-area h1', {
    y:30,
    duration:1,
    delay:1,
    opacity:0,
    stagger:1
})