let currentInput = '0';  // Display value
let firstOperand = null;  // Stores the first operand
let operator = null;  // Stores the operator
let isSecondOperand = false;  // Is the second operand being input

// Update the display
function updateDisplay() {
    const display = document.querySelector('#display');
    display.value = currentInput;
}

// Clear the display
function clearDisplay() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    isSecondOperand = false;
    updateDisplay();
}

// Delete the last character
function deleteLast() {
    currentInput = currentInput.slice(0, -1) || '0';
    updateDisplay();
}

// Append a digit to the display
function appendNumber(number) {
    if (isSecondOperand) {
        currentInput = number;
        isSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? number : currentInput + number;
    }
    updateDisplay();
}

// Append a decimal point
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
    updateDisplay();
}

// Handle operator input
function appendOperator(nextOperator) {
    if (firstOperand === null && !isNaN(currentInput)) {
        firstOperand = parseFloat(currentInput);
    } else if (operator) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        currentInput = `${parseFloat(result.toFixed(7))}`;
        firstOperand = result;
    }
    operator = nextOperator;
    isSecondOperand = true;
    updateDisplay();
}

// Perform the calculation
function calculate(firstOperand, secondOperand, operator) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

// Perform the calculation when equals is pressed
function calculateResult() {
    if (operator && firstOperand !== null) {
        const result = calculate(firstOperand, parseFloat(currentInput), operator);
        currentInput = `${parseFloat(result.toFixed(7))}`;
        firstOperand = null;
        operator = null;
        isSecondOperand = false;
        updateDisplay();
    }
}

// Calculate percentage
function calculatePercentage() {
    currentInput = `${parseFloat(currentInput) / 100}`;
    updateDisplay();
}

// Calculate square root
function squareRoot() {
    currentInput = `${Math.sqrt(parseFloat(currentInput))}`;
    updateDisplay();
}

// Calculate square
function square() {
    currentInput = `${parseFloat(currentInput) ** 2}`;
    updateDisplay();
}

// Calculate reciprocal
function reciprocal() {
    currentInput = `${1 / parseFloat(currentInput)}`;
    updateDisplay();
}
