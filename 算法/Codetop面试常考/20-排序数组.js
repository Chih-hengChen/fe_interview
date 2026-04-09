// 快速排序
var sortArray = function(nums) {
    const quickSort = (q, l, r) => {
        if (l >= r) return;
        const x = q[Math.floor((l + r) / 2)];
        let i = l - 1;
        let j = r + 1;

        while (i < j) {
            while (q[++i] < x);
            while (q[--j] > x);
            if (i < j) {
                [q[i], q[j]] = [q[j], q[i]];
            }
        }
        quickSort(q, l, j);
        quickSort(q, j + 1, r);
    };
    quickSort(nums, 0, nums.length - 1);
    return nums;
};

// 归并排序
var sortArray = function(nums) {
    if (nums.length <= 1) return nums;

    const merge = (left, right) => {
        const result = [];
        let i = 0;
        let j = 0;

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                result.push(left[i++]);
            } else {
                result.push(right[j++]);
            }
        }
        while (i < left.length) result.push(left[i++]);
        while (j < right.length) result.push(right[j++]);
        return result;
    };

    const mid = Math.floor(nums.length / 2);
    const left = sortArray(nums.slice(0, mid));
    const right = sortArray(nums.slice(mid));
    return merge(left, right);
};