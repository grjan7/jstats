'use strict';

const frequencyS = (dataArr, intervalArr) => {

  if (Array.isArray(dataArr) && Array.isArray(intervalArr)) {

    let frequencyRanges = {};

    const alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;

    for (let i in intervalArr) {

      let item = intervalArr[i];

      if (i == 0) { // first item

        let start = "a";
        let end = item;

        dataArr.forEach((val, ind) => {

          if ((val > start || val.indexOf(start) == 0) && (val < end || val.indexOf(end) == 0)) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }
        });

      } else if (i == intervalArr.length - 1) { // last item

        let start = alphabet[alphabet.indexOf(intervalArr[i - 1]) + 1];
        let end = item;

        dataArr.forEach((val, ind) => {

          if ((val > start || val.indexOf(start) == 0) && (val < end || val.indexOf(end) == 0)) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }

          const end_ = alphabet[alphabet.indexOf(end) + 1];

          if ((val > end_)) {
            frequencyRanges[`${end_}-`] == undefined ? frequencyRanges[`${end_}-`] = 1 : frequencyRanges[`${end_}-`] += 1;
            delete dataArr[ind];
          }

        });

      } else { // inbetween

        let start = alphabet[alphabet.indexOf(intervalArr[i - 1]) + 1];
        let end = item;

        dataArr.forEach((val, ind) => {

          if ((val > start || val.indexOf(start) == 0) && (val < end || val.indexOf(end) == 0)) {
            frequencyRanges[`${start}-${end}`] == undefined ? frequencyRanges[`${start}-${end}`] = 1 : frequencyRanges[`${start}-${end}`] += 1;
            delete dataArr[ind];
          }

        });
      }
    }
    return frequencyRanges;

  } else {
    throw new Error('dataArr and intervalArr must be an array.')
  }
}


module.exports = frequencyS;
