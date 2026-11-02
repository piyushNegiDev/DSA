/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums = nums.sort((a, b) => a - b);
    let n = nums.length;
    let isEven = n % 2 === 0 ? true : false;
    let mid = Math.floor(n / 2);
    if(isEven) mid -= 1;
    let op = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(i !== mid) {
            op += Math.abs(nums[i] - nums[mid]);
        }
    }

    return op;
};