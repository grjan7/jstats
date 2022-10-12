function stdDev(arg) {
  const arr = Array.isArray(arg) && arguments.length == 1 ? arg : arguments;
  // formula
  // sqrt(sum((x-avgX) ^ 2)/n)

  const avgX = arr.reduce((prev, val, ind, array) => prev + val) / arr.length;
  const xMinusXBarSquaredSum = arr.map((val) => (val - avgX) ** 2).reduce((prev, val, ind) => prev + val);
  return Math.sqrt(xMinusXBarSquaredSum / arr.length);
}

stdDev([1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]);