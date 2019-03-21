// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(value){
        this.value=value;
        this.next=null;
    }
}

class Stack {   
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(value){
        if(!this.top){
            this.top = new Node(value)
            this.bottom = this.top
        } else if(this.top === this.bottom){
            this.top = new Node(value)
            this.top.next = this.bottom
        } else{
            let newNode = new Node(value);
            newNode.next = this.top;
            this.top = newNode
        }
        return ++this.length
    }

    pop(){
        if(!this.length) return null;  
 
        if(this.length === 1){
            let popVal = this.top.value;
            this.top = null;
            this.bottom = null;
            this.length--;
            return popVal;
        } else {
            let popVal = this.top.value;
            this.top = this.top.next;
            this.length--;
            return popVal;
        }
    }

    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.Stack = Stack;
