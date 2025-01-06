const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let number = 0;

  matrix.forEach(function(item, index, array){
    item.forEach(function(item, index, array){
      if (item === '^^'){
        number += 1;
      }
    })
  })

  return number;
}

module.exports = {
  countCats
};
