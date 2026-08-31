/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let slow = 0;
    let fast = 0;
    
    while(slow < nums.length && fast < nums.length) {
        if(nums[slow] === 0 && nums[fast] !== 0) {
            let temp = nums[slow];
            nums[slow] = nums[fast];
            nums[fast] = temp;
            slow++;
            fast++;
        }

        while(nums[slow] !== 0 && slow < nums.length) {
            slow++;
        }

        fast = slow;

        while(nums[fast] === 0 && fast < nums.length) {
            fast++;
        }
    }
};