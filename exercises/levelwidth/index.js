// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  const arr = [root, 's'];
  const counters = [0];
  // make sure the array still exists with more than one away, this eliminated the infinite loop problem when we reach the end. 
  while (arr.length > 1) {
    // we need to get the first node out of the array that we set up
    const node = arr.shift();
    // if that node is 's' we push it to the counter array, and add 's' at the end again denoting a new level
    if (node === 's') {
      counters.push(0);
      arr.push('s');
    } else {
      // if not s we add it's children to the array
      arr.push(...node.children);
      // increase the value of the last place of counters by 1
      counters[counters.length - 1]++;
    }
  }

  return counters;
}

module.exports = levelWidth;
