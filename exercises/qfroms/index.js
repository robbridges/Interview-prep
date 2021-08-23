// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.first = new Stack();
    this.second = new Stack();
  }

  add(record) {
    this.first.push(record);
  }

  // our remove method needs to iterate through the array (without using easy array methods) and remove the first object in the array, adding it to the second que
  remove() {
    while (this.first.peek()) {
      
      this.second.push(this.first.pop());

    }
    // get the last record of the second stack, but we aren't ready to return it yet, so we don't call pop, just make a reference to it. We need to add the remaining items back into the first stack

    const record = this.second.pop();
    while (this.second.peek()) {
      this.first.push(this.second.peek());
    }

    return record;
  }
  // almost identical to removing the value, we are moving all values from the first queue to the second, peeking at the second que, then moving everything back before
  // returning the peek record.
  peek() {
    while (this.first.peek()) {
      this.second.push(this.first.pop());
    }
    //again do not return yet, we need to rebuild the first que.
    const record = this.second.peek();
    while (this.second.peek()) {
      this.first.push(this.second.pop());
    }
    return record;
  }

}

module.exports = Queue;
