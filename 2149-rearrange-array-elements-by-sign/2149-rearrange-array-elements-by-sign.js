/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function(nums) {
    let i = 0;
    let j = 0;
    let ans = [];

    while (i < nums.length && j < nums.length) {
        if(nums[i] < 0) {
            i++;
            continue;
        } 
        if(nums[j] > 0) {
            j++
            continue;
        }
        if(nums[i] > 0 && nums[j] < 0) {
            ans.push(nums[i]);
            ans.push(nums[j]);
            i++;
            j++;
        }
    }
    return ans;
};