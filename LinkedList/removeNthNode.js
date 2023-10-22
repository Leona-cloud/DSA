

// Given the head of a linked list, remove the nth node from the end of the list and return its head.

var removeNthFromEnd = function(head, n) {
    const dummyNode = new ListNode(0, head);
    let left = dummyNode;
    let right = head;

    // head = [1,2,3,4,5], n = 2

    // Advance the right pointer by n nodes
    for (let i = 0; i < n; i++) {
        if (!right) {
            return head; // There are not enough nodes, so nothing to remove
        }
        right = right.next;
    }

    // Move both left and right pointers until right reaches the end
    while (right !== null) {
        left = left.next;
        right = right.next;
    }

    // Remove the nth node by updating the next pointer of the left node
    left.next = left.next.next;

    return dummyNode.next;
};