/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function(nums, limit) {
  let n = nums.length;
  let pairs = [];

  for(let i = 0; i < n; i++) {
    pairs.push([nums[i], i]);
  }  

  pairs.sort((a, b) => a[0] - b[0]);

  let start = 0;

  for(let i = 1; i <= n; i++) {
    let indices = []; 
    
    if(i === n || pairs[i][0] - pairs[i - 1][0] > limit) {
        for(let j = start; j < i; j++) {
            indices.push(pairs[j][1]);
        }

        indices.sort((a, b) => a - b);

        for(let j = start; j < i; j++) {
            nums[indices[j - start]] = pairs[j][0];
        }
        start = i;
    }
  }

  return nums;
};