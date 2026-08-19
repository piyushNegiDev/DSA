/**
 * @param {number} n
 * @param {number[][]} reservedSeats
 * @return {number}
 */
var isOccupied = function (seat, set) {
  let ans = false;

  for (let i = 0; i < seat.length; i++) {
    ans = set.has(seat[i]);

    if (ans) {
      return ans;
    }
  }

  return ans;
};

var maxNumberOfFamilies = function (n, r) {
  let map = new Map();

  for (let i = 0; i < r.length; i++) {
    if (!map.has(r[i][0])) {
      map.set(r[i][0], new Set([r[i][1]]));
    } else {
      map.get(r[i][0]).add(r[i][1]);
    }
  }

  let leftGroup = [2, 3, 4, 5];
  let middleGroup = [4, 5, 6, 7];
  let rightGroup = [6, 7, 8, 9];

  let ans = 2 * (n - map.size);

  for (let [row, set] of map) {
    if (!isOccupied(leftGroup, set) && !isOccupied(rightGroup, set)) {
      ans += 2;
    } else if (
      !isOccupied(leftGroup, set) ||
      !isOccupied(middleGroup, set) ||
      !isOccupied(rightGroup, set)
    ) {
      ans += 1;
    }
  }

  return ans;
};