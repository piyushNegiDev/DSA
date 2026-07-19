/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let nSum = nums.length;
    let valuesSum = 0;
    for(let i = 0; i < nums.length; i++){
        valuesSum += nums[i];
        nSum += i;
    }
    return nSum - valuesSum;
};