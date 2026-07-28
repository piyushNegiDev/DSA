/**
 * @param {number} numRows
 * @return {number[][]}
 */
var row = function (n) {
  let ans = 1;
  let row = [ans];

  for (let i = 1; i < n; i++) {
    ans = ans * (n - i);
    ans = Math.floor(ans / i);
    row.push(ans);
  }
  
  return row;
};

var generate = function (numRows) {
  let ans = [];

  for (let i = 1; i <= numRows; i++) {
    ans.push(row(i));
  }

  return ans;
};