let num1;
let operator;
let num2;

createCalcButtons();


//////////// arithmetic functions ///////////////
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(num1, operator, num2) {

    switch(operator) {
        case '+':
            return add(num1, num2);
            break;
        case '-':
            return subtract(num1, num2);
            break;
        case '*':
            return multiply(num1, num2);
            break;
        case '/':
            return divide(num1, num2);
            break;
    }
}

/////////// calculator div functions /////////////////

function createCalcButtons() {
    const container = document.querySelector('.calc-container');

    for (let i = 0; i < 10; i++) {
        const digits = document.createElement('button');
        digits.textContent = i;
        container.appendChild(digits);
    };

    const operands = ['/', '*', '-', '=', '<-']; 

    operands.forEach((item) => {
        const operand = document.createElement('button');
        operand.textContent = item;
        container.appendChild(operand);
    });
}