/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let first = nums[0];
    let second = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > first) {
            second = first;
            first = nums[i];
        } else if (nums[i] > second && i !== 0) {
            second = nums[i];
        }
    }

    return (first - 1) * (second - 1);
};