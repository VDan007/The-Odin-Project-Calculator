//Basic functions//////
function add (a,b){
        vipe();
      h1.textContent =  parseFloat(a.join("")) + parseFloat(b.join(""));
    display1.append(h1);

    }

function subtract (a,b){
    vipe();
      h1.textContent =  parseFloat(a.join("")) - parseFloat(b.join(""));
    display1.append(h1);
}

function multiply (a,b){
    vipe();
      h1.textContent =  parseFloat(a.join("")) * parseFloat(b.join(""));
    display1.append(h1);
}

function divide(a,b){
    vipe();
      h1.textContent =  parseFloat(a.join("")) / parseFloat(b.join(""));
    display1.append(h1);
}

function operate (){
    if(whatToDo =="+"){
        add(numberA,numberB);
    }
    else if(whatToDo=="-"){
        subtract(numberA,numberB);
    }
    else if(whatToDo=="*"){
        multiply(numberA,numberB);
    }
    else if(whatToDo=="/"){
        divide(numberA,numberB);
    }
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


function showNumbers2 (){
    if(display3.firstChild){display3.removeChild(display3.childNodes[0]);}
    const toShow = document.createElement("h1");
    toShow.textContent = numberB.join("");
    display3.appendChild(toShow);
}

var whatToDo = [];

var numberB = [];

var numberA = [];

function fun (){
    numberA.push(this.textContent);
    showNumbers();
}

function fun2 (){
    numberB.push(this.textContent);
    showNumbers2();
}

function equal (){
    console.log(
        parseFloat(numberA.join(""))+parseFloat(numberB.join(""))
    );

}


function con(){console.log("works");}

function addPressed(){
    whatToDo.push("+");
    h1.textContent ="+";
    display2.append(h1);
    buttons.forEach(x=>x.removeEventListener("click",fun));
    buttons.forEach(x=>x.addEventListener("click",fun2));
}
function subtractPressed(){
    whatToDo.push("-");
    h1.textContent ="-";
    display2.append(h1);
    buttons.forEach(x=>x.removeEventListener("click",fun));
    buttons.forEach(x=>x.addEventListener("click",fun2));
}

function multiplyPressed(){
    whatToDo.push("*");
    h1.textContent ="*";
    display2.append(h1);
    buttons.forEach(x=>x.removeEventListener("click",fun));
    buttons.forEach(x=>x.addEventListener("click",fun2));
}

function dividePressed(){
    whatToDo.push("/");
    h1.textContent ="/";
    display2.append(h1);
    buttons.forEach(x=>x.removeEventListener("click",fun));
    buttons.forEach(x=>x.addEventListener("click",fun2));
}


function vipe(){
    display1.removeChild(display1.childNodes[0]);
    display2.removeChild(display2.childNodes[0]);
    display3.removeChild(display3.childNodes[0]);
}

const buttons = Array.from(document.querySelectorAll(".nB"));
buttons.forEach(x=>x.addEventListener("click",fun));

const   addBtn = document.querySelector(".addBtn");
addBtn.addEventListener("click",addPressed);

const   subtractBtn = document.querySelector(".subtractBtn");
subtractBtn.addEventListener("click",subtractPressed);

const multiplyBtn =document.querySelector(".multiplyBtn");
multiplyBtn.addEventListener("click",multiplyPressed);

const divideBtn = document.querySelector(".divideBtn");
divideBtn.addEventListener("click",dividePressed);

const equalBtn = document.querySelector(".equal");
equalBtn.addEventListener("click",operate);



const h1 = document.createElement("h1");

