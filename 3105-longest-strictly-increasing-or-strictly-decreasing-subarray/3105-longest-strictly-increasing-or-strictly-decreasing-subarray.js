/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let left = 0;
    let maxLen = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] < nums[i]) {
            maxLen = Math.max(maxLen, i - left + 1);
        } else {
            left = i;
        }
    }

    left = 0;
    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] > nums[i]) {
            maxLen = Math.max(maxLen, i - left + 1);
        } else {
            left = i;
        }
    }

    return maxLen;
};