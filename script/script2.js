gsap.from("#page2 #nav ul li",{
    // y:"-100%",
    delay:2,
    duration:1,
    stagger:.5,
    opacity:0
})
gsap.to("#page2 #label h1",{
    y:0,
    delay:3.5,
    duration:1,
    
})
var navv = document.querySelector("#page2 #nav ul ");
navv.addEventListener("mousemove",()=>{
    document.querySelector("#minicircle").style.opacity=0;
})
navv.addEventListener("mouseleave",()=>{
    document.querySelector("#minicircle").style.opacity=1;
})