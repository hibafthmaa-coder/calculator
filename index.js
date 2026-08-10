function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

let firstNumber = "";
let secondNumber = "";
let operator = "";
let storedNumber = "";
let resultDisplayed = false;

function operate(firstNumber, secondNumber, operator) {
    if (operator === "+") {
        return add(firstNumber, secondNumber);
    } else if (operator === "-") {
        return sub(firstNumber, secondNumber);
    } else if (operator === "*") {
        return mul(firstNumber, secondNumber);
    } else if (operator === "/") {
        if (secondNumber === 0) {
            return "Nice try 😏";
        }

        return div(firstNumber, secondNumber);
    }
}

const digitButton = document.querySelectorAll(".digits");
const operatorButton = document.querySelectorAll(".operator");
const displayReal = document.querySelector("#display");
const equalsButton = document.querySelector("#equals");
const clearButton = document.querySelector("#clear");

// DIGITS
for (let i = 0; i < digitButton.length; i++) {
    digitButton[i].addEventListener("click", function (event) {
        const clickedDigit = event.target.textContent;

        // If a result was already displayed, start a new calculation
        if (resultDisplayed) {
            firstNumber = "";
            storedNumber = "";
            operator = "";
            resultDisplayed = false;
        }

        firstNumber = firstNumber + clickedDigit;
        displayReal.textContent = firstNumber;
    });
}

// OPERATORS
for (let i = 0; i < operatorButton.length; i++) {
    operatorButton[i].addEventListener("click", function (event) {
        const clickedOperator = event.target.textContent;

        // Calculate previous pair if we have two numbers
        if (storedNumber !== "" && firstNumber !== "") {
            const result = operate(
                Number(storedNumber),
                Number(firstNumber),
                operator
            );

            storedNumber = result;
            displayReal.textContent = result;

        // Otherwise, store the first number
        } else if (storedNumber === "") {
            storedNumber = firstNumber;
        }

        // Always use the latest operator
        operator = clickedOperator;
        firstNumber = "";
        resultDisplayed = false;
    });
}

// EQUALS
equalsButton.addEventListener("click", function () {

    // Make sure we have everything needed
    if (storedNumber === "" || firstNumber === "" || operator === "") {
        return;
    }

    secondNumber = Number(firstNumber);

    let result = operate(
        Number(storedNumber),
        secondNumber,
        operator
    );

    // Round long decimals
    if (typeof result === "number") {
        result = Math.round(result * 1000000) / 1000000;
    }

    displayReal.textContent = result;

    // Result becomes the stored first number
    storedNumber = result;
    firstNumber = "";
    resultDisplayed = true;
});

// CLEAR
clearButton.addEventListener("click", function () {
    firstNumber = "";
    secondNumber = "";
    storedNumber = "";
    operator = "";
    resultDisplayed = false;

    displayReal.textContent = 0;
});