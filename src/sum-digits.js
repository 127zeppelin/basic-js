const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let result = n;
 console.log(result);
 while (result > 9) {
   let newResult = result.toString().split('').map(num => parseInt(num));
   result = 0;
     console.log(newResult);
   for (let i = 0; i < newResult.length; i++) {
     result += newResult[i];
     
   }
   console.log(result);
 }
 
 console.log(result);
 return result
 }

module.exports = {
  getSumOfDigits
};
