'use strict';

const isNumberArray = require('./utils/isNumberArray');

const large = (arr, itemIndex) => {

  const parsedArr = arr.map(num => parseFloat(num));

  if (isNumberArray(parsedArr)) {
    const sortedArray = parsedArr.sort((a, b) => b - a);
    return sortedArray[itemIndex - 1];
  } else {
    throw new Error('arr must be a number array.')
  }

}


module.exports = large;