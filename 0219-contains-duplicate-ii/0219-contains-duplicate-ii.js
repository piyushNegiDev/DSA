/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(map.has(nums[i])) {
            let index = map.get(nums[i]);
            if(nums[index] === nums[i] && Math.abs(index - i) <= k) return true;
            map.set(nums[i], i);
        } else {
            map.set(nums[i], i);
        }
    } 

    return false;
};