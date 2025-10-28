// ===== FUNCTIONS WITH NO PARAMETERS ===== //
function sayHello(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Harry!"
}

function todaysDate(){
let output1 = document.querySelector("#ouput1");
output1.innerHTMl = "Today is tuesday, October 28th 2025";
}

function motivation(){
let output1 = document.querySelector("#output1");
output1.innerHTMl = "You're so cool!";
}

function rep(){
let output1 = document.querySelector("#ouput1");
output1.innerHTMl = "No one";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
document.querySelector(".sayhellobtn").addEventListener("click", function(){
    sayHello();
});









// ===== EVENT LISTENERS THAT CALLS FUNCTIONS ===== //
