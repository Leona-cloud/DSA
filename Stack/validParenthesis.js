// Given a string s containing just the characters '
//(', ')', '{', '}', '[' and ']',
//determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

function Stack() {
  this.dataStore = [];
  this.top = 0;
  this.push = push;
  this.pop = pop;
  this.peek = peek;
  this.clear = clear;
  this.length = length;
}

function push(element) {
  this.dataStore[this.top++] = element;
}

function pop() {
  return this.dataStore[--this.top];
}

function clear() {
  this.top = 0;
}

function length() {
  return this.top;
}

function peek() {
  return this.dataStore[this.top - 1];
}

function validP(string) {
  const s = new Stack();

  let currChar;

  // ()[]{}

  for (let i = 0; i <= string.length; i++) {
    currChar = string[i];
    switch (currChar) {
      case "(":
        s.push("(");
        break;
      case "{":
        s.push("{");
        break;
      case "[":
        s.push("[");
        break;
      case ")":
        if (s.peek() === "(") {
          s.pop();
        } else {
          return false;
        }
        break;
      case "}":
        if (s.peek() === "{") {
          s.pop();
        } else {
          return false;
        }
        break;
      case "]":
        if (s.peek() === "[") {
          s.pop();
        } else {
          return false;
        }
        break;
    }
  }

  console.log(s.length(), "p");
  return s.length() === 0;
}

const string = "(]";
var newS = validP(string);
console.log(newS);
