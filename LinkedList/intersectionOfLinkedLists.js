// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// For example, the following two linked lists begin to intersect at node c1:





var getIntersectionNode = function(headA, headB) {

    const map = new Set();
 
    while(headA){
        map.add(headA)
        headA = headA.next
    }
    while(headB){
        if(map.has(headB)) return headB;
        headB = headB.next
    }
 
    return null
 };