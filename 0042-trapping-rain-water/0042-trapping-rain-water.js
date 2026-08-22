/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (h) {
  let left = 0,
    right = h.length - 1;
  let leftMax = 0,
    rightMax = 0;
  let water = 0;

  while (left < right) {
    if (h[left] <= h[right]) {
      let check = leftMax - h[left];
      if (check > 0) water += check;
      leftMax = Math.max(h[left], leftMax);
      left++;
    } else {
      let check = rightMax - h[right];
      if (check > 0) water += check;
      rightMax = Math.max(h[right], rightMax);
      right--;
    }
  }

  return water;
};