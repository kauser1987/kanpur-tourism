document.querySelectorAll(".elem").forEach((elem)=>{
    var prevX = 0;
        var diffrot = 0;
    elem.addEventListener("mousemove",(dets)=>{
        var diffY = (dets.clientY - elem.getBoundingClientRect().top);
        console.log(diffY)
        diffrot = dets.clientX - prevX;
         prevX = dets.clientX;
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            top:diffY,
            left: dets.clientX-elem.getBoundingClientRect().left,
            rotate: gsap.utils.clamp(-20,20,diffrot)
        })
    })
    elem.addEventListener("mouseleave", (dets) => {
        var diffY = (dets.clientY - elem.getBoundingClientRect().top);
        var diffrot = dets.clientX - prevX;
        var prevX = dets.clientX;
        gsap.to(elem.querySelector("#bottom img"), {
            top:diffY,
            left: dets.clientX-elem.getBoundingClientRect().left,
            opacity: 0,
            rotate: gsap.utils.clamp(-20,20,diffrot),
            
        })
    })
})


