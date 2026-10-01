/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getPermutations = function(arr, index, ans) {
  if (index === arr.length) {
    ans.push([...arr]);
    return;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[i], arr[index]] = [arr[index], arr[i]]
    getPermutations(arr, index + 1, ans);
    [arr[i], arr[index]] = [arr[index], arr[i]]
  }
}

var permute = function(arr) {
    let ans = [];
    getPermutations(arr, 0, ans);
    return ans;
};