'use strict';

function min(arg) {
  const arr = arguments.length == 1 && Array.isArray(arg) ? arguments : arg;
  let minVal;
  for (let i of arr) {
    if (typeof i != 'number' || i == NaN) {

    } else {
      minVal = minVal == undefined ? i : minVal > i ? i : minVal;
    }
  }
  return minVal;
}

module.exports = min;