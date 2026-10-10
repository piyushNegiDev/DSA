/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k1
 * @param {number} k2
 * @return {number}
 */
var minSumSquareDiff = function(nums1, nums2, k1, k2) {
    let arr = [];
    let budget = k1 + k2;

    for(let i = 0; i < nums1.length; i++) {
        let diff = Math.abs(nums1[i] - nums2[i]);
        arr.push(diff);
    }
    
    let max = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
        }
    }

    let cnt = Array.from({length : max + 1}, () => 0);

    for(let i = 0; i < arr.length; i++) {
        cnt[arr[i]]++;
    }

    let index = max;
    while(budget > 0 && index > 0) {
        let c = cnt[index];

        if(budget >= c) {
            cnt[index - 1] += c;
            cnt[index] = 0;
            budget -= c;
        } else {
            cnt[index - 1] += budget;
            cnt[index] -= budget;
            budget = 0;
        }
        index--;
    }

    let sum = 0;
    for(let i = 0; i <= max; i++) {
        sum += cnt[i] * i * i;
    }

    return sum;
};