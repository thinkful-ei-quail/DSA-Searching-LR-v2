function createBalancedBst(arr) {
  if (!arr.length) {
    return null;
  }

  const middleIndex = Math.floor(arr.length / 2);
  const value = arr[middleIndex];
  const node = new BinarySearchTree(value);

  const left = arr.slice(0, middleIndex);
  const right = arr.slice(middleIndex + 1);

  node.left = createBalancedBst(left);
  node.right = createBalancedBst(right);

  return node;
}
