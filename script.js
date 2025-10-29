// ===== FUNCTIONS WITH NO PARAMETERS ===== //


function sayHello(){
    let output1 = document.querySelector("#output1");
    output1.innerHTML = "Hello Harry!"
}

function todaysDate(){
let output1 = document.querySelector("#ouput1");
output1.innerHTML = "Today is tuesday, October 28th 2025";
}

function motivation(){
let output1 = document.querySelector("#output1");
output1.innerHTML = "You're so cool!";
}

function rep(){
    let output1 = document.querySelector("#ouput1");
    output1.innerHTML = "No one";
}

// ===== FUNCTIONS WITH PARAMETERS ===== //
function equation(){

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


