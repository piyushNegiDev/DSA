/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var helper = function(nums, target, targetArr, index, sum, ans) {
    if(sum === target) {
        ans.push([...targetArr]);
        return;
    }
    if(sum > target) {
        return;
    }

    for(let i = index; i < nums.length; i++) {
        targetArr.push(nums[i]);
        helper(nums, target, targetArr, i, sum + nums[i], ans);
        targetArr.pop();
    }
}

var combinationSum = function(candidates, target) {
    let ans = [];
    helper(candidates, target, [], 0, 0, ans);
    return ans;
};