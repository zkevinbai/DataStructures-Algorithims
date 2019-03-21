// ============================================================================
// Implementation Exercise: Queue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Queue and all of its methods below!
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
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
    this.length = 0;
  }

  enqueue(value) {
    let newNode = new Node(value)
    if(!this.length) {
      this.front = newNode
      this.back = newNode
    } else {
      let oldBack = this.back
      this.back = newNode
      oldBack.next = this.back
    }
    
    return ++this.length
  }

  dequeue() {
    if(!this.length) return null;
    let oldFront = this.front

    if(this.length === 1) {
      this.front = null
      this.back = null
    } else {
      this.front = oldFront.next
    }
    
    this.length--
    return oldFront.value
  }

  size(){
      return this.length
  }

}

exports.Node = Node;
exports.Queue = Queue;