
const displayNode = document.querySelector('#display');
let reset = false;  // reset to blank display

// get user input from buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayUserSelection(button.textContent, reset);
        reset = (button.textContent === '=' || displayNode.textContent == 'ERROR') ? true : false;    //display reset upon next calc input
    });
});

// get user input from keyboard
document.addEventListener('keypress', (e) => {
    displayUserSelection(e.key.toString(), reset);
    reset = (e.key.toString() == 'Enter') || (displayNode.textContent == 'ERROR') ? true : false;    //display reset upon next calc input
});

/**
 * function to display user input and results
 */
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

            // only operating on two numbers at a time
            if(getUserSelection().length > 3) {
                let solution = getSolution(getUserSelection());
                displayNode.textContent = 
                    solution == 'ERROR' ? solution : solution + operator;
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
            if(displayNode.textContent != '') {
                displayNode.textContent = getSolution(getUserSelection());
            }
            break;
        case '0':
        case '1':     
        case '2':      
        case '3':      
        case '4':      
        case '5':      
        case '6':      
        case '7':      
        case '8':      
        case '9':            
            displayNode.textContent += text;
            if(displayNode.textContent.length > 12) {
                displayNode.textContent = 'ERROR';
            }
            break;
        default:
            displayNode.textContent = 'ERROR';
    }
}

/**
 * Helper function for getSolution function
 */
function getUserSelection() {
    const text = document.querySelector('#display');
    return textArr = text.textContent.split(' ');
}

/**
 * Function to operate on user input
 */
function getSolution (arr){
    let solution = (checkIfMultipleDecimals(arr[0]) || checkIfMultipleDecimals(arr[2])) ? NaN : operate(parseFloat(arr[0]), arr[1], parseFloat(arr[2]));
   
    return (isNaN(solution) || solution === Infinity) ? 'ERROR' : 
                Number.isInteger(solution) ? solution : solution.toFixed(2);
}

/**
 * Function to ensure only one decimal exists in number.
 */
function checkIfMultipleDecimals(str) {
    let limit = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] == '.') {
            limit++;
        };
    }
    return limit > 1 ? true : false;   
}

/**
 * Delete most recent character addition
 */
function deletePrevInput(displayNode) {
    const input = displayNode.textContent;

    return (input[input.length - 1] == ' ') ? 
                input.slice(0, input.length - 2) :  // delete operator and white space
                input.slice(0, input.length - 1);   // delete digit
}

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