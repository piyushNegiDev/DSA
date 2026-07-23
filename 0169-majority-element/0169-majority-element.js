/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let elem;
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    if(count === 0) {
        elem = nums[i];
        count++;
    } else if (elem === nums[i]) {
        count++;
    } else {
        count--;
    }
  }

  count = 0;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] === elem) {
        count++
    }
  }
  
  if(count > nums.length / 2) return elem;
  return -1;
};