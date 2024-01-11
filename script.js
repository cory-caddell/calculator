let reset = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayUserSelection(button.textContent, reset)
        
        reset = (button.textContent === '=' || button.textContent == 'ERROR') ? true : false;    //display reset upon next calc input
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
function displayUserSelection(text, reset) {
    const displayNode = document.querySelector('p');

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
        case 'DEL':
            displayNode.textContent = deletePrevInput(displayNode);
            break;
        case 'AC':
            displayNode.textContent = "";
            break;
        case '=':
            displayNode.textContent = getSolution(getUserSelection());
            break;
        default:      
            displayNode.textContent += text;
    }
}

function getUserSelection() {
    const text = document.querySelector('p');
    return textArr = text.textContent.split(' ');
}

function getSolution (arr){
    let solution = (checkIfMultipleDecimals(arr[0]) || checkIfMultipleDecimals(arr[2])) ?
                        NaN : operate(parseFloat(arr[0]), arr[1], parseFloat(arr[2]));

    return (isNaN(solution) || solution === Infinity) ? 'ERROR' : solution;
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
                input.slice(0, input.length - 2) : 
                input.slice(0, input.length - 1);
}
