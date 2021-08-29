// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.insertAt(data, 0);
  }

  size() {
    let counter = 0;
    let node = this.head;
    
    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    // let node = this.head;
    // while(node) {
      
    //   if (node.next === null) {
    //     return node;
    //   }
    //   node = node.next;
    // }

    return this.getAt(this.size() -1);
    
  }
  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    let node = this.head;
    let nextNode = node.next;
    this.head = nextNode;
  }
  removeLast() {
    if (!this.head) {
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
    
    
  }

  insertLast(data) {
    const last = this.getLast();
    if(last) {
      //last exists
      last.next = new Node(data);
    } else {
      //chain is empty
      this.head = new Node(data);
    }
  }
  getAt(number) {
    let node = this.head;
    let counter = 0;

    while (node) {
      if (counter === number) {
        return node;
      }
      counter++
      node = node.next;
      
    }
    return null;
  }
  removeAt(index) {
    if (!this.head) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const previous = this.getAt(index -1);
    // we need to skip over the node we are "removing" so that the next function looks at the node we do not want to remove.
    if (!previous || !previous.next) {
      return;
    }
    previous.next = previous.next.next;
  }
  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }
    if (index === 0) {
      this.head = new Node(data, this.head);
      return;
    }
    /* we need to get the previous node as a refrence, using our getAt method is a great way to do this. We this set the new node to point at at previous next node, 
    then reassign that value */

    const previous = this.getAt(index - 1) || this.getLast();
    const node = new Node(data, previous.next);
    previous.next = node;
  }
  forEach(fn) {
    let node = this.head;

    while(node) {
      fn (node);
      node = node.next;
    }
    
  }
  // we need to create a generator function because we won't know the size of the list. We then start with the first node, and move to the next node, we are using
  // the generator yield fuction of that node (Basically doing whatever was called for the function) and then moving to the next node
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}

module.exports = { Node, LinkedList };
