/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var reverse = function (arr, left, right) {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}; 

var nextPermutation = function (nums) {
  let n = nums.length;
  let index = -1;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      index = i;
      break;
    }
  }

  if (index === -1) return nums.sort((a, b) => a - b);

  for (let i = n - 1; i > index; i--) {
    if (nums[i] > nums[index]) {
      [nums[i], nums[index]] = [nums[index], nums[i]];
      break;
    }
  }

  reverse(nums, index + 1, n - 1);

  return nums;
};