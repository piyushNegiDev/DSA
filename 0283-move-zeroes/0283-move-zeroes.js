/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
    }
  }
  return arr;
};