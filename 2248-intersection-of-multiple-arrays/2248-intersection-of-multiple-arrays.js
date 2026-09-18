/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let map = new Map();
    let ans = [];

    let n = nums.length;

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < nums[i].length; j++) {
            let elem = nums[i][j];
            map.set(elem, (map.get(elem) || 0) + 1);
            if(map.get(elem) === n) ans.push(elem);
        }
    }
    
    return ans.sort((a, b) => a - b);
};