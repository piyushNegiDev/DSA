/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var canBeTheAns = function(nums, mid, k) {
    let sum = 0;
    let elems = 1;

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > mid) return false;

        if(sum + nums[i] <= mid) {
            sum += nums[i];
        } else {
            elems++;
            sum = nums[i];
        }
    }

    return elems <= k;
}

var splitArray = function(nums, k) {
    let max = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        max = Math.max(max, nums[0]);
    }

    let low = max;
    let high = sum;
    let ans = 0;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(canBeTheAns(nums, mid, k)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};