/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function(nums, k) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] % k === 0) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        }
    }

    for(let i = 1; i <= nums.length + 1; i++) {
        if(!map.has(k * i)) {
            return k * i;
        }
    }
};