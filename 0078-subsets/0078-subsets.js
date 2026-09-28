/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let ans = [];
    let n = nums.length;
    let numOfSub = Math.pow(2, n);

    for(let i = 0; i < numOfSub; i++) {
        let sub = [];
        for(let j = 0; j < n; j++) {
            if(i & (1 << j)) sub.push(nums[j]);
        }
        ans.push(sub);
    }

    return ans;
};