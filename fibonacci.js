const fibsIter = (num) => {
  if (!Number.isInteger(num) || num < 0)
    throw new Error("Parameter must be 0 or positive integer.");
  let fibArray = [];
  if (num === 0) return fibArray;
  let totalIterations = num;

  for (let i = 0; i < totalIterations; i += 1) {
    if (fibArray.length === 0) fibArray.push(0);
    else if (fibArray.length === 1) fibArray.push(1);
    else if (fibArray.length > 1)
      fibArray.push(
        fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
      );
  }
  return fibArray;
};

const fibsRecInternal = (num, fibArray = []) => {
  if (num <= 0) return fibArray;
  else if (fibArray.length === 0) fibArray.push(0);
  else if (fibArray.length === 1) fibArray.push(1);
  else if (fibArray.length > 1)
    fibArray.push(
      fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]
    );
  return fibsRecInternal(num - 1, fibArray);
};

const fibsRec = (num) => {
  if (!Number.isInteger(num) || num < 0)
    throw new Error("Parameter must be 0 or positive integer.");
  return fibsRecInternal(num);
};

console.log(`Iterative method(0): ${fibsIter(0)}`);
console.log(`Iterative method(5): ${fibsIter(5)}`);
console.log(`Iterative method(10): ${fibsIter(10)}`);

console.log(`Recursive method(0): ${fibsRec(0)}`);
console.log(`Recursive method(5): ${fibsRec(5)}`);
console.log(`Recursive method(10): ${fibsRec(10)}`);
