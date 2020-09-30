/* eslint-disable eqeqeq */
const dataSet = [
  89,
  30,
  25,
  32,
  72,
  70,
  51,
  42,
  25,
  24,
  53,
  55,
  78,
  50,
  13,
  40,
  48,
  32,
  26,
  2,
  14,
  33,
  45,
  72,
  56,
  44,
  21,
  88,
  27,
  68,
  15,
  62,
  93,
  98,
  73,
  28,
  16,
  46,
  87,
  28,
  65,
  38,
  67,
  16,
  85,
  63,
  23,
  69,
  64,
  1001,
  9,
  70,
  81,
  27,
  97,
  82,
  6,
  88,
  3,
  7,
  46,
  13,
  11,
  64,
  76,
  31,
  26,
  38,
  28,
  13,
  17,
  69,
  90,
  1,
  6,
  7,
  64,
  43,
  9,
  73,
  80,
  98,
  46,
  27,
  22,
  87,
  49,
  83,
  6,
  39,
  42,
  51,
  54,
  84,
  34,
  53,
  78,
  40,
  14,
  5,
];

// Linear counter

function indexOf(array, value) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    counter++;
    if (array[i] == value) {
      return { i, counter };
    }
  }
  return -1;
} // O(n)

console.log(indexOf(dataSet, 6));
console.log('--------');

// Binary counter

function binarySearchCount(array, value, start = 0, end = array.length) {
  // start === undefined ? 0 : start;
  // end === undefined ? array.length : end;
  console.log('126 ', start, end);
  let count = 0;
  if (start > end) {
    return count;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  // console.log('133 ', start, end);
  if (item == value) {
    count++;
    return count;
  } else if (item < value) {
    count = 1 + binarySearchCount(array, value, index + 1, end);
    return count;
  } else if (item > value) {
    count = 1 + binarySearchCount(array, value, start, index - 1);
    return count;
  }
}

dataSet.sort((a, b) => a - b);
console.log(dataSet);

console.log(binarySearchCount(dataSet, 909234));
