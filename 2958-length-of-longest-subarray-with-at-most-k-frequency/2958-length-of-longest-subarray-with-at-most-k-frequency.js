/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function(nums, k) {
    let map = new Map();
    let max = 0
    let left = 0;

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);

        while(map.get(nums[i]) > k) {
            map.set(nums[left], map.get(nums[left]) - 1);
            left++;
        }

        max = Math.max(max, i - left + 1);
    }

    return max;
};