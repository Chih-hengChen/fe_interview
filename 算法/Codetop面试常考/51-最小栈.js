// https://leetcode.cn/problems/min-stack

var MinStack = function () {
  this.stk = [];
  this.minStk = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stk.push(val);
  this.minStk.push(
    this.minStk.length === 0
      ? val
      : Math.min(this.minStk[this.minStk.length - 1], val),
  );
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stk.pop();
  this.minStk.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stk[this.stk.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStk[this.minStk.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
