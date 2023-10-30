let displayValue = "";

function appendToDisplay(value) {
    // Handle the scientific functions
    if (value === 'sin' || value === 'cos' || value === 'tan' || value === 'log' || value === 'sqrt') {
        displayValue += value + '(';
    } else {
        displayValue += value;
    }
    document.getElementById("display").value = displayValue;
}

function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = displayValue;
}
function backspace() {
    displayValue = displayValue.slice(0, -1); // Remove the last character
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        // Replace 'log' with 'log10' and 'sqrt' with 'sqrt' if necessary
        displayValue = displayValue.replace(/log\(/g, 'log10(');
        displayValue = displayValue.replace(/sqrt\(/g, 'sqrt(');

        const result = math.evaluate(displayValue);
        displayValue = result.toString();
        document.getElementById("display").value = displayValue;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
