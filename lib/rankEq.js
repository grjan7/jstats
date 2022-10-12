'use strict';

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN);


function rankEq(num, ref, order) {

  if ((typeof num == 'number' && num != NaN)) {
    if (isNumberArray(ref)) {
      if (ref.indexOf(num) != -1) {
        
        let sortedArray;
        
        if (order == undefined || order.toLowerCase() == 'asc') {
          sortedArray = ref.sort((a, b) => a - b);
        } else {
          sortedArray = ref.sort((a, b) => b - a);
        }
        let rank = {};
        let prevRank = 0;
        let repeats = 0;        
        for(let i of sortedArray){
          if(rank[i] == undefined){
            rank[i] =  prevRank + repeats + 1
            repeats = 0;
          }else{
            rank[i] = prevRank;
            repeats++;
          }
         prevRank = rank[i];
        }
        return rank[num];
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


console.log(rankAvg(51,[101, 105, 107, 51, 95, 74, 107, 108, 105, 101, 101], 'desc'))