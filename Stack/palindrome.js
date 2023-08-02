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



function palindrome(word){

    var s = new Stack();
    for(let i=0; i<word.length; i++){
        s.push(word[i])
    };
    var repeated = ""
    while(s.length() > 0){
        repeated += s.pop()
    };
    if(word === repeated){
        return true
    }else{
        return false
    }

};


word = "dad"
 if (palindrome(word)) {
 console.log(word + " is a palindrome.");
 }
 else {
 console.log(word + " is not a palindrome.");
 }