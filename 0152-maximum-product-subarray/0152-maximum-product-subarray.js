/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let currentMax = nums[0];
  let currentMin = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let oldMax = currentMax;
    let oldMin = currentMin;

    currentMax = Math.max(nums[i], nums[i] * oldMax, nums[i] * oldMin);

    currentMin = Math.min(nums[i], nums[i] * oldMax, nums[i] * oldMin);

    max = Math.max(max, currentMax);
  }

  return max;
};