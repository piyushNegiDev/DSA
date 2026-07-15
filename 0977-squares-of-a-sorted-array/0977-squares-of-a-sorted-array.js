/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let n = nums.length;
  let left = 0;
  let right = n - 1;
  let index = n - 1;
  let ans = [];
  while (left <= right) {
    if (Math.abs(nums[left]) < Math.abs(nums[right])) {
      ans[index] = nums[right] ** 2;
      right--;
    } else {
      ans[index] = nums[left] ** 2;
      left++;
    }
    index--;
  }
  return ans;
};