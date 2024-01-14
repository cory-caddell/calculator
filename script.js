
const displayNode = document.querySelector('#display');
let reset = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayUserSelection(button.textContent, reset);
        reset = (button.textContent === '=' || displayNode.textContent == 'ERROR') ? true : false;    //display reset upon next calc input
    });
});

document.addEventListener('keypress', (e) => {
    displayUserSelection(e.key.toString(), reset);
    reset = (e.key.toString() == 'Enter') || (displayNode.textContent == 'ERROR') ? true : false;    //display reset upon next calc input
});

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
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
    }
}

/////////// calculator div functions /////////////////
function displayUserSelection(text, reset) {     
    const displayNode = document.querySelector('#display');

    if(reset) {
        displayNode.textContent = '';
    }

    switch(text) {
        case '+':
        case '-':
        case '*':
        case '/':
            let operator = ' ' + text + ' ';
            displayNode.textContent += operator;
            if(getUserSelection().length > 3) {
                displayNode.textContent = getSolution(getUserSelection()) + operator;
            }
            break;
        case 'Delete':
        case 'DEL':
            displayNode.textContent = deletePrevInput(displayNode);
            break;
        case 'AC':
            displayNode.textContent = "";
            break;
        case 'Enter':
        case '=':
            displayNode.textContent = getSolution(getUserSelection());
            break;
        default:      
            displayNode.textContent += text;
            if(displayNode.textContent.length > 12) {
                displayNode.textContent = 'ERROR';
            }
    }
}

function getUserSelection() {
    const text = document.querySelector('#display');
    return textArr = text.textContent.split(' ');
}

function getSolution (arr){
    let solution = (checkIfMultipleDecimals(arr[0]) || checkIfMultipleDecimals(arr[2])) ? NaN : operate(parseFloat(arr[0]), arr[1], parseFloat(arr[2]));
   
    return (isNaN(solution) || solution === Infinity) ? 'ERROR' : 
                Number.isInteger(solution) ? solution : solution.toFixed(2);
}

function checkIfMultipleDecimals(str) {
    let limit = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '.') {
            limit++;
        };
    }
    return limit > 1 ? true : false;   
}

function deletePrevInput(displayNode) {
    const input = displayNode.textContent;

    return (input[input.length - 1] == ' ') ? 
                input.slice(0, input.length - 2) :  // delete operator and white space
                input.slice(0, input.length - 1);   // delete digit
}
