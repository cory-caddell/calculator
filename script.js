
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayUserSelection(button.textContent);
    })
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
function displayUserSelection(text) {
    const display = document.querySelector('p');
    
    switch(text) {
        case '+':
        case '-':
        case '*':
        case '/':
            display.textContent += " " + text + " ";
            break;
        case 'AC':
            display.textContent = "";
            break;
        case '=':
            display.textContent = getSolution(getUserSelection());
            break;
        default:
            display.textContent += text;
    }
}

function getUserSelection() {
    const text = document.querySelector('p');
    return textArr = text.textContent.split(' ');
}

function getSolution (arr){

    let solution;
    while (arr.length > 1) {
        solution = operate(parseInt(arr[0]), arr[1], parseInt(arr[2]));
        arr.splice(0, 3, solution);
    }
    return solution;
}
