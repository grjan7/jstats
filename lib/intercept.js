'use strict';

const isNumberArray = require('./utils/isNumberArray');

const intercept = (knownX, knownY) => {

  // a = avgY - b avgX
  // b = sum((x - avgX)(y-avgY))/sum((x-avgX) ^ 2)  

  if (isNumberArray(knownX) && isNumberArray(knownY)) {

    if (knownX.length == knownY.length) {

      const avgX = knownX.reduce((prev, val, ind, arr) => prev + val) / knownX.length;
      const xMinusXBar = knownX.map((val) => val - avgX);
      const xMinusXBarSquared = xMinusXBar.map((val) => val ** 2);
      const xMinusXBarSquaredSum = xMinusXBarSquared.reduce((prev, val, ind, arr) => prev + val);

      const avgY = knownY.reduce((prev, val, ind, arr) => prev + val) / knownY.length;
      const yMinusYBar = knownY.map((val) => val - avgY);

      const xMinusXBarYMinusYBarProduct = xMinusXBar.map((val, ind, arr) => val * yMinusYBar[ind]);
      const xMinusXBarYMinusYBarProductSum = xMinusXBarYMinusYBarProduct.reduce((prev, val, ind, arr) => prev + val);

      const b = xMinusXBarYMinusYBarProductSum / xMinusXBarSquaredSum;
      const a = avgY - (b * avgX);

      return a;

    } else {
      throw new Error('Size of knownX and knownY must be same.');
    }

  } else {
    throw new Error('knownX and knownY must be a number array.');
  }
}

module.exports = intercept;

