
var reverseList = function(head) {

    //  let prev = null;
    

    //  while(head !== null){
    //     let nextNode = head.next
    //     head.next = prev;
    //     prev = head;
    //     head = nextNode;
    //  };

    //  return prev
    
    let prev = null;
    
    while (head !== null) {
        [head.next, prev, head] = [prev, head, head.next];
    }

    return prev;

};



const head = [1,2,3,4,5];
console.log(reverseList(head))