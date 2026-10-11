/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function(nums) {
    let sum = 0;
    let n = nums.length;

    for(let i = 0; i < nums.length; i++) {
        if(n % (i + 1) === 0) sum += nums[i] * nums[i];
    }

    return sum;
};