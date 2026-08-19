/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [];
    let map = new Map();

    for (let i = 0; i < nums2.length; i++) {
        while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
            let popElem = stack.pop();
            map.set(popElem, nums2[i]);
        }
        stack.push(nums2[i]);
    }

    for(let i = 0; i < stack.length; i++) {
        map.set(stack[i], -1);
    }

    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]); 
    }

    return nums1;
};