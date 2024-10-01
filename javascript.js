const numbersContainer = document.querySelector(".numbers-buttons");
const operators = ["+", "-", "/", "*"];
let num1 = "";
let num2 = "";
let opp;
function createNumbers() {
  for (let i = 1; i < 10; i++) {
    const num = document.createElement("button");
    num.innerHTML = i;
    numbersContainer.appendChild(num);
  }
  const num = document.createElement("button");
  num.innerHTML = 0;
  numbersContainer.appendChild(num);
}

createNumbers();

console.log(isNaN(num2));

const buttons = document.querySelectorAll("button");
// console.log(buttons);

function eventHandler(event) {

console.log(`Number 1: ${num1}\nNumber2: ${num2}\nOperator: ${opp}`);


  if (event instanceof MouseEvent) {
    event.key = this.innerHTML;
  }
  else if (event.key == 'Enter')
    {
        event.key == '=';
    };

    let input = event.key.toString();
    let isNumber = checkIfNumber(input);

    let isOperator = checkIfOperator(input);

    let isEquals = checkIfEquals(input);

    // let firstNumComplete = checkIfFirstNumComplete(input);

    let isOtherValue = (isNumber && isOperator && isEquals)


    if (num1.length < 1)
        {

            if (isOperator || isEquals)
                {
                    Error("Please Input a Number First");
                }
            else if (isOtherValue)
                {
                    Error("Please input a valid character.");
                }
                else if (isNumber)
                    {
                        num1 = num1 + input;
                    };
        }
    else if (num1.length > 0 && opp == null)
        {
            if (isNumber)
                {
                    num1 = num1 + input;
                }
            else if (isOperator)
                {
                    opp = input;
                }
                else if (isEquals){
                    Error("Please input an operator first");
                }
                else if (isOtherValue){
                    Error("Please input a valid character.");
                };
        }
        else if (num1.length > 0 && opp != null && num2.length == 0){
            if (!isNumber){
                Error("Input number");
            }
            else{
                num2=num2+input;
            };
            
        }
        else if (num1.length > 0 && opp != null && num2.length>0)
            {
                if (isNumber)
                    {
                        num2=num2+input;
                    }
                else if (isEquals)
                    {
                        solution = stringToOperator(num1, num2, opp);
                        console.log(`Answer: ${solution}`)

                    }
                    else{
                        Error("Not a valid entry;")
                    }
            }



function checkIfNumber(input)
{
    console.log(`Is a number: ${!isNaN(input)}`);
    return(!isNaN(input))

}

function checkIfOperator(input){
    operators.includes(input);
}

function checkIfEquals(input)
{
    if (input == '='){
        return true;
    }
    else {
        return false;
    }
}



function stringToOperator(a, b, stringOperation)
{
    switch(stringOperation){
        case "+":
            return (a+b);
        case "-":
            return (a-b);
        case "/":
            return (a/b);
        case "*":
            return (a*b);

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
  button.addEventListener("keydown", eventHandler);
  button.addEventListener("click", eventHandler);
});
// buttons.addEventListener("click", eventHandler);
