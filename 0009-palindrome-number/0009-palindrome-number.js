/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  let rev = 0;
  let num = x;
  let lastDigit;
  if (x < 0) return false;
  while (x > 0) {
    lastDigit = x % 10;
    x = Math.floor(x / 10);
    rev = rev * 10 + lastDigit;
  }
  return rev === num;
};