// You are given two non-empty linked lists representing two non-negative integers. 
//The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 



var addTwoNumbers = function(l1, l2) {

    let previousNode = new ListNode()
    let carry = 0
    const headNode = previousNode;
    while(l1 || l2 || carry){
        let val1 = 0; // handle null edge case
        let val2 = 0
        if(l1){
            val1 = l1.val
            l1 = l1.next
        }
        if(l2){
            val2 = l2.val
            l2 = l2.next
        }
        let sum = val1 + val2 + carry // handle carry edge case
        carry = Math.floor(sum / 10)
        digit = sum % 10 // store the unit
        let currentNode = new ListNode(digit)
        previousNode.next = currentNode;
        previousNode = currentNode
    }

    return headNode.next
    
};

//Time complexity is linear && space complexity is also linear(creating a new linked list to save result)
//O(max(l1, l2))


var addTwoNumbers = function(l1, l2) {

    const newDummy = new ListNode();
    let carry = 0;
    let newHead = newDummy;

    while(l1 || l2 || carry){
        let val1 = 0;
        let val2 = 0;
        if(l1){
            val1 = l1.val
            l1 = l1.next
        }if(val2){
            val2 = l2.val;
            l2 = l2.next
        };

        let sum = val1 + val2 + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        //create new node
        const currentNode = new ListNode(digit);
        newDummy.next = currentNode;
        newDummy = currentNode

    };

    newHead.next

}