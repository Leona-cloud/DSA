
//Floyds tortise and hare algorithm
var hasCycle = function(head) {

    let slowPointer = head;
    let fastPointer = head;

    while( fastPointer  !== null && fastPointer.next !== null){
        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next;
        if(slowPointer === fastPointer){
            return true
        }
    }
    
    return false;
};