/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// var subarraysDivByK = function (nums, k) {
//   let count = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let prefixSum = 0;
//     for (let j = i; j < nums.length; j++) {
//       prefixSum += nums[j];
//       if (prefixSum % k === 0) {
//         count++;
//       }
//     }
//   }
//   return count;
// };
var subarraysDivByK = function (nums, k) {
  let count = 0;
  let map = new Map();
  let prefixSum = 0;

  map.set(0, 1);

  for (let i = 0; i < nums.length; i++) {
    prefixSum += nums[i];
    let remainder = ((prefixSum % k) + k) % k;
    if (map.has(remainder)) {
      count += map.get(remainder);
    }
    map.set(remainder, (map.get(remainder) || 0) + 1);
  }
  return count;
};