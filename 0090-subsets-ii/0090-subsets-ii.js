/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getAllSubsets = function(nums, ans, index, subSets) {
    if(index === nums.length) {
        subSets.push([...ans]);
        return;
    }

    ans.push(nums[index]);
    getAllSubsets(nums, ans, index + 1, subSets);

    let popped = ans.pop();
    if(ans[ans.length - 1] !== popped) {
        getAllSubsets(nums, ans, index +  1, subSets);
    }
}

var subsetsWithDup = function(nums) {
    nums.sort((a, b) => a - b);

    let subSets = [];
    let ans = [];
    let index = 0;

    getAllSubsets(nums, ans, index, subSets);

    return subSets;
};