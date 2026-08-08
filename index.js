function add(a,b) {
    return a+b;
    
}
function sub(a,b) {
    return a-b ;
}
function mul(a,b){
    return a*b;
}
function div(a,b) {
    return a/b;
}

let firstNumber;
let secondNumber;
let operator;

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
console.log(operate);
