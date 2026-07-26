/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let largest1 = -Infinity;
  let largest2 = -Infinity;
  let largest3 = -Infinity;

  let smallest1 = Infinity;
  let smallest2 = Infinity;

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > largest1) {
        largest3 = largest2;
        largest2 = largest1;
        largest1 = nums[i]
    } else if (nums[i] > largest2) {
        largest3 = largest2;
        largest2 = nums[i];
    } else if (nums[i] > largest3) {
        largest3 = nums[i];
    }

    if(nums[i] < smallest1) {
        smallest2 = smallest1;
        smallest1 = nums[i]
    } else if (nums[i] < smallest2) {
        smallest2 = nums[i];
    }
  }
  
  let max1 = largest1 * largest2 * largest3;
  let max2 = smallest1 * smallest2 * largest1;

  console.log(largest1,largest2,largest3,smallest1,smallest2,max1,max2);

  return Math.max(max1,max2);
};