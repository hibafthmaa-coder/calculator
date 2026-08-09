function add(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b ;
}
function mul(a,b){
    return a * b;
}
function div(a,b) {
    return a/b;
}

let firstNumber="";
let secondNumber;
let operator;
let storedNumber;

function operate( firstNumber,secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    }else if (operator==="-"){
        return sub(firstNumber,secondNumber);
    }else if (operator==="*"){
        return mul(firstNumber,secondNumber);
    }else if (operator==="/"){
        return div(firstNumber,secondNumber);
    }
}



const digitButton = document.querySelectorAll(".digits");
const displayReal = document.querySelector("#display");

for (let i = 0; i < digitButton.length; i++) {
    digitButton[i].addEventListener("click", function (event) {
        const clickedDigit = event.target.textContent;

        firstNumber = firstNumber + clickedDigit;

        displayReal.textContent = firstNumber;
    });
}

const operatorButton = document.querySelectorAll(".operator");

for (let i = 0; i < operatorButton.length; i++) {
     operatorButton[i].addEventListener("click", function (event) {
        const clickedOperator = event.target.textContent;

        operator = clickedOperator;
        storedNumber = firstNumber;
        firstNumber = "";

        displayReal.textContent = operator;
    });

}

const equalsButton = document.querySelector("#equals");

equalsButton.addEventListener("click", function () {
    secondNumber = Number(firstNumber);

let result = operate(Number(storedNumber), secondNumber, operator);
displayReal.textContent = result;
});