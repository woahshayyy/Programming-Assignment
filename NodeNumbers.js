const readlineSync = require('readline-sync');

let numbers = [];

console.log("Enter numbers one by one. Type 'q' to quit.");

while (true) {
    let input = readlineSync.question("Enter a number: ").trim();

    if (input.toLowerCase() === 'q') {
        break; // Exit loop when user enters 'q'
    }

    if (input === '') {
        console.log("Input cannot be empty. Please enter a number.");
        continue;
    }

    let num = parseFloat(input);
    if (!isNaN(num)) {
        numbers.push(num);
    } else {
        console.log("Invalid input. Enter a valid number.");
    }
}

function calculateResults() {
    if (numbers.length === 0) {
        console.log("No numbers were entered.");
        return;
    }

    // Calculate mean (average)
    let sum = numbers.reduce((total, num) => total + num, 0);
    let mean = sum / numbers.length;

    // Calculate median
    numbers.sort((a, b) => a - b);
    let mid = Math.floor(numbers.length / 2);
    let median = (numbers.length % 2 === 0) 
        ? (numbers[mid - 1] + numbers[mid]) / 2 
        : numbers[mid];

    // Display results
    console.log("\nNumbers entered: ", numbers.join(", "));
    console.log("Mean (Average):", mean.toFixed(2));
    console.log("Median:", median);
}

// Call the function to display results
calculateResults();
