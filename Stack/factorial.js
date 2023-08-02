function Stack() {

    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;

};

function push(element) {
    this.dataStore[this.top++] = element
};

function pop() {
    return this.dataStore[--this.top]
}

function clear() {
    this.top = 0;
}

function length() {
    return this.top;
}

function peek() {
    return this.dataStore[this.top - 1];
};


function factorial(num){
    let s = new Stack();
    while(num>1){
        s.push(num--)
    };
    var product = 1
    while(s.length() > 0){
        product *= s.pop()
    };

    return product
};

console.log(factorial(4))
console.log(factorial(5))