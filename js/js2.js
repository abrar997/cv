

function opennav() {
    document.getElementById("mysidenav").style.width = "280px";
    document.getElementById("main").style.width = "100%";
    document.getElementById("main").style.marginLeft = "300px";
    document.getElementById("nav").style.display = "none"


}


function cloes() {
    document.getElementById("mysidenav").style.width = "-280px";

    document.getElementById("main").style.width = " -280px";


}



function btn1(){
    var x = document.getElementById("more")
    if(x.style.display ="none"){
x.style.display ="block";

    }else{
        x.style.display ="block"
    }
    var y = document.getElementById("btn");
    y.style.display="none"
}



function btn2() {
    var x = document.getElementById("more1")
    if (x.style.display = "none") {
        x.style.display = "block";

    } else {
        x.style.display = "block"
    }
    var y = document.getElementById("btn1");
    y.style.display = "none"
}








//-------------------------- Task------------------------------------------

function demm1(){
var x=document.getElementById("demo1");

var y="string is wprk with me";
x.innerHTML=y.length;}
// ----------------------
function demm2(){
var fruits=["Banana", "Orange", "Apple", "Mango"];
    fruits.pop();

document.getElementById("demo2").innerHTML = fruits;

}
// -------------------
function demm3() {

var x = document.getElementById("demo3");
var z="tomato,ptato,banana,apple";
    x.innerHTML = z.slice(4, 10)
}
// --------------------------
function demm4() {

var x = document.getElementById("demo4");
    var z = "tomato,ptato,banana,apple";
x.innerHTML=z.substring(4,10)

}

// --------------------------
function demm5() {

    var x = document.getElementById("demo5");
    var z = "tomato,ptato,banana,apple";
    x.innerHTML = z.substr(-4, 10)

}

// ----------------------
function demm6() {

    var x = document.getElementById("demo6");
    var z = ["tamata", "potata", "onion", "mango"]
    z.shift();
    x.innerHTML =z;
}

// ----------------------------

function demm7() {

    var x = document.getElementById("demo7");
    var z = ["tamata", "potata", "onion", "mango"]
    z.unshift("lemona");
    x.innerHTML = z
}

function demm8() {

var text = "Please visit Microsoft!";
document.getElementById("demo8").innerHTML= text.replace(/MICROSOFT/i, "W3Schools");
}


//time----------------------


var timess=new Date()

    document.getElementById("timeover").innerHTML = timess;
document.getElementById("timeover").style.color="white";
document.getElementById("timeover").style.fontSize = "18px";


// -oclck' -------------------------

function oclock(){

var watch=new Date();

    var hours = watch.getHours();
    var minute = watch.getMinutes();
    var second = watch.getSeconds();
    var timezone="Am"

    if (hours === 0){

        hours=12;
    
    } if (hours >12) {
        hours = hours-12;
        timezone="PM"
        
    } 
        
    hours = (hours < 10) ? "0" + hours : hours;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    var time = hours + ":" + minute + ":" + second + "" ; 

    document.getElementById("timeover").innerHTML = time;

    setTimeout(oclock,1000);
    document.getElementById("timeover").style.fontSize="40px";
    document.getElementById("timeover").style.color = "pink";
    document.getElementById("timeover").style.margin = "100px 0px 0px 140px";
    document.getElementById("timeover").style.border = "3px solid white";
    document.getElementById("timeover").style.paddingTop = "30px";
    document.getElementById("timeover").style.width="360px"
    document.getElementById("timeover").style.paddingLeft = "180px";


} 

oclock()