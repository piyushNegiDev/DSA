/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function (nums) {
  let ans = [];
  let temp = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 10) {
      ans.push(nums[i]);
    } else {
      let n = nums[i];
      while (n > 0) {
        let lastDigit = n % 10;
        temp.push(lastDigit);
        n = Math.trunc(n / 10);
      }
      temp.reverse();
      ans.push(...temp);
      temp.length = 0;
    }
  }
  return ans;
};
