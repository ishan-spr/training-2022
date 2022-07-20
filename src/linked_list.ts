interface INode {
    value: number,
    next: null | INode,
}

interface ILinkedList {
    head: INode
    size: Function
}

class LinkedNode implements INode {
    value: number;
    next: null | INode
    constructor(value: number) {
        this.value = value;
        this.next = null
    }
};

class LinkedList implements ILinkedList {
    head: INode
    constructor(node: INode) {
        this.head = node
    }
    size() {
        let count = 0;
        let curr: INode | null = this.head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count
    }
}

let l1 = new LinkedNode(1);
let l2 = new LinkedNode(2);
let l3 = new LinkedNode(3);
let l4 = new LinkedNode(4);

l1.next = l2;
l2.next = l3;
l3.next = l4;

let curr: INode | null = l1;
while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
}

const ll = new LinkedList(l1);
console.log("Size of Linked List : ", ll.size())