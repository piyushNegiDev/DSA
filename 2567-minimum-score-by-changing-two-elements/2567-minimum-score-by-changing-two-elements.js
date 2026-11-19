/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeSum = function(nums) {
    let n = nums.length;
    nums = nums.sort((a, b) => a - b);
    let ans = nums[n - 2] - nums[1];
    ans = Math.min(ans, nums[n - 1] - nums[2]);
    ans = Math.min(ans, nums[n - 3] - nums[0]);
    return ans;
};