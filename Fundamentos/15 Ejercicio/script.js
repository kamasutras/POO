let currentInput = "";
let operations = [];
let display = document.getElementById("pantalla");

function updateDisplay(value) {
    display.textContent = value;
}

function appendNumber(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function handleOperator(operator) {
    if (currentInput === "") return;

    operations.push(parseFloat(currentInput));
    operations.push(operator);
    currentInput = "";
}

function calculate() {
    if (currentInput !== "") {
        operations.push(parseFloat(currentInput));
    }

    let result = operations[0];

    for (let i = 1; i < operations.length; i += 2) {
        let operator = operations[i];
        let nextNumber = operations[i + 1];

        if (operator === "+") {
            result += nextNumber;
        } else if (operator === "-") {
            result -= nextNumber;
        } else if (operator === "*") {
            result *= nextNumber;
        } else if (operator === "/") {
            result /= nextNumber;
        }
    }

    updateDisplay(result);
    operations = [];
    currentInput = result.toString();
}

function clearCalculator() {
    currentInput = "";
    operations = [];
    updateDisplay(0);
}

document.getElementById("borrar").addEventListener("click", clearCalculator);