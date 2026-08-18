/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestInteger = function (nums, k) {
  let n = nums.length;
  let max = -1;
  let map = new Map();

  for (let i = 0; i < n; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    if (nums[i] > max) max = nums[i];
  }

  if (k === n) {
    return max;
  } else if (k === 1) {
    let ans = -1;
    for (const [key, value] of map) {
      if (value === 1) ans = Math.max(ans, key);
    }
    return ans;
  } else {
    let left = map.get(nums[0]) === 1 ? nums[0] : -1;
    let right = map.get(nums[n - 1]) === 1 ? nums[n - 1] : -1;
    return Math.max(left, right);
  }
};