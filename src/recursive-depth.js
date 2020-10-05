const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1;

    if (JSON.stringify(arr) === JSON.stringify(arr.flat(depth))) {
      return depth;
    }

    return 1 + this.calculateDepth(arr.flat(depth));
  }
};