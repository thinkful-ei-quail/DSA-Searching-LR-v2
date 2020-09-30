// * 6. Find the next commanding officer

// input:

const BinarySearchTree = require('./BST');

const picard = new BinarySearchTree('picard');
picard.left = new BinarySearchTree('Riker', null, picard);
picard.right = new BinarySearchTree('Data', null, picard);
picard.left.left = new BinarySearchTree('Worf', null, picard.left);
picard.left.right = new BinarySearchTree('Laforge', null, picard.left);
picard.left.left.left = new BinarySearchTree('Guy', null, picard.left.left);
picard.right.right = new BinarySearchTree('Crusher', null, picard.right);
picard.right.right.left = new BinarySearchTree(
  'Selar',
  null,
  picard.right.right
);

console.log(picard);
// const officers = [
//   { key: 1, value: 'Picard' },
//   { key: 2, value: 'Riker' },
//   { key: 3, value: 'Data' },
//   { key: 4, value: 'Worf' },
//   { key: 5, value: 'LaForge' },
//   { key: 6, value: 'Crusher' },
//   { key: 7, value: 'Guy' },
//   { key: 8, value: 'Selar' },
// ];

const spaceTree = [
  'Picard',
  'Riker',
  'Data',
  'Worf',
  'LaForge',
  'Crusher',
  'Guy',
  'Selar',
];

// for (let i = 0; i < officers.length; i++) {
//   enterprise.insert(officers[i].key, officers[i].value);
// }
