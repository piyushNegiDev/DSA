/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = new Map();

    for(let i = 0; i < nums2.length; i++) {
        if(i === nums2.length - 1) {
            map.set(nums2[i], -1);
            break;
        }

        for(let j = i + 1; j < nums2.length; j++) {
            if(nums2[i] < nums2[j]) {
                map.set(nums2[i], nums2[j]);
                break;
            } else if (j === nums2.length - 1) {
                map.set(nums2[i], -1);
            }
        }
    }

    for(let i = 0; i < nums1.length; i++) {
        nums1[i] = map.get(nums1[i]); 
    }

    return nums1;
};