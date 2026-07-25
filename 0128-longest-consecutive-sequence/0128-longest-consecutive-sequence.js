/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let count = 1;
    let max = 1;
    nums.sort((a,b)=>a-b);
    if(nums.length === 0) return 0;
    for(let i = 0; i < nums.length - 1; i++) {
        if (nums[i] + 1 === nums[i+1]) {
            count ++;
            max = Math.max(count,max);
        } else if (nums[i] === nums[i+1]) {
            continue;
        } else {
            count = 1;
        }
    }
    return max;
};