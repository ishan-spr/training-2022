interface INode<T> {
    value: T,
    next: null | INode<T>,
}

interface ILinkedList<T> {
    head: INode<T>
    size: Function
}

class LinkedNode<T> implements INode<T>{
    value: T;
    next: null | INode<any>
    constructor(value: T) {
        this.value = value;
        this.next = null
    }
};

class LinkedList<T> implements ILinkedList<T>{
    head: INode<T>
    constructor(node: INode<T>) {
        this.head = node
    }
    size() {
        let count = 0;
        let curr: INode<T> | null = this.head;
        while (curr !== null) {
            count++;
            curr = curr.next;
        }
        return count
    }
}

let l1 = new LinkedNode("Hello");
let l2 = new LinkedNode(2);
let l3 = new LinkedNode(true);
let l4 = new LinkedNode({ a: 56 });

l1.next = l2;
l2.next = l3;
l3.next = l4;

let curr: INode<number | any> | null = l1;
while (curr !== null) {
    console.log(curr.value);
    curr = curr.next;
}

let ll = new LinkedList(l1);
console.log("Size of Linked List : ", ll.size())