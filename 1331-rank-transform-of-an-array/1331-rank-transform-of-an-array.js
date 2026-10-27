/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  let temp = [...arr].sort((a, b) => a - b);

  let rank = 1;

  let map = new Map();
  map.set(temp[0], rank);

  for (let i = 1; i < temp.length; i++) {
    if (temp[i - 1] < temp[i]) {
      map.set(temp[i], ++rank);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = map.get(arr[i]);
  }

  return arr;
};