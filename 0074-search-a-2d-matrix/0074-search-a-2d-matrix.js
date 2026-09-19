/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchRow = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) return true;

    if (arr[mid] > target) high = mid - 1;
    else low = mid + 1;
  }

  return false;
};

var searchMatrix = function (arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    
    if (arr[mid][0] <= target && target <= arr[mid][arr[mid].length - 1])
      return searchRow(arr[mid], target);

    if (target < arr[mid][0]) high = mid - 1;
    else low = mid + 1;
  }

  return false;
};