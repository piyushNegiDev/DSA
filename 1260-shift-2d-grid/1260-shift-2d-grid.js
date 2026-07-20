/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var reverse = function (arr, left, right) {
  while (left < right) {
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--;
  }
};

var rotate = function (arr, k) {
  let n = arr.length;
  k = k % n;
  reverse(arr, 0, n - k - 1);
  reverse(arr, n - k, n - 1);
  reverse(arr, 0, n - 1);
  return arr;
};

var shiftGrid = function(grid, k) { 
  const m = grid.length;
  const n = grid[0].length;
  const total = m * n;
  k %= total;
  let store = [];
  let index = 0;
  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        store.push(grid[i][j]);
    }
  }  

  store = rotate(store,k);

  for(let i = 0; i < grid.length; i++){
    for(let j = 0; j < grid[i].length; j++){
        grid[i][j] = store[index]
        index++;
    }
  }  
  return grid;
};