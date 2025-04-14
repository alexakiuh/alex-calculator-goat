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

        // Show the corresponding special image if it's a match
        showSpecialImage(currentInput);
    } catch (error) {
        document.getElementById("calculator-input").value = "Error"; // Handle any errors
    }
}

// Show the corresponding special image based on the result
function showSpecialImage(result) {
    let imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML = ''; // Clear any previous images

    // Define the special numbers and their corresponding images
    const specialNumbers = {
        "1000000": "images/image1.jpg", // 1st special image
        "69": "images/image2.jpg",     // 2nd special image
        "4": "images/image3.jpg",      // 3rd special image
        "6969": "images/image4.jpg",   // 4th special image
        "420": "images/image5.jpg",    // 5th special image
        "100": "images/image6.jpg"     // 6th special image
    };

    // Convert result to string for comparison
    result = result.toString();

    // If the result matches a special number, show the corresponding image
    if (specialNumbers[result]) {
        let img = document.createElement("img");
        img.src = specialNumbers[result]; // Set the image source
        img.alt = "Special Image";         // Add an alt description
        imageContainer.appendChild(img);   // Add the image to the page
    }
}
