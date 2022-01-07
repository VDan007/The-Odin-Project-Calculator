//Basic functions//////


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


const display1 = document.querySelector("#display1");
const display2 = document.querySelector("#display2");
const display3 = document.querySelector("#display3");

function showNumbers (){
    if(display1.firstChild){display1.removeChild(display1.childNodes[0]);}
    const toShow = document.createElement("h1");
    toShow.textContent = numberA.join("");
    display1.appendChild(toShow);
}





var numberA = [];

function fun (){
    numberA.push(this.textContent);
    showNumbers();
}

const buttons = Array.from(document.querySelectorAll(".nB"));
buttons.forEach(x=>x.addEventListener("click",fun));

const   addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click",add);

function add (){
    const plus = document.createElement("h1");
    plus.textContent ="+";
    display2.appendChild(plus);
       // return a+b;
    }