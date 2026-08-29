/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  let n = nums.length;
  let pairs = [];

  for (let i = 0; i < n; i++) {
    pairs.push([nums[i], i]);
  }

  pairs.sort((a, b) => a[0] - b[0]);

  let ans = new Array(n);
  let groupStart = 0;

  for (let i = 1; i <= n; i++) {
    if (i === n || pairs[i][0] - pairs[i - 1][0] > limit) {
      let groupIndices = [];
      
      for (let k = groupStart; k < i; k++) {
        groupIndices.push(pairs[k][1]);
      }
      groupIndices.sort((a, b) => a - b);

      for (let k = 0; k < groupIndices.length; k++) {
        ans[groupIndices[k]] = pairs[groupStart + k][0];
      }

      groupStart = i;
    }
  }

  return ans;
};