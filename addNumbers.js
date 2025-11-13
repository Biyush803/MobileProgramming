const calculate = () => {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation").value;
    let result;

    if (operation === "add") {
        result = num1 + num2;
    } else if (operation === "subtract") {
        result = num1 - num2;
    } else if (operation === "multiply") {
        result = num1 * num2;
    } else if (operation === "divide") {
        if (num2 === 0) {
            document.getElementById("result").innerText = "Error: Cannot divide by zero!";
            return;
        }
        result = num1 / num2;
    } else {
        document.getElementById("result").innerText = "Invalid operation!";
        return;
    }

    document.getElementById("result").innerText = "Result: " + result;
};
