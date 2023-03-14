const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");


class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  // add digit to calculator screen
  addDigit(digit) {
    console.log(digit);
    // Check if number already has a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currentOperation = digit;
    this.updateScreen();
  }

  // process all calculator operations
  processOperation(operation) {
    // Check if current value is empty
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      // Change operation
      if (this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    // Get current and previous values
    let operationValue;
    let previous = +this.previousOperationText.innerText.split(" ")[0];
    let current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperator();
        break;
      case "C":
        this.processClearOperator();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }

  // Change values of calculator screen
  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      // Append number to current value
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      // Check if value is zero, if is just add current value
      if (previous === 0) {
        operationValue = current;
      }
      // Add current value to previous
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

  // Change math operation
  changeOperation(operation) {
    const mathOperations = ["*", "-", "+", "/"];

    if (!mathOperations.includes(operation)) {
      return;
    }

    this.previousOperationText.innerText =
      this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  // Delete a digit
  processDelOperator() {
    this.currentOperationText.innerText =
      this.currentOperationText.innerText.slice(0, -1);
  }

  // Clear current operation
  processClearCurrentOperator() {
    this.currentOperationText.innerText = "";
  }

  // Clear all operations
  processClearOperator() {
    this.currentOperationText.innerText = "";
    this.previousOperationText.innerText = "";
  }

  // Process an operation
  processEqualOperator() {
    let operation = this.previousOperationText.innerText.split(" ")[1];

    this.processOperation(operation);
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;

    if (+value >= 0 || value === ".") {
      console.log(value);
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});

document.addEventListener("keypress", function(event) {
  if (event.key === "+") {
  event.preventDefault();
  document.getElementById("btnMais").click();
  }
  else if (event.key === "-") {
      event.preventDefault();
      document.getElementById("btnMenos").click();
  }
  else if (event.key === "*") {
      event.preventDefault();
      document.getElementById("btnMult").click();
  }
  else if (event.key === "/") {
      event.preventDefault();
      document.getElementById("btnDiv").click();
  }
  else if (event.key === "7") {
    event.preventDefault();
    document.getElementById("7").click();
  }
  else if (event.key === "8") {
    event.preventDefault();
    document.getElementById("8").click();
  }
  else if (event.key === "9") {
    event.preventDefault();
    document.getElementById("9").click();
  }
  else if (event.key === "4") {
    event.preventDefault();
    document.getElementById("4").click();
  }
  else if (event.key === "5") {
    event.preventDefault();
    document.getElementById("5").click();
  }
  else if (event.key === "6") {
    event.preventDefault();
    document.getElementById("6").click();
  }
  else if (event.key === "1") {
    event.preventDefault();
    document.getElementById("1").click();
  }
  else if (event.key === "2") {
    event.preventDefault();
    document.getElementById("2").click();
  }
  else if (event.key === "3") {
    event.preventDefault();
    document.getElementById("3").click();
  }
  else if (event.key === "0") {
    event.preventDefault();
    document.getElementById("zero").click();
  }
  else if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("equal-btn").click();
  }
  else if (event.key === ",") {
    event.preventDefault();
    document.getElementById("virgula").click();
  }
});