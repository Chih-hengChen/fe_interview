// 快速排序
function quickSort(arr) {
  if (arr.length <= 1) return arr;
  
  const pivot = arr[Math.floor(arr.length / 2)];
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);
  
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// 归并排序
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;
  
  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }
  
  return result.concat(left.slice(i)).concat(right.slice(j));
}

// 二分查找（有序数组）
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  
  return -1;
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
