var evalRPN = function(tokens) {

    const polishStack = [];
    const operators = {
        '+': (num1, num2) => num1 + num2,
        '-': (num1, num2) => num1 - num2,
        '*': (num1, num2) => num1 * num2,
        '/': (num1, num2) => Math.trunc(num1 / num2),
    };

    for (let token of tokens) {
        if(operators[token]){
            let num2 = polishStack.pop();
            let num1 = polishStack.pop();

            polishStack.push(operators[token](num1, num2))
        }else{
            polishStack.push(parseInt(token))
        }
    };

    return polishStack.pop()
    
};


const tokens = ["4","13","5","/","+"]

console.log(evalRPN(tokens))