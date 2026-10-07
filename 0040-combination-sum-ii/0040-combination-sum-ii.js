/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var helper = function(nums, target, currentArr, index, sum, ans) {
    if(sum === target) {
        ans.push([...currentArr]);
        return;
    }
    if(sum > target) {
        return;
    }

    let previous = -1

    for(let i = index; i < nums.length; i++) {
        if(previous !== nums[i]) {
            currentArr.push(nums[i]);
            helper(nums, target, currentArr, i + 1, sum + nums[i], ans);
            currentArr.pop();
            previous = nums[i];
        }
    }
}

var combinationSum2 = function(candidates, target) {
    candidates.sort((a, b) => a - b);
    console.log(candidates);
    let ans = [];
    helper(candidates, target, [], 0, 0, ans)
    return ans;
};