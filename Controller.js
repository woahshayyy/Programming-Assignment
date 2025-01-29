const readlineSync = require("readline-sync");
const model = require("./model");
const view = require("./view");

function startApp() {
    view.showMessage("Enter numbers (or 'q' to quit):");

    while (true) {
        let input = readlineSync.question("Enter a number: ");

        if (input.toLowerCase() === "q") {
            break;
        }

        let num = parseInt(input);
        if (isNaN(num)) {
            view.showMessage("Invalid input! Please enter a valid number.");
        } else {
            model.addNumber(num);
        }
    }

    // Display entered numbers
    view.showNumbers(model.numbers);

    // Check condition only if at least 3 numbers are entered
    if (model.numbers.length < 3) {
        view.showMessage("Not enough numbers to check.");
    } else {
        view.showMessage(model.checkCondition());
    }
}

// Run the application
startApp();
