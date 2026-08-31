/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var pow = function (x, n) {
  if (n === 0) return 1;
  let half = pow(x, Math.floor(n / 2));

  if (n % 2 === 0) return half * half;
  else return x * half * half;
};

var myPow = function (x, n) {
  let change = false;
  if (n < 0) {
    n = Math.abs(n);
    change = true;
  }
  let ans = pow(x, n);

  if (change) return 1 / ans;

  return ans;
};