const fibsIter = (num) => {
  if (!num || !Number.isInteger(num) || num < 0)
    throw new Error("Parameter must be a positive integer.");
  if (num === 0) return 0;
  let totalIterations = num;
  let fibArray = [];
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

console.log(`Iterative method: ${fibsIter(10)}`);
