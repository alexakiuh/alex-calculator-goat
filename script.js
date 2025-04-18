let currentInput = ""; // Store the current input for calculations

// Append numbers to the input
function appendNumber(number) {
    currentInput += number; // Add the number to the current input
    document.getElementById("calculator-input").value = currentInput;
}

// Clear the input
function clearInput() {
    currentInput = ""; // Reset the current input
    document.getElementById("calculator-input").value = currentInput;
}

// Append operators (+, -, *, /) to the input
function appendOperator(operator) {
    currentInput += operator; // Add the operator to the current input
    document.getElementById("calculator-input").value = currentInput;
}

// Calculate the result
function calculateResult() {
    try {
        currentInput = eval(currentInput); // Calculate the result

        // If the result is a number, convert to an integer to avoid issues with decimal points like 1000000.0
        if (Number.isFinite(currentInput)) {
            currentInput = Math.floor(currentInput); // Round to the nearest integer
        }

        document.getElementById("calculator-input").value = currentInput;

   
