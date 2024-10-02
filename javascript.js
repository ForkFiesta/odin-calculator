const numbersContainer = document.querySelector(".numbers-buttons");
const operators = ["+", "-", "/", "*"];
const equals = "=";
const allowedValues = [];
let num1 = "";
let num2 = "";
let opp;
let solution;
function createNumbers() {
    for (let i = 1; i < 10; i++) {
        const num = document.createElement("button");
        num.innerHTML = i;
        numbersContainer.appendChild(num);
        allowedValues.push(i.toString());
    }
    const num = document.createElement("button"); // creating number 0;
    num.innerHTML = 0;
    numbersContainer.appendChild(num);
    allowedValues.push("0");

    const clear = document.createElement("button");
    clear.innerHTML = "CLEAR";
    clear.classList.add("clearButton");
    numbersContainer.append(clear)
}


createNumbers();


const display = document.querySelector(".display");
const numberDisplay = document.createElement("div");
numberDisplay.classList.add("displayNumbers");


const buttons = document.querySelectorAll("button");
// console.log(buttons);

function eventHandler(event) {
    event.key = this.innerHTML;

    if (event.key == "CLEAR")
        {
            num1="";
            num2="";
            opp=undefined;
            solution=undefined;
            numberDisplay.innerHTML = num1;
            display.appendChild(numberDisplay);

        }

    let input = event.key.toString();

    if (allowedValues.includes(input) && opp == undefined) {
        console.log();
        num1 = num1 + input;
        numberDisplay.innerHTML = num1;
        display.appendChild(numberDisplay);
    } else if (operators.includes(input)) {
        opp = input;
        numberDisplay.innerHTML = opp;
        display.appendChild(numberDisplay);
    } else if (opp != undefined && allowedValues.includes(input)) {
        num2 = num2 + input;
        numberDisplay.innerHTML = num2;
        display.appendChild(numberDisplay);
    } else if (
        num1.length > 0 &&
        num2.length > 0 &&
        opp != undefined &&
        input == equals
    ) {

        solution = stringToOperator(Number(num1), Number(num2), opp);
        num1 = solution.toString();
        numberDisplay.innerHTML = num1;
        display.appendChild(numberDisplay);
        num2 = "";
        opp = undefined;
        input = undefined;
    };
    console.log(
        `Event Key: ${event.key}\nInput: ${input}\nNumber1: ${num1}\nNumber2: ${num2}\nOperator:${opp}\nSolution: ${solution}`
    );

    function stringToOperator(a, b, stringOperation) {
        switch (stringOperation) {
            case "+":
                return a + b;
            case "-":
                return a - b;
            case "/":
                return (a / b).toFixed(2);
            case "*":
                return a * b;
        }
    }

    //   console.log(
    //     `Event: ${event} \n Event.Key: ${event.key} \n Event.innerHtml ${event.innerHTML}`
    //   );

    //   console.log(num1.length);

    // if(!operators.includes(event.key) && opp == null && !isNaN(event.key)) {
    //     num1 = num1 + event.key;
    //   }
    //   else if (operators.includes(event.key) && opp == null)
    //     {
    //         opp = event.key;
    //     } else if (opp !== null)
    //         {
    //             num2 = num2 + event.key;
    //         }

    //   if (num1.length == 0 && isNaN(event.key) || (num1.length>0 && !operators.includes(event.key)))
    //     {

    //         Error("Not a valid entry");

    //     }
    //     else if (!isNaN(event.key)) {
    //         num1.concat(event.key.toString());
    //     }
    //     else{
    //         opp = event.key;
    //     }

    // console.log(`isNaN ${isNaN(event.key)}\nEventKey ${event.key}\n Type:${typeof(event.key)}\n Number1: ${num1}\nOperator: ${opp}\n Number 2: ${num2}`);

    //   if (isNaN(event.key) && !operators.includes(event.key)) {
    //     console.log("Not a valid figure");
    //   } else {
    //     event.key = event.key.toString();
    //   }
    //   while (!operators.includes(event.key) && opp == "undefined") {
    //     num1.concat(event.key);
    //   }

    //   if (operators.includes(event.key)) {
    //     opp = event.key;
    //   }
    // else if(num1 == "undefined")
    //     {
    //         num1 = event.key;
    //     }
    //     else if (!isNaN(num1))
    //         {
    //             num2 = event.key;
    //         }
}

buttons.forEach((button) => {
    //   button.addEventListener("keydown", eventHandler);
    button.addEventListener("click", eventHandler);
});
// buttons.addEventListener("click", eventHandler);
