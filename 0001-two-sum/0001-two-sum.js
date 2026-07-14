/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (arr, target) {
  const numMap = {};
  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (complement in numMap) {
      return [numMap[complement], i];
    }
    numMap[arr[i]] = i;
  }
};