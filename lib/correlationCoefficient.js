'use strict';

const isNumberArray = require('./utils/isNumberArray');

const sumArray = (arg) => arg.reduce((prev, val, ind, arr) => prev + val);

const avgArray = (arg) => sumArray(arg) / arg.length;

const xMinusXBar = (arg) => {
  let xBar = avgArray(arg);
  return arg.map((x) => x - xBar);
}

const xMinusXBarSquared = (arg) => {
  let xMinusXBarArr = xMinusXBar(arg);
  return xMinusXBarArr.map((it) => it * it);
}

const xMinusXBarSquaredSum = (arg) => {
  return sumArray(xMinusXBarSquared(arg));
}

const productOfArrays = (arr1, arr2) => {
  return arr1.map((val, ind, arr) => val * arr2[ind])
}

function correlationCoefficient(args) {

  let productOfXMinusXBar;
  let xMinusXBarSquaredSumVal;

  //validate arguments 

  for (let arg in arguments) {
    let item = arguments[arg];
    if (isNumberArray(item)) {
    } else {
      throw new Error('arguments must be a number array.')
    }
  }

  let size = arguments[0].length;

  for (let arg in arguments) {

    let arr = arguments[arg];

    if (size != arr.length) {
      throw new Error('All array length must be same.');
    } else {

      let xMinusXBarArr = xMinusXBar(arr);

      productOfXMinusXBar = (productOfXMinusXBar == undefined) ? xMinusXBarArr :
        productOfArrays(productOfXMinusXBar, xMinusXBarArr);

      xMinusXBarSquaredSumVal = (xMinusXBarSquaredSumVal == undefined) ? xMinusXBarSquaredSum(arr) : xMinusXBarSquaredSumVal * xMinusXBarSquaredSum(arr);
    }
  }

  return sumArray(productOfXMinusXBar) / Math.sqrt(xMinusXBarSquaredSumVal);

}

module.exports = correlationCoefficient;