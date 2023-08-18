
function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
    }



var mergeTwoLists = function(list1, list2) {

    let dummyNode = new ListNode(0);
    console.log(dummyNode)
    tail = dummyNode;

    while(list1 && list2){
        if (list1.val < list2.val){
            tail.next = list1;
            list1 = list1.next
        }else{
            tail.next = list2;
            list2 = list2.next
        };

        tail = tail.next
    };

    if (list1) {
        tail.next = list1;
    } else if (list2) {
        tail.next = list2;
    }


    return dummyNode.next

    
};


const list1 = [1,2,4]
const list2 = [1,3,4]

console.log(mergeTwoLists(list1, list2))