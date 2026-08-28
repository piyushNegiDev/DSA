/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortEvenOdd = function(nums) {
    let odd = [];
    let even = [];
    let n = nums.length;

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) even.push(nums[i]);
        else odd.push(nums[i]);
    }

    odd.sort((a, b) => b - a);
    even.sort((a, b) => a - b);

    let evenIndex = 0;
    let oddIndex = 0;

    // let ans = [];

    for(let i = 0; i < n; i++) {
        if(i % 2 === 0) {
            nums[i] = even[evenIndex];
            // ans.push(even[evenIndex]);
            evenIndex++;
        } else {
            nums[i] = odd[oddIndex];
            // ans.push(odd[oddIndex]);
            oddIndex++;
        }
    }

    return nums;
};