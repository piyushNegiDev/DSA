/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let sum = nums[0];
  let set = new Set(nums);

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      sum += nums[i];
    } else {
      break;
    }
  }

  while(set.has(sum)) {
    sum++;
  }

  return sum;
};