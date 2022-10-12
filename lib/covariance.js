'use strict';

const isNumberArray = require('./utils/isNumberArray');

const covariance = (arrX, arrY) => {

  if (isNumberArray(arrX) && isNumberArray(arrY)) {

    if (arrX.length == arrY.length) {

      const avgX = arrX.reduce((prev, val, ind, arr) => prev + val) / arrX.length;
      const xMinusXBar = arrX.map((val) => val - avgX);

      const avgY = arrY.reduce((prev, val, ind, arr) => prev + val) / arrY.length;
      const yMinusYBar = arrY.map((val) => val - avgY);

      const xMinusXBarYMinusYBarProduct = xMinusXBar.map((val, ind, arr) => val * yMinusYBar[ind]);
      const xMinusXBarYMinusYBarProductSum = xMinusXBarYMinusYBarProduct.reduce((prev, val, ind, arr) => prev + val);

      return xMinusXBarYMinusYBarProductSum / arrX.length;

    } else {

      throw new Error("Size of arrX and arrY must be same.");

    }

  } else {

    throw new Error("arrX and arrY must be an array.");

  }
}

module.exports = covariance;

