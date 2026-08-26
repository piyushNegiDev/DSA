/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid - 1] !== nums[mid] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }

        if(nums[low - 1] !== nums[low] && nums[low] !== nums[low + 1]) {
            return nums[low];
        } else {
            low++;
        }

        if(nums[high - 1] !== nums[high] && nums[high] !== nums[high + 1]) {
            return nums[high];
        } else {
            high--;
        }
    }
};