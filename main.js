let input = document.getElementById("input");

function writeNumber(number) {
    input.innerText += number;
}

document.getElementById("ac").addEventListener('click', () => {
    input.innerText = "";
});

document.getElementById("delete").addEventListener('click', () => {
    let inputLength = input.innerText.length;
    input.innerText = input.innerText.substring(0, inputLength - 1);
});

document.getElementById("asign").addEventListener('click', () => {
    if (input.innerText != "") {
        input.innerText = eval(input.innerText).toFixed(10);
    }
});

function addOperator(operator) {
    let inputLength = input.innerText.length;
    switch (input.innerText.charAt(inputLength - 1)) {
        case "+":
            input.innerText = input.innerText.substring(0, inputLength - 1) + operator;
            break;
        case "*":
            input.innerText = input.innerText.substring(0, inputLength - 1) + operator;
            break;
        case "/":
            input.innerText = input.innerText.substring(0, inputLength - 1) + operator;
            break;
        case "-":
            input.innerText = input.innerText.substring(0, inputLength - 1) + operator;
            break;
        case "":
            input.innerText = "";
            break;
        default:
            input.innerText += operator;
    }
}

document.getElementById("dot").addEventListener('click', () => {
    let inputLength = input.innerText.length;
    if (input.innerText.charAt(inputLength - 1) != ".") {
        input.innerText += ".";
    }
});