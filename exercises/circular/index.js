// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

function circular(list) {
  let slow = head;
  let fast = head;

  while(fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

const hasCycle = head => {
  let p1 = head
  let p2 = head
  
  while (p2 && p2.next && p2.next.next) {
      p1 = p1.next
      p2 = p2.next.next
      
      if (p1 === p2) {
          return true
      }
  }
  
  return false
}

module.exports = circular;
