var removeOuterParentheses = function(s) {

    let outputString = "";
    let count = 0;

    //"(()())(())"

    for(str of s){
        if(str == "("){
            if(count > 0){
                outputString += "("
            }
            count++
        }else if(str == ")"){
             count --
             if(count > 0){
                 outputString += ")"
             }
        }
    }

    return outputString
};

const s = "(()())(())"

console.log(removeOuterParentheses(s))