const merge = (left, right) => {
  let result = [];
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else result.push(right.shift());
  }
  if (left.length <= 0 && right.length > 0) {
    result.concat(right);
  } else if (left.length > 0 && right.length <= 0) {
    result.concat(left);
  }
  return result;
};

const mergeSortInts = (list) => {
  // Base case
  if (list.length <= 1) return list;

  // Recursive case
  let left = [];
  let right = [];

  for (let i = 0; i < list.length; i += 1) {
    if (i < list.length / 2) {
      left.push(list[i]);
    } else right.push(i);
  }

  left = mergeSortInts(left);
  right = mergeSortInts(right);

  return merge(left, right);
};

console.log(
  `MergeSorting list: [13, 535, 11, 0, -345, 364, 13245] ... Result: ${mergeSortInts(
    [13, 535, 11, 0, -345, 364, 13245]
  )}`
);
