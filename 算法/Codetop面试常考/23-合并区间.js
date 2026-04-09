// https://leetcode.cn/problems/merge-intervals
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (!intervals || !intervals.length) return [];
  intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  const reuslt = [intervals[0]];
  for (let k = 1; k < intervals.length; k++) {
    const interval = reuslt[reuslt.length - 1];
    const [i, j] = intervals[k];
    const [x, y] = interval;
    if (i > y) {
      reuslt.push(intervals[k]);
    } else {
      interval[1] = Math.max(j, y);
    }
  }
  return reuslt;
};
