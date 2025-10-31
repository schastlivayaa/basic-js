const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  let counter = 1;
  let encoded = '';

  for (let i = 0; i < str.length; i += 1) {
    if (str[i] === str[i + 1]) {
      counter += 1;
    } else {
      if (counter > 1) {
        encoded += counter + str[i];
      } else {
        encoded += str[i];
      }
      counter = 1;
    }
  }

  return encoded;
}

module.exports = {
  encodeLine
};