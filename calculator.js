let display = document.getElementById('display');
let currentInput = '';
let operation = null;
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    display.textContent = currentInput;
}

function setOperation(op) {
    if (currentInput === '') return;
    if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
    } else {
        firstOperand = calculate(firstOperand, parseFloat(currentInput), operation);
    }
    operation = op;
    currentInput = '';
    display.textContent = '';
}

function calculateResult() {
    if (operation === null || currentInput === '') return;
    const secondOperand = parseFloat(currentInput);
    const result = calculate(firstOperand, secondOperand, operation);
    display.textContent = result;
    currentInput = result;
    operation = null;
    firstOperand = null;
}

function clearDisplay() {
    display.textContent = '';
    currentInput = '';
    operation = null;
    firstOperand = null;
}

function calculate(a, b, op) {
    switch (op) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return b;
    }
}
