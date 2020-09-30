// * 4 Searching in a BST

const BinarySearchTree = require('./BST');

const preOrderArr = [35, 25, 15, 14, 19, 27, 89, 79, 91, 90];
const postOrderArr = [14, 15, 19, 25, 27, 35, 79, 89, 90, 91];

//? 1. What is post-order traversal?
// Create empty Binary Search Tree
const searchTreePostOrder = new BinarySearchTree();
// Populate Binary Search Tree with the pre-order Array
for (let i = 0; i < postOrderArr.length; i++) {
  searchTreePostOrder.insert(postOrderArr[i]);
}

console.log(searchTreePostOrder.dfsPreOrder());
console.log(searchTreePostOrder.dfsInOrder());
console.log(searchTreePostOrder.dfsPostOrder());

console.log('--------------');
//? 2. What is pre-order traversal?
// Create empty Binary Search Tree
const searchTreePreOrder = new BinarySearchTree();
// Populate Binary Search Tree with the pre-order Array
for (let i = 0; i < preOrderArr.length; i++) {
  searchTreePreOrder.insert(preOrderArr[i]);
}

// console.log(searchTree);

console.log(searchTreePreOrder.dfsPreOrder());
console.log(searchTreePreOrder.dfsInOrder());
console.log(searchTreePreOrder.dfsPostOrder());
