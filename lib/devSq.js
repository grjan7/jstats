'use strict';

const isNumberArray = require('./utils/isNumberArray');

function devSq(arg) {

  const args = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);
  const parsedArgs = args.map(it => parseFloat(it));

  if (isNumberArray(parsedArgs)) {

    const xAvg = parsedArgs.reduce((prev, val, ind, arr) => prev + val) / args.length;
    const xMinXAvgSquared = parsedArgs.map((x) => (x - xAvg) ** 2);
    const xMinXAvgSquaredSum = xMinXAvgSquared.reduce((prev, val, ind, arr) => prev + val);

    return xMinXAvgSquaredSum;
  }
}

module.exports = devSq;

