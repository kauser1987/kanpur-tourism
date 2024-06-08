var user = prompt("enter your choice among Snake(s), Water(w), Gun(g)");
var rn=Number.parseInt(Math.floor(Math.random()*3));
var cpu=["s","w","g"][rn];
function result(a,b) {
    if(cpu===user){
        return "match tie";
    }
    else if(cpu==="s"&&user==="g"){
        return "user"; 
    }
    else if(cpu==="s"&&user==="w"){
        return "cpu"; 
    }
    else if(cpu==="g"&&user==="w"){
        return "user"; 
    }
    else if(cpu==="g"&&user==="s"){
        return "cpu"; 
    }
    else if(cpu==="w"&&user==="g"){
        return "cpu"; 
    }
    else if(cpu==="w"&&user==="s"){
        return "user"; 
    }
}
var result1 = result();
document.querySelector("#user").innerHTML="User Choice is => "+user;
document.querySelector("#cpu").innerHTML="Cpu Choice is => "+cpu;
document.querySelector("#result").innerHTML="The Winner is => "+result1;