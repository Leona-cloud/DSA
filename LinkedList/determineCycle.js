
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




var detectCycle = function(head) {
    
    let slowPointer = head;
   let fastPointer = head;

   while( fastPointer  !== null && fastPointer.next !== null){
        slowPointer = slowPointer.next;
       fastPointer = fastPointer.next.next;
       if(slowPointer === fastPointer){
           let pts = head;
           while(pts !== slowPointer){
               pts = pts.next
               slowPointer = slowPointer.next
           }
           return pts
       }
   }
   return null
};