// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  // we are checking if the current node contains a left and right node, and if the data is less or greater than the data that is already the left or right
  insert(data) {
    if (data < this.data && this.left) {
      // we are passing the insert method off to the nearest node, since there is already a left node
      this.left.insert(data);
    } else if (data < this.data) {
      // we are simply changing the left data from null to the node data/key, since hte node does not have a left child
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      // we are passing the insert method off to the nearest node, since there is already a left node
      this.right.insert(data);
    } else if (data > this.data) {
       // we are simply changing the left data from null to the node data/key, since hte node does not have a left child
      this.right = new Node(data);
    }
  }

  contains(data) {
    // if the current node is the one we are looking for return it
    if (this.data === data) {
      return this;
    }
    // if the node that we are looking for is bigger than the current node, and has a child, we pass the search onto the right child (the bigger one)
    if (this.data < data && this.right) {
      return this.right.contains(data);
    // same as above except we traverse down the left side if this.data is smaller than the current node we ignore half of the tree based on if the node is smaller or bigger than the current
    // nodes value  
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    // if we have checked every null on the corrent side of the side, and still no results, we return null the tree does not contain the data we are looking for.
    return null;
  }
}

module.exports = Node;
