/**
 * @param {number[]} nums
 * @return {number}
 */
var countCompleteSubarrays = function (nums) {
  let map = new Map();
  let n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    map.set(nums[i], 0);
  }

  let left = 0;
  let right = left + map.size - 1;

  let windowMap = new Map();
  for (let i = left; i < right; i++) {
    windowMap.set(nums[i], (windowMap.get(nums[i]) || 0) + 1);
  }

  while (left < n) {
    while (right < n && windowMap.size < map.size) {
      windowMap.set(nums[right], (windowMap.get(nums[right]) || 0) + 1);
      right++;
    }

    if (windowMap.size === map.size) {
      count += n - right + 1;
    }

    windowMap.set(nums[left], windowMap.get(nums[left]) - 1);
    if (windowMap.get(nums[left]) === 0) {
      windowMap.delete(nums[left]);
    }
    left++;
  }

  return count;
};