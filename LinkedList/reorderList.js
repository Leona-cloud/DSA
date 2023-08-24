


var reorderList = function(head) {

    let slowPointer = head;
    let fastPointer = head.next;


    while( fastPointer  !== null && fastPointer.next !== null){

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next.next

    };

    let second = slowPointer.next;
    slowPointer.next = null;
    let prev = null;

    while (second !== null){
        let tmp = second.next;
        second.next = prev;
        prev = second;
        second = tmp
    };

    //merge the two lists
    let first = head;
    second = prev;

    while(second !== null){

        let tmp1 = first.next;
        let tmp2 = second.next;
        first.next = second;
        second.next = tmp1;
        first = tmp1;
        second = tmp2

    }

    
};