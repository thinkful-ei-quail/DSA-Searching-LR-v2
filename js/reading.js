/* eslint-disable eqeqeq */
// * Linear Search

// Searches for a particular value within an array
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] == value) {
      return i;
    }
  }
  return -1;
} // O(n)

const stingRay = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

// * Divide and Conquer
function binarySearch(array, value, start, end) {
  start === undefined ? 0 : start;
  end = end === undefined ? array.length - 1 : end;

  if (start > end) {
    return -1;
  }

  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  if (item == value) {
    return index;
  } else if (item < value) {
    return binarySearch(array, value, index + 1, end);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1);
  }
}

console.log(binarySearch());
