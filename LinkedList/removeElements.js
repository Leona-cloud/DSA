


var removeElements = function(head, val) {

    if(head.next === null && head.val === val) return null

    let prev = head

    while(head.next !== null){
        if(prev.val === val){
            prev = prev.next
        }else if(head.next.val === val){
            head.next = head.next.next
        }else{
            head = head.next
        }
    }

    return prev

}