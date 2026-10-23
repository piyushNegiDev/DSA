/**
 * @param {number[]} nums
 * @return {number}
 */
var sortPermutation = function(nums) {
    let AND = -1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== i) {
            AND &= nums[i];
        }
    }

    return AND === -1 ? 0 : AND;
};