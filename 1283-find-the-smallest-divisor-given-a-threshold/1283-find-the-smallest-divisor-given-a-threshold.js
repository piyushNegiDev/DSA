/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var divisorSum = function (nums, divisor) {
    let sum = 0;

    for(let i = 0; i < nums.length; i++) {
        sum += Math.ceil(nums[i] / divisor);
    }

    console.log(sum);

    return sum;
}

var smallestDivisor = function(nums, threshold) {
    let low = 1;
    let high = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        high = Math.max(high, nums[i]);
    }

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        if(divisorSum(nums, mid) <= threshold) {
            high = mid - 1;
        } else {
            low = mid + 1
        }
    }

    return low;
};