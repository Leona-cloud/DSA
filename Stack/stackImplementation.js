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
}


const s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length", s.peek());



//function to multiply base conversions
function baseMul(num, base){
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor(num /= base) 
    } while (num > 0);
    var converted = ""
    while(s.length() > 0){
        converted += s.pop()
    };

    return converted
};

var num = 32;
 var base = 2;

 var newNum = baseMul(num, base);
 console.log( num + " converted to base " + base + " is " + newNum);



 