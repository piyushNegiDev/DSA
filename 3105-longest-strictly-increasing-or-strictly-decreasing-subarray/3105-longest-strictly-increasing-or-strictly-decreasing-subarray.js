/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function(nums) {
    let leftInc = 0;
    let leftDec = 0;
    let maxLen = 1;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] < nums[i]) {
            maxLen = Math.max(maxLen, i - leftInc + 1);
        } else {
            leftInc = i;
        }

        if(nums[i - 1] > nums[i]) {
            maxLen = Math.max(maxLen, i - leftDec + 1);
        } else {
            leftDec = i;
        }
    }

    return maxLen;
};