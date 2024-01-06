createCalcButtons();
getUserInput();

// let num1 = getUserInput();
// let operator = getUserInput();
// let num2 = getUserInput();






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

    const operands = ['/', '*', '-', '.', '=', '<-']; 

    operands.forEach((item) => {
        const operand = document.createElement('button');
        operand.textContent = item;
        container.appendChild(operand);
    });
}

function getUserInput() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log(button.textContent);
        })
    })

}