/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[low] <= nums[high]) {
            break;
        }

        if(nums[low] <= nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    

    return nums[low];
};