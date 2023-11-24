

// Given an encoded string, return its decoded string.

// The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

// You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

// The test cases are generated so that the length of the output will never exceed 105.


var decodeString = function(s) {

    // s = "3[a]2[bc]"

    const numberStack = []
    const stringStack = [];

    for(let i = 0; i < s.length; i++){
        if(!isNaN(parseInt(s[i]))){
            let num = ' '
            while(!isNaN(parseInt(s[i]))){
                num += s[i];
                i++
            }
            numberStack.push(parseInt(num))
            i--
        }else if(s[i] !== ']'){
            stringStack.push(s[i])
        }else{
            let newString = ''
            while(stringStack[stringStack.length -1] !== '['){
                newString = stringStack.pop() + newString
            }

            stringStack.pop()
            const count = numberStack.pop()
            const repeatedString = newString.repeat(count)
            stringStack.push(repeatedString)
            
        }
    };

    return stringStack.join('')
}



// time complexity = O(n)
// space = O(n)