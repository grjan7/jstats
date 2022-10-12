'use strict';

function max(arg) {
  const arr = arguments.length == 1 && Array.isArray(arg) ? arguments : arg;
  let maxVal;
  for (let i of arr) {
    if (typeof i != 'number' || i == NaN) {

    } else {
      maxVal = maxVal == undefined ? i : maxVal < i ? i : maxVal;
    }
  }
  return maxVal;
}

module.exports = max;