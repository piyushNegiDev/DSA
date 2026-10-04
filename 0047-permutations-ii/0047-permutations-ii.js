/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var getPermutations = function(arr, index, ans) {
  if (index === arr.length) {
    ans.push([...arr]);
    return;
  }

  let set = new Set();

  for (let i = index; i < arr.length; i++) {
    if(!set.has(arr[i])) {
        set.add(arr[i]);
        [arr[i], arr[index]] = [arr[index], arr[i]]
        getPermutations(arr, index + 1, ans);
        [arr[i], arr[index]] = [arr[index], arr[i]]
    }
  }
}

var permuteUnique = function(arr) {
    let ans = [];
    getPermutations(arr, 0, ans);
    return ans;
};