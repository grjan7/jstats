const count = (arr, item) => {

  let isStringOrNumber = arr.every(val => typeof val == 'string' || typeof val == 'number');

  if (isStringOrNumber) {    
    let itemCount = 0;
    for (let val of arr) {
      if (val == item) {
        itemCount++
      }
    }
    return itemCount;
  } else {
    throw new Error('arr must be a array with number or string as value.')
  }
}

const countArr = (arr) => {

  let isStringOrNumber = arr.every(val => typeof val == 'string' || typeof val == 'number');

  if (isStringOrNumber) {
    let countObj = {};
    for (let val of arr) {
      countObj[val] == undefined ? countObj[val] = 1 : countObj[val] += 1;
    }
    return countObj;
  } else {
    throw new Error('arr must be a array with number or string as value.')
  }
}

count([1, 2, 3, 4, 14, 1, 2, 51, 40, 12, 23, 12]);