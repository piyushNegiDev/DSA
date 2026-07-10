/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
   let sum = 0;
  let product = 1;
  let lastDigit;
  while (n > 0) {
    lastDigit = Math.floor(n % 10);
    product *= lastDigit;
    sum += lastDigit;
    n = Math.floor(n / 10);
  }
  console.log(product, sum);
  return product - sum;
};