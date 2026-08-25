/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(nums) {
    let check = 0;

    for(let i = 1; i < nums.length; i++) {
        if(nums[i - 1] > nums[i]) {
            check++;
        }
    }

    if(check === 0) return true;
    if(check === 1 && nums[0] >= nums[nums.length - 1]) return true;
    return false;
};