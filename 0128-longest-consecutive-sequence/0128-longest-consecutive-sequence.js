/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    if(nums.length === 0) return 0;

    nums = new Set([...nums]);
    let count = 1;
    let max = 1;

    for(const value of nums){
        if(nums.has(value-1)) {
            continue;
        } else if (nums.has(value+1)) {
            let x = value + 1;
            while(nums.has(x)) {
                x = x + 1;
                count++;
            }
            max = Math.max(count,max);
        }
        count = 1;
    }
    return max;
};