//  Creating Node like this way.
class Node {
    constructor(val) {
        this.val=val;
        this.next=null
    }
}

// THIS is not good way to create Node. if we will create like this we have to write next.next.next lot of time.
// Please see below examle

// var Node1=new Node(3)
// Node1.next=new Node(5)
// Node1.next.next=new Node(6)
// Node1.next.next.next=new Node(7)
// console.log(Node1.next.next)

// Class Singly linked List=====================
class SinglyLinkedList {
    constructor() {
        this.head=null
        this.tail=null
        this.length=0
    }
    insertNode(val) {
        var newNode = new Node(val)  
        if(!this.head) {
        
          this.head = newNode
          this.tail = this.head
        }else{
            this.tail.next=newNode
            this.tail=newNode
        }
        this.length++
        return newNode

    }
}


var list = new SinglyLinkedList()
console.log("List after creting list object=====",list)
list.insertNode("Hello")
console.log("List after inserting first node=====",list)
list.insertNode("Hey")
console.log("List after inserting second node=====",list)
list.insertNode("Hi")
console.log("listttttt=====",list)