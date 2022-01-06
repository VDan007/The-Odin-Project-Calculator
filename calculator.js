//Basic functions//////
function add ( a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function operate (){
    
}

////////////


const display = document.querySelector("#display");

function showNumbers (){
    if(display.firstChild){display.removeChild(display.childNodes[0]);}
    const toShow = document.createElement("h1");
    toShow.textContent = numberA.join("");
    display.appendChild(toShow);
}





var numberA = [];

function fun (){
    numberA.push(this.textContent);
    showNumbers();
}

const buttons = Array.from(document.querySelectorAll(".nB"));


buttons.forEach(x=>x.addEventListener("click",fun));

