// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();




 var a=0;
 function timer() {
     setInterval(() => {
        if(a<95){
            var t = Math.floor(Math.random()*20)
            a=a+t;
            document.querySelector("#page1 h1 span").innerHTML=a;
        }
        else
        document.querySelector("#page1 h1 span").innerHTML=100;
        
    }, 150);
 }
 gsap.to("#page1",{
    top:"-100%",
    delay:2,
    duration:3,
 })
 
 var circle= document.querySelector("#minicircle");
 function mousefollower(x,y){
    window.addEventListener("mousemove",(dets)=>{
        circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(${x},${y})`
    })
}
function pressedfollower() {
    var scaleX=0;
    var scaleY=0;
    var xdiff=0;       
    var ydiff=0;
    var timer;
    window.addEventListener("mousemove",(dets)=>{
        clearTimeout(timer);
    scaleX=gsap.utils.clamp(.8,1.2,dets.clientX-xdiff)
    scaleY=gsap.utils.clamp(.8,1.2,dets.clientY-ydiff)
    xdiff=dets.clientX;
    ydiff=dets.clientY;
    mousefollower(scaleX,scaleY)

 timer=setTimeout(()=>{
    circle.style.transform=`translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`
 },100)
})}
mousefollower()
pressedfollower()
timer()
