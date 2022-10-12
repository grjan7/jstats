'use strict';

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN);


function rankAvg(num, ref, order) {

  if ((typeof num == 'number' && num != NaN)) {
    if (isNumberArray(ref)) {
      if (ref.indexOf(num) != -1) {
        let sortedArray;
        if (order == undefined || order.toLowerCase() == 'asc') {
          sortedArray = ref.sort((a, b) => a - b);
        } else {
          sortedArray = ref.sort((a, b) => b - a);
        }
        return sortedArray.indexOf(num) + 1;
      } else {
        throw new Error('num does not exist in the ref array.');
      }

    } else {
      throw new Error('ref must be a number array.')
    }

  } else {
    throw new Error('num must be a number.')
  }
}


console.log(rankAvg(101,[89, 88, 92, 101, 94, 97, 95], 'desc'))