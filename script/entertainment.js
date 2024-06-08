var rn;
var score=0;
function timer() {
    var time = 10;
var count =    setInterval(() => {
        if (time > 0) {
        time--;
            document.querySelector("#timer").innerHTML = time;
        } else if(time === 0){
            // document.querySelector("#bottom").style.display = "none";
            clearInterval(count)
            document.querySelector("#bottom").innerHTML = `<h1 style="margin:3vw">Game Over \n Your Score is ${score}</h1>`;
            // alert("your score is"+score)
        }
        
    }, 1000);
}
function createballs() {
    var clutter = "";
    for (var i = 1; i < 99; i++) {
        rn=parseInt(Math.floor(Math.random()*9));
        var balls = `<div id="balls">${rn}</div>`;
        clutter += balls;
    }
    document.querySelector("#zone #top #number").innerHTML=rn;
    document.querySelector("#zone #bottom").innerHTML = clutter;
}
function Tscore(){
    var hit;
    document.querySelector("#bottom").addEventListener("click",(dets)=>{
        

        hit = parseInt(dets.target.innerHTML);
        if(hit===rn){
            score+=10;
            document.querySelector("#score").innerHTML=score;
            createballs();
        }else{
            createballs();
        }
       
    })
}
timer();
createballs();
Tscore();