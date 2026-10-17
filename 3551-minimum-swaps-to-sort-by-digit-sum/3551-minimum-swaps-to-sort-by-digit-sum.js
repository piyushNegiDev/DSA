/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let map = new Map();
    let temp = [...nums];

    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        let sum = 0;
        while(n > 0) {
            sum += n % 10;
            n = Math.floor(n / 10);
        }
        map.set(nums[i], sum);
    }
    
    nums.sort((a, b) => map.get(a) - map.get(b) || a - b);

    let pos = new Map();
    for(let i = 0; i < nums.length; i++) {
        pos.set(temp[i], i);
    }

    let swap = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== temp[i]) {
            let ind = pos.get(nums[i]);

            [temp[i], temp[ind]] = [temp[ind], temp[i]];

            pos.set(temp[i], i);
            pos.set(temp[ind], ind);

            swap++;
        }
    }
    
    return swap;
};