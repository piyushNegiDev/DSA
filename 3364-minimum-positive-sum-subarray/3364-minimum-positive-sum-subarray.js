/**
 * @param {number[]} nums
 * @param {number} l
 * @param {number} r
 * @return {number}
 */
var minimumSumSubarray = function(nums, l, r) {
    let ans = Infinity;

    for(let i = 0; i < nums.length; i++) {
        for(let j = 0; j <= i; j++) {
            let len = i - j + 1; 
            if(len >= l && len <= r) {
                let sum = 0;
                for(let k = j; k <= i; k++) {
                    sum += nums[k];
                }
                if(sum > 0) {
                    ans = Math.min(ans, sum);
                }
            }
        }
    }

    return ans === Infinity ? -1 : ans;
};