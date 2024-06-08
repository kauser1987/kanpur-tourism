gsap.to("#page2a span h1",{
    x:"-120%",
    delay:2,
    scrollTrigger:{
        scroller:"#main",
        trigger:"#page2a span h1",
        start:"top 0%",
        end:"top -160%",
        scrub:3,
        pin:true,
    }
})
