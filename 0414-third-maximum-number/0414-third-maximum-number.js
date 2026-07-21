/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function (nums) {
  let max = nums[0];
  let secondMax = -Infinity;
  let thirdMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      thirdMax = secondMax;
      secondMax = max;
      max = nums[i];
    } else if (nums[i] > secondMax && nums[i] < max) {
      thirdMax = secondMax;
      secondMax = nums[i];
    } else if (nums[i] > thirdMax && nums[i] < secondMax) {
      thirdMax = nums[i];
    }
  }
  if (thirdMax === -Infinity) return max;
  return thirdMax;
};