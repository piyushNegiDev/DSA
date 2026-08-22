/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
  let left = 0, right = h.length - 1;
  let leftMax = 0, rightMax = 0;
  let water = 0;

  while (left < right) {
    if (h[left] <= h[right]) {
      leftMax = Math.max(h[left], leftMax);
      water += leftMax - h[left];
      left++;
    } else {
      rightMax = Math.max(h[right], rightMax);
      water += rightMax - h[right];
      right--;
    }
  }

  return water;
};