// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);

        if( !this.length ){
            this.tail = newNode;
            this.head = newNode;
        } else {
            let prevTail = this.tail;
            this.tail = newNode;
            prevTail.next = this.tail;
        }

        this.length += 1
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
       let deleted = this.tail;
        if ( !this.length ){
            return;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let almostLast = this.head;
            while (almostLast.next.next ) {
                almostLast = almostLast.next
            }
            this.tail = almostLast;
            almostLast.next = null;
        }
        this.length -= 1;
        return deleted;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
       let newHead = new Node(val);
       if (!this.length) {
           this.head = newHead;
           this.tail = newHead;
       } else {
           newHead.next = this.head;
           this.head = newHead;   
        }
        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        let deleted = this.head;

        if (!this.length) {
            return ;
        } else if (this.length === 1) {
            this.head = null;
            this.tail = null;

        } else {
            let nextHead = this.head.next;
            this.head = nextHead;
        }
        this.length -= 1;
        return deleted;
    }

    // TODO: Implement the contains method here
    contains(target) {
       let node = this.head; 
       while (node) {
           if (node.value === target) {
               return true;
           }
           node = node.next
       }
       return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (index >= this.length) {
            return null;
        }
       let node = this.head
       let count = 0; 
       while (count < index
        ) {
           node = node.next;
           count += 1;           
       }
       return node;
    }

    // TODO: Implement the set method here
    set(index, val) {
        let node = this.get(index);
        if (!node) return false;
        node.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        //  impossible index
        if (index >= this.length) return false;    
        
        let prevNode = this.get(index - 1);
        let currNode = this.get(index);
        let newNode = new Node(val);

        prevNode.next = newNode;
        newNode.next = currNode;

        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (index >= this.length) return ;

        let prevNode = this.get(index - 1);
        let target = this.get(index);
        let nextNode = this.get(index + 1);
        prevNode.next = nextNode;
        this.length -= 1;
        return target;
    }

    // TODO: Implement the size method here
    size() {
       return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
