/**
 * @param {number} n
 * @return {number}
 */
let store = {};
var tribonacci = function(n) {
    if (store[n]) {
    return store[n];
  }
  if (n === 0) return 0;
  if (n === 2 || n === 1) return 1;
  store[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
  return store[n];
};