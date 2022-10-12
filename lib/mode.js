'use strict';

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN  );

const isEvenNumber = (num) => num % 2 == 0;

function mode(arg) {

  const args = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);	
  
  if (isNumberArray(args)) {
    let numCountsObj = {};
    let maxNum = {};
    
    for(let num of args){
      numCountsObj[num] == undefined ? numCountsObj[num] = 1 : numCountsObj[num] += 1;  
    }
    
    for(let key in numCountsObj){
      let numCount = numCountsObj[key];
      if(maxNum["val"] == undefined && maxNum["count"] == undefined){
        maxNum["val"] = key;
        maxNum["count"] = numCount;
      } else{
        if(maxNum["count"] < numCount){
          maxNum["val"] = key;
        	maxNum["count"] = numCount;
        }
      }
    }
    
    return parseFloat(maxNum.val);
    
  }
}


mode([1, 4, 2, 3, 5, 8, 8, 7, 10, 61, 7, 21, 8, 42, 51, 20]);