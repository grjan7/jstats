'use strict';

const isNumberArray = require('./utils/isNumberArray');

function sum(arg) {

  const inputArray = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);
  const parsedInput = inputArray.map(num => parseFloat(num));

  if (isNumberArray(parsedInput)) {

    const sumOfParsedInput = parsedInput.reduce((prev, val, ind, arr) => prev + val);

    return sumOfParsedInput;

  } else {
    throw new Error('arguments must be a series of numbers or a number array.')
  }
}

module.exports = sum;