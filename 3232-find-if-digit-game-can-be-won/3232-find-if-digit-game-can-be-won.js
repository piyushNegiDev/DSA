/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let singleDigitSum = 0;
    let doubleDigitSum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 10) singleDigitSum += nums[i]
        else doubleDigitSum += nums[i]
    }
    return singleDigitSum !== doubleDigitSum;
};