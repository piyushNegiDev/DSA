/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var firstStableIndex = function(nums, k) {
    let n = nums.length;
    let ans = -1;
    
    let max = nums[0];
    let maxPrefArr = Array(n).fill(0);

    for(let i = 0; i < n; i++) {
        max = Math.max(max, nums[i]);
        maxPrefArr[i] = max;
    }

    let min = nums[n - 1];

    for(let i = nums.length - 1; i >= 0; i--) {
        min = Math.min(min, nums[i]);

        if(maxPrefArr[i] - min <= k) ans = i;
    }

    return ans;
};