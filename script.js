// ===== FUNCTIONS WITH NO PARAMETERS ===== //


function sayHello(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Harry!"
}

function todaysDate(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "Today is tuesday, October 28th 2025";
}

function motivation(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "You're so cool!";
}

function rep(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "No one";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
function equation(x,y){
x = 5;
y = 7;
 let output2 = document.querySelector("#output2");
    output2.innerHTML = `The sum of ${x} and ${y} is ${x+y}`;
}

function hiAlex(greeting){
greeting = "Hi Alex!";
 let output2 = document.querySelector("#output2");
    output2.innerHTML = greeting;
}

function area(a, b){
a = 10;
b = 6;
 let output2 = document.querySelector("#output2");
    output2.innerHTML = `The area of a rectangle with a length of ${a} cm and a width of ${b} cm is ${a * b} cms`;
}

function favoriteColor(color){
color = "blue";
 let output2 = document.querySelector("#output2");
    output2.innerHTML = `My favorite color is ${color}`;
}

function convert(farenheit, celsius){
farenheit = 32;
    celsius = 25;
 let output2 = document.querySelector("#output2");
    output2.innerHTML = `${celsius}°C is equal to ${farenheit+celsius}°F`;
}


// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
document.querySelector(".sayhellobtn").addEventListener("click", function(){
    sayHello();
});

document.querySelector(".todaysdatebtn").addEventListener("click", function(){
    todaysDate();
});

document.querySelector(".motivationbtn").addEventListener("click", function(){
    motivation();
});

document.querySelector(".repbtn").addEventListener("click", function(){
    rep();
});

document.querySelector(".equation1").addEventListener("click", function(){
equation();
});

document.querySelector(".equation2").addEventListener("click", function(){
hiAlex();
});

document.querySelector(".equation3").addEventListener("click", function(){
area();
});

document.querySelector(".equation4").addEventListener("click", function(){
favoriteColor();
});

document.querySelector(".equation5").addEventListener("click", function(){
convert();
});
