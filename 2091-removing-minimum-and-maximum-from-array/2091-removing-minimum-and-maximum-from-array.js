/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumDeletions = function(nums) {
    let n = nums.length;
    if(n === 1) return 1;

    let min = 0;
    let max = 0;

    for(let i = 1; i < n; i++) {
        if(nums[i] > nums[max]) max = i;
        if(nums[i] < nums[min]) min = i;
    }

    let removeFromFront = max > min ? max + 1 : min + 1;
    let removeFromBack = max < min ?  n - max : n - min;
    let removeFromBoth = min < max ? (min + 1) + (n - max) : (max + 1) + (n - min);

    return Math.min(removeFromBoth, Math.min(removeFromFront, removeFromBack));
};