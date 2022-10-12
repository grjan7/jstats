'use strict';

const isNumberArray = (arg) => arg.every(it => (typeof it == 'number' || parseInt(it) != NaN) && it != NaN  );

const isEvenNumber = (num) => num % 2 == 0;

function VarP(arg) {

  const args = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);	
  
  if (isNumberArray(args)) {
    
    const xAvg = args.reduce((prev, val, ind, arr) => prev + val)/args.length;
    const xMinXAvgSquared = args.map((x) => (x - xAvg) ** 2);
    const xMinXAvgSquaredSum = xMinXAvgSquared.reduce((prev, val, ind, arr) => prev + val);
    return xMinXAvgSquaredSum/args.length;    
  }
}
function VarS(arg) {

  const args = arguments.length == 1 && Array.isArray(arg) ? arg : Object.values(arguments);	
  
  if (isNumberArray(args)) {
    
    const xAvg = args.reduce((prev, val, ind, arr) => prev + val)/args.length;
    const xMinXAvgSquared = args.map((x) => (x - xAvg) ** 2);
    const xMinXAvgSquaredSum = xMinXAvgSquared.reduce((prev, val, ind, arr) => prev + val);
    return xMinXAvgSquaredSum/(args.length - 1);    
  }
  
}

console.log(VarP([1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]))
console.log(VarS([1345, 1301, 1368, 1322, 1310, 1370, 1318, 1350, 1303, 1299]))