// https://leetcode.cn/problems/merge-sorted-array/
var merge = function(nums1, m, nums2, n) {
    let l = 0;
    let r = 0;
    const result = [];
    while (l < m && r < n) {
        if (nums1[l] < nums2[r]) {
            result.push(nums1[l++]);
        } else {
            result.push(nums2[r++]);
        }
    }
    while (l < m) result.push(nums1[l++]);
    while (r < n) result.push(nums2[r++]);
    for (let i = 0; i < nums1.length; i++) {
        nums1[i] = result[i];
    }
};

// 不使用额外空间，由于nums1后面是0，所以要倒序遍历，把最大的放到nums1的最后
// 如果某一数组遍历完，那它对应的指针p一定为-1，此时只需把对应的指针顺序放到数组上即可
var merge = function(nums1, m, nums2, n) {
    let tail = m + n - 1;
    let p1 = m - 1;
    let p2 = n - 1;

    while (p1 >= 0 || p2 >= 0) {
        let cur;
        if (p1 === -1) {
            cur = nums2[p2--];
        } else if (p2 === -1) {
            cur = nums1[p1--];
        } else if (nums1[p1] > nums2[p2]) {
            cur = nums1[p1--];
        } else {
            cur = nums2[p2--];
        }

        nums1[tail--] = cur;
    }
};