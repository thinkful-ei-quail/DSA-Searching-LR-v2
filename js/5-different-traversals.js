const BinarySearchTree = require('./BST');

const dataSetArray = [
  25,
  15,
  50,
  10,
  24,
  35,
  70,
  4,
  12,
  18,
  31,
  44,
  66,
  90,
  22,
];

const BST = new BinarySearchTree();
for (let i = 0; i < dataSetArray.length; i++) {
  BST.insert(dataSetArray[i]);
}

console.log(BST);
console.log(BST.dfsPreOrder()); // 25, 15, 10, 4, 12, 24, 18, 22, 50, 35, 31, 44, 70, 66, 90
console.log(BST.dfsInOrder()); // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
console.log(BST.dfsPostOrder()); // 4, 12, 10, 22, 18, 24, 15, 31, 44, 35, 66, 90, 70, 50, 25
