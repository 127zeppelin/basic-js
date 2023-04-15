const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, dept = 1) {
    if (!Array.isArray(arr)) {
      throw new Error("not Array");
    }
    let maxDepth = dept;
    for (let e of arr) {
      if (Array.isArray(e)) {
        let subDepth = this.calculateDepth(e, dept + 1);
        if (subDepth > maxDepth) {
          maxDepth = subDepth;
        }
      }
    }
    return maxDepth;
  }
}

const calculator = new DepthCalculator();


module.exports = {
  DepthCalculator
};
