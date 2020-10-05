const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.result.push('( )');
    } else {
      this.result.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (position > 0 && position < this.result.length) {
      this.result.splice(position - 1, 1);
    } else {
      this.result = [];
      throw new Error;
    }
    return this;
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let con = this.result.join('~~');
    this.result = [];
    return con;
  }
};

module.exports = chainMaker;
