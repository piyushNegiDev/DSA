/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let ans = Infinity;
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(nums[low] === nums[mid] && nums[mid] === nums[high]) {
            ans = Math.min(ans, nums[low]);
            low++;
            high--;
            continue;
        }

        if(nums[mid] > nums[high]){
            ans = Math.min(ans, nums[high])
            low = mid + 1;
        } else if (nums[mid] < nums[high]) {
            ans = Math.min(ans, nums[mid]);
            high = mid;
        } else {
            high--;
        }
    }
    
    return ans;
};