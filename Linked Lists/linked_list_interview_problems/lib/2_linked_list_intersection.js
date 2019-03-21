// ============================================================================
// Interview Problem: Linked List Intersection
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Write a function linkedListIntersection that returns the node at which the 
// intersection of two linked lists begins, or null if there is no such 
// intersection.
//
// ---------- 
// Example 1:
// ----------
// 
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1,list2) should return D 
// as the node of intersection.
// 
//    A → B → C
//             ↘
//               D → E → F
//             ↗
//        X → Y
//
// ---------- 
// Example 2:
// ----------
//
// Given the following two linked lists, list1 and list2, 
// linkedListIntersection(list1, list2) should return null 
// as there is no point of intersection.
// 
//    A → B → C → D
//
//    X → Y → Z
// 
// -----------
// Let's code!
// -----------
// function linkedListIntersection(list1, list2) {
//   // TODO: Implement the hasCycle function!
//   let longer;
//   let shorter;
//   if (list1.length > list2.length) {
//     longer = list1;
//     shorter = list2;
//   } else {
//     longer = list2;
//     shorter = list1;
//   }
//   let longNode = longer.head; 
//   while (longNode) {
//    let shortNode = shorter.head;
//    while (shortNode) {
//      if (shortNode === longNode) {
//        return shortNode
//      }
//      shortNode = shortNode.next;
//    }
//    longNode = longNode.next
//   }
//   return null;
// }

function linkedListIntersection(list1, list2) {
  // TODO: Implement the hasCycle function!
  let longer;
  let shorter;
  if (list1.length > list2.length) {
    longer = list1;
    shorter = list2;
  } else {
    longer = list2;
    shorter = list1;
  }

  let object = {};

  let longNode = longer.head; 
  while (longNode) {
    // object[longNode.value] = true;
    object[JSON.stringify(longNode)] = true;
    longNode = longNode.next
  }

  let shortNode = shorter.head;
  while (shortNode) {
    // if (object[shortNode.value]) {
    if (object[JSON.stringify(shortNode)]) {
      return shortNode;
    }
    shortNode = shortNode.next;
  }

  return null;
}

// ----------------------------------------
// Given: Singly Linked List - Do Not Edit!
// ----------------------------------------
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  addToTail(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }

    this.tail = newNode;
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }
}

// --------------------------------------
// Helper For Testing Only - Do Not Edit!
// --------------------------------------
var stringify = function(list) {
  var result = [];
  while(list !== null) {
    result.push(list.value);
    list = list.next;
  }
  return result.join("");
}

exports.Node = Node;
exports.LinkedList = LinkedList;
exports.linkedListIntersection = linkedListIntersection;
exports.stringify = stringify;
