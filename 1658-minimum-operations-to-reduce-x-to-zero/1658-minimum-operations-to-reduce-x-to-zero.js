/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
var minOperations = function(nums, x) {
    let sum = 0;
    for(let i of nums){
        sum += i;
    }

    let target = sum - x;
    let left = 0;
    let maxLen = -1;
    let currentSum = 0;

    for(let i = 0; i < nums.length; i++) {
        currentSum += nums[i]

        while(currentSum > target) {
            currentSum -= nums[left];
            left++;
        }

        if(currentSum === target) {
            maxLen = Math.max(maxLen, i - left + 1);
        }
    }

    return maxLen === -1 ? -1 : nums.length - maxLen;
};