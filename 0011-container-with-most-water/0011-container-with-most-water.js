/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;

    let maxArea = 0;
    let left = 0;
    let right = n - 1;

    while(left < right) {
        let w = right - left;
        let h = Math.min(height[left], height[right]);

        maxArea = Math.max(h * w, maxArea);

        height[left] < height[right] ? left++ : right--;
    }

    return maxArea;
};