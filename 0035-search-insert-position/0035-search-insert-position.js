/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
let smallerThanTarget = -Infinity;
    for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] >= smallerThanTarget && nums[i] < target) {
      smallerThanTarget = nums[i];
    }
    if (i + 1 === nums.length) {
      return (nums.indexOf(smallerThanTarget) + 1);
    }
  }
};