/**
 * @param {number} num
 * @return {number}
 */
var countEven = function (nums) {
  let count = 0;
  for (let num = 1; num <= nums; num++) {
    let sum = 0;
    let n = num;
    while (n > 0) {
      sum += n % 10;
      n = Math.trunc(n / 10);
    }
    if (sum % 2 === 0) {
      count++;
    }
  }
  return count;
};