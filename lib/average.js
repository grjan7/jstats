'use strict';

const isNumberArray = require('./utils/isNumberArray');

function average(arg) {

  const inputArray = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);
  const parsedInput = inputArray.map(num => parseFloat(num));

  if (isNumberArray(parsedInput)) {

    const size = parsedInput.length;
    const sumOfParsedInput = parsedInput.reduce((prev, val, ind, arr) => prev + val);

    return sumOfParsedInput / size;

  } else {
    throw new Error('arguments must be series of numbers or a number array.')
  }
}

module.exports = average;