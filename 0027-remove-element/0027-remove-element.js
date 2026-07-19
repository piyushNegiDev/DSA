/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(arr, val) {
    let count = 0;
    let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== val) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++;
      count++;
    }
  }
  return count;
};