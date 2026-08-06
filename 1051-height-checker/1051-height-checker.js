/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (arr) {
  let expected = [...arr].sort((a, b) => a - b);
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (expected[i] !== arr[i]) count++;
  }

  return count;
};