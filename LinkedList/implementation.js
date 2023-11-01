function Node(element) {
  this.element = element;
  this.next = null;
}

function LList() {
  this.head = new Node("head");
  this.find = find;
  this.insert = insert;
  this.display = display;
  this.remove = remove;
  this.findPrevious = findPrevious;
}

function find(item) {
  let currNode = this.head;
  while (currNode.element != item) {
    currNode = currNode.next;
  }
  return currNode;
}


function insert(newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
    };

    function display() {
        let currNode = this.head;
        while (!(currNode.next == null)) {
        console.log(currNode.next.element);
        currNode = currNode.next;
        }
        };

        function findPrevious(item) {
            let currNode = this.head;
            while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
            currNode = currNode.next;
            }
            return currNode;
            };


            function remove(item) {
                var prevNode = this.findPrevious(item);
                if (!(prevNode.next == null)) {
                prevNode.next = prevNode.next.next;
                }
                }



let cities = new LList();
 cities.insert("Conway", "head");
 cities.insert("Russellville", "Conway");
 cities.insert("Carlisle", "Russellville");
 cities.insert("Alma", "Carlisle");
cities.display()
 console.log();
 cities.remove("Carlisle");
 cities.display();




 function Node(element){
  this.element = element;
  this.next = null;
}

function MyHashSet(){
  this.head = new Node('head');
  this.contains = contains;
  this.add = add;
  this.remove = remove;

}

function contains(key){
  let currentNode = this.head
  while(currentNode.element !== null){
     if(currentNode === key){
         return true
     }else{
         return false
     }
  }
}

function add(key){
  if(!contains(key)){
      let newNode = new Node(key)
      let current = this.head
      while(current.next !== null){
          current = current.next
      }
      current = newNode
  }
}

function remove(key){
  let current = this.head;
  while(current.next !== null){
      if(current.next.element === key){
          current.next = current.next.next;
          return;
      }
      current = current.next
  }
}
