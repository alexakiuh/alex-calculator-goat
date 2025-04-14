let currentInput = ""; // Store the current input for calculations

// Append the clicked number to the input
function appendNumber(number) {
    currentInput += number; // Append number to input
    document.getElementById("calculator-input").value = currentInput; // Update display
}

// Clear the input
function clearInput() {
    currentInput = ""; // Reset input
    document.getElementById("calculator-input").value = ""; // Clear display
}

// Append an operator (+, -, *, /)
function appendOperator(operator) {
    // Prevent appending an operator if the last character is already an operator
    if (currentInput.length > 0 && !isNaN(currentInput[currentInput.length - 1])) {
        currentInput += operator; // Add operator if it's a valid place
        document.getElementById("calculator-input").value = currentInput; // Update display
    }
}

// Calculate the result
function calculateResult() {
    try {
        // Check for multiple consecutive operators or invalid input
        if (/[\+\-\*\/]{2,}/.test(currentInput) || /[^0-9\+\-\*\/]/.test(currentInput)) {
            throw new Error("Invalid input"); // If there's invalid input, throw error
        }

        // Evaluate the expression if it's valid
        currentInput = eval(currentInput);
        document.getElementById("calculator-input").value = currentInput;

        // Check if the result matches any of the special numbers
        showSpecialImage(currentInput);
    } catch (error) {
        document.getElementById("calculator-input").value = "Error"; // Display error if eval fails
    }
}

// Function to show special image based on result
function showSpecialImage(number) {
    // List of special numbers and corresponding images
    const specialNumbers = {
        "1000000": "image1.jpg", // Replace with actual image paths
        "69": "image2.jpg",
        "4": "image3.jpg",
        "6969": "image4.jpg",
        "420": "image5.jpg",
        "100": "image6.jpg"
    };

    // If the number matches one of the special numbers, show the corresponding image
    if (specialNumbers[number]) {
        let img = document.createElement("img");
        img.src = specialNumbers[number]; // Set the image source
        img.alt = "Special Image"; // Alt text for the image
        document.body.appendChild(img); // Add image to the body
    }
}
