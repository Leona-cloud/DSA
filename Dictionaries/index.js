function Dictionary(){
    this.dataStore = new Array()
    this.add = add
    this.remove = remove
    this.find = find
    this.showAll = showAll
}

function add(key, value){
    this.dataStore[key] = value
}

function find(key){
    return this.dataStore[key]
}

function remove(key){
    delete this.dataStore[key]
}

function showAll(){
    for(const key in Object.keys(this.dataStore).sort()){
        console.log(key + "->" + this.dataStore[key])
    }
}

// var pbook = new Dictionary();
// pbook.add("0","Mike");
// pbook.add("1", "David");
// pbook.add("Cynthia", "77");
// console.log("David's extension: " + pbook.find("David"));
// pbook.remove("David");
// pbook.showAll()