/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
      let digits = 0;
      let n = nums[i];
      while (n > 0) {
        digits++;
        n = Math.trunc(n / 10);
      }
      if (digits % 2 === 0) {
        ans++;
      }
    }
    return ans;
};