/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    
    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[mid] < nums[mid + 1]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
};