'use strict';

const isNumberArray = (arg) => arg.every(it => typeof it == 'number' && it != NaN);

module.exports = isNumberArray;