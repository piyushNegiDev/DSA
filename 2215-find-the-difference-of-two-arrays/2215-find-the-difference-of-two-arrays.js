/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let map1 = new Map();
    let map2 = new Map();

    let distOfNums1 = [];
    let distOfNums2 = [];

    for(let i = 0; i < nums1.length; i++) {
        map1.set(nums1[i], 0);
    }

    for(let i = 0; i < nums2.length; i++) {
        map2.set(nums2[i], 0);
    }

    for(let i = 0; i < nums1.length; i++) {
        if(!map2.has(nums1[i]) && !distOfNums1.includes(nums1[i])) distOfNums1.push(nums1[i]);
    }

    for(let i = 0; i < nums2.length; i++) {
        if(!map1.has(nums2[i]) && !distOfNums2.includes(nums2[i])) distOfNums2.push(nums2[i]);
    }

    return [distOfNums1, distOfNums2];
};