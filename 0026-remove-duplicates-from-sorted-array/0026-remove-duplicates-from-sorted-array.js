/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(arr) {
    let i = 0;
        for(let j = 1;j<arr.length;j++){
            if(arr[j]!==arr[i]){
                arr[i+1] = arr[j];
                i++;
            }
        }
        return i+1
};