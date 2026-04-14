// https://leetcode.cn/problems/shuffle-an-array
/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.backup = [...nums];
  this.array = nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  this.array = [...this.backup];
  return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  for (let i = this.array.length - 1; i >= 0; i--) {
    const index = Math.floor(Math.random() * (i + 1));
    [this.array[index], this.array[i]] = [this.array[i], this.array[index]];
  }
  return this.array;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
