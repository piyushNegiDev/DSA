/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // let map = new Map();
    let xor = 0
    for(let i = 0; i < nums.length;i++){
        // map.set(nums[i], (map.get(nums[i]) || 0) + 1);
        xor = xor ^ nums[i];
    }
    return xor;
    // console.log(map);
    // for (const [key, value] of map) {
    //     if(value === 1) return key;
    // }
};