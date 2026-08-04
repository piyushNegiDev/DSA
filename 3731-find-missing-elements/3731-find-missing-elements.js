/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findMissingElements = function (nums) {
  let largest = nums[0];
  let smallest = nums[0];
  let ans = [];
  let set = new Set();

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > largest) {
        largest = nums[i];
    } else if(smallest > nums[i]) {
        smallest = nums[i]
    }
    set.add(nums[i]);
  }

  for (let i = smallest; i <= largest; i++) {
    if (!set.has(i)) {
      ans.push(i);
    }
  }

  return ans;
};