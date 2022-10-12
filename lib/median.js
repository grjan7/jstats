'use strict';

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN  );

const isEvenNumber = (num) => num % 2 == 0;

function median(arg) {

  const args = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);	
  
  if (isNumberArray(args)) {
    
    let argsAsc = args.sort((a, b) => a - b);    
    let argsLen = args.length;
    let medianIndex = (argsLen / 2) - 1;
    
    if (isEvenNumber(argsLen)) {
      return (argsAsc[medianIndex] + argsAsc[medianIndex + 1]) / 2;
    } else {
      medianIndex = Math.ceil(medianIndex);      
      return argsAsc[medianIndex];
    }
  }
}


median(1, 4, 2, 3, 5, 8, 7, 10, 61, 21, 42, 51, 20)