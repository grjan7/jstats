'use strict';

const isNumberArray = require('./utils/isNumberArray');

const frequencyN = (dataArr, intervalArr) => {

  if (isNumberArray(dataArr) && isNumberArray(intervalArr)) {

    let frequencyRanges = {};

    for (let i in intervalArr) {

      let item = intervalArr[i];

      if (i == 0) { // first item        
        let start = 0;
        let end = item;

        dataArr.forEach((val, ind) => {
          if (val >= start && val <= end) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }
        });

      } else if (i == intervalArr.length - 1) { // last item

        let start = intervalArr[i - 1] + 1;
        let end = item;

        dataArr.forEach((val, ind) => {

          if (val >= start && val <= end) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }

          if (val > end) {
            frequencyRanges[`${end + 1}-`] == undefined ? frequencyRanges[`${end}-`] = 1 : frequencyRanges[`${end}-`] += 1;
            delete dataArr[ind];
          }

        });

      } else { // inbetween

        let start = intervalArr[i - 1] + 1
        let end = item;

        dataArr.forEach((val, ind) => {

          if (val >= start && val <= end) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }

        });
      }
    }

    return frequencyRanges;

  } else {
    throw new Error('dataArr and intervalArr must be a number array.')
  }
}

module.exports = frequencyN;