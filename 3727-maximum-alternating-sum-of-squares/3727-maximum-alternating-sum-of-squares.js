/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAlternatingSum = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        nums[i] = nums[i] * nums[i];
    }

    nums.sort((a, b) => a - b);

    let sum = 0;

    for(let i = 0; i < Math.floor(nums.length / 2); i++) {
        sum -= nums[i];
    }

    for(let i = Math.floor(nums.length / 2); i < nums.length; i++) {
        sum += nums[i];
    }

    return sum;
};