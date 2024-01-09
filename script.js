let reset = false;

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        displayUserSelection(button.textContent, reset)
        
        reset = (button.textContent === '=') ? true : false;    //display reset upon next calc input
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
            displayNode.textContent += ' ' + text + ' ';
            break;
        case 'AC':
            displayNode.textContent = "";
            break;
        default:
            displayNode.textContent += text;

            if(getUserSelection().length == 3) {
                displayNode.textContent = getSolution(getUserSelection());
            }
    }

}

function getUserSelection(input) {
    const text = document.querySelector('p');
    return textArr = text.textContent.split(' ');
}

function getSolution (arr){
    const solution = operate(parseInt(arr[0]), arr[1], parseInt(arr[2]));

    return (isNaN(solution) || solution === Infinity) ? 'ERROR' : solution;
  
}
