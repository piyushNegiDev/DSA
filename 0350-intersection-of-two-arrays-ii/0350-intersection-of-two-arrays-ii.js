/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = new Map();
    let ans = [];
    let shorter;
    let greater;

    if(nums1.length < nums2.length) {
        shorter = nums1;
        greater = nums2;
    } else {
        shorter = nums2;
        greater = nums1;
    }

    for(let i = 0; i < shorter.length; i++) {
        map.set(shorter[i], (map.get(shorter[i]) || 0) + 1);
    }

    for(let i = 0; i < greater.length; i++) {
        if(map.has(greater[i]) && map.get(greater[i]) > 0) {
            ans.push(greater[i]);
            map.set(greater[i], (map.get(greater[i])) - 1);
        }
    }

    return ans;
};