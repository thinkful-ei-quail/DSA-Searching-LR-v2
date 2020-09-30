/* eslint-disable eqeqeq */
// * 1. How many searches?

const sortedList = [3, 5, 6, 8, 11, 12, 14, 15, 17, 18];

function howManySearches() {}

function binarySearch(array, value, start, end) {
  start === undefined ? 0 : start;
  end === undefined ? array.length : end;

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

console.log(binarySearch(sortedList, 8, 0, sortedList.length));
/*
  0 10
  0 4
  3 4
  3
*/

// first time it calls: searches through index 0 through 10
// second time it calls: searches through index 0 through 4
// third time it calls: searches through index 3 and 4
// fourth time it calls: it finds the 8 value at index 3
