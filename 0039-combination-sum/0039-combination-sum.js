/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var helper = function(nums, target, targetArr, index, ans) {
    let sum = 0;

    for(let i = 0; i < targetArr.length; i++) {
        sum += targetArr[i];
    }

    if(sum === target) {
        ans.push([...targetArr]);
        return;
    }
    if(sum > target) {
        return;
    }

    for(let i = index; i < nums.length; i++) {
        targetArr.push(nums[i]);
        helper(nums, target, targetArr, i, ans);
        targetArr.pop();
    }
}

var combinationSum = function(candidates, target) {
    let ans = [];
    helper(candidates, target, [], 0, ans);
    return ans;
};