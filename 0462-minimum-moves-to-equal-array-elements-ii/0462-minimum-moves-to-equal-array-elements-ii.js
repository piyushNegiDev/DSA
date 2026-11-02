/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums = nums.sort((a, b) => a - b);
    
    let n = nums.length;
    let mid = Math.floor(n / 2);
    let op = 0;
    
    for(let i = 0; i < n; i++) {
        op += Math.abs(nums[i] - nums[mid]);
    }

    return op;
};