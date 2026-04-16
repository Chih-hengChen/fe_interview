// https://leetcode.cn/problems/yuan-quan-zhong-zui-hou-sheng-xia-de-shu-zi-lcof
/**
 * @param {number} num
 * @param {number} target
 * @return {number}
 */
var iceBreakingGame = function (num, target) {
  let survivor = 0;
  for (let i = 2; i <= num; i++) {
    survivor = (survivor + target) % i;
  }
  return survivor;
};
