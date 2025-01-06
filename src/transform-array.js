const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  const res = [];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
      const cur = arr[i];

      if (cur === '--discard-next') {
          i++;
      } else if (cur === '--discard-prev') {
          if (res.includes(arr[i-1])) {
              res.pop();
          }
      } else if (cur === '--double-next') {
          if (i + 1 < length) {
              res.push(arr[i + 1]);
          }
      } else if (cur === '--double-prev') {
          if (res.includes(arr[i-1])){
            res.push(arr[i-1]);
          }
      } else {
          res.push(cur);
      }
  }

  return res;
}

module.exports = {
  transform
};
