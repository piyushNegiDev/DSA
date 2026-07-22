/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
 let ans = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    if ((n >= 10 && n <= 99) || (n >= 1000 && n <= 9999) || n === 100000) {
      ans++;
    }
  }
  return ans;
};