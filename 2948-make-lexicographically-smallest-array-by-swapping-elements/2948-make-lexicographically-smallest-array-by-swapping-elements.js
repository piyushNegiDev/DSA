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
  let groups = [];
  let indices = [];

  for(let i = 1; i <= n; i++) {
    if(i === n || pairs[i][0] - pairs[i - 1][0] > limit) {
        let group = [];
        let indice = [];
        for(let j = start; j < i; j++) {
            group.push(pairs[j][0]);
            indice.push(pairs[j][1]);
        }
        groups.push(group);
        indices.push(indice);
        start = i;
    }
  }

  for(let i = 0; i < indices.length; i++) {
    indices[i].sort((a, b) => a - b);
  }

  for(let i = 0; i < groups.length; i++) {
    for(let j = 0; j < groups[i].length; j++) {
        nums[indices[i][j]] = groups[i][j]
    }
  }

  return nums;
};