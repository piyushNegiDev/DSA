/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let ans = [];

    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    let sortedMap = new Map([...map].sort((a, b) => b[1] - a[1]));

    for(const [key, value] of sortedMap) {
        if(k === 0) break;
        ans.push(key);
        k--;
    }

    return ans;
}; 