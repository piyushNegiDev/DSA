/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const ans = [];

  let start = nums[0];
  let end;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] + 1 === nums[i + 1]) {
      end = nums[i + 1];
    } else {
      if (end || end === 0) {
        ans.push(`${start}->${end}`);
        start = nums[i + 1];
        end = "";
      } else {
        ans.push(`${start}`);
        start = nums[i + 1];
      }
    }
  }

  return ans;
};