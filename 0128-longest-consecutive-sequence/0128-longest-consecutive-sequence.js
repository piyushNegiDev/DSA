/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    nums = new Set(nums);
    let max = 1;

    for(const value of nums){
        let count = 1;
        if(!nums.has(value-1)) {
            let x = value + 1;
            while(nums.has(x)) {
                x = x + 1;
                count++;
            }
            max = Math.max(count,max);
        }
    }
    return max;
};