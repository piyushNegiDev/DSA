/**
 * @param {number[]} nums
 * @return {number}
 */
var missingInteger = function (nums) {
  let ans = 0;
  let prefixSum = nums[0];
  let breakPoint = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] + 1 === nums[i]) {
      prefixSum += nums[i];
    } else {
      break;
    }
  }

  ans = prefixSum;

  while (breakPoint < nums.length) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === prefixSum) {
        prefixSum++;
        breakPoint++;
      }
    }
    if (ans === prefixSum) return ans;
    else ans = prefixSum;
  }

  return ans;
};