/**
 * @param {number} n
 * @return {number}
 */
var gcdOfOddEvenSums = function (n) {
  let oddSum = 0;
  let evenSum = 0;
  for (let i = 1; i <= 2 * n; i++) {
    if (i % 2 !== 0) {
      oddSum += i;
    } else {
      evenSum += i;
    }
  }

  while (oddSum > 0 && evenSum > 0) {
    if (oddSum > evenSum) oddSum %= evenSum;
    else evenSum %= oddSum;
  }
    if (oddSum === 0) return evenSum;
    return oddSum;
};