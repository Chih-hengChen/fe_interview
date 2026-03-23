// 快速排序
function quickSort(arr) {
  // TODO: 实现快速排序
}

// 归并排序
function mergeSort(arr) {
  // TODO: 实现归并排序
}

// 二分查找（有序数组）
function binarySearch(arr, target) {
  // TODO: 实现二分查找，返回索引或-1
}

// 测试
const arr = [64, 34, 25, 12, 22, 11, 90, 5];

console.log('--- 快速排序 ---');
console.log('原数组:', arr.slice());
console.log('排序后:', quickSort(arr.slice()));

console.log('\n--- 归并排序 ---');
console.log('原数组:', arr.slice());
console.log('排序后:', mergeSort(arr.slice()));

console.log('\n--- 二分查找 ---');
const sortedArr = [1, 3, 5, 7, 9, 11, 13, 15];
console.log('有序数组:', sortedArr);
console.log('查找 7:', binarySearch(sortedArr, 7)); // 3
console.log('查找 6:', binarySearch(sortedArr, 6)); // -1
console.log('查找 1:', binarySearch(sortedArr, 1)); // 0
console.log('查找 15:', binarySearch(sortedArr, 15)); // 7
