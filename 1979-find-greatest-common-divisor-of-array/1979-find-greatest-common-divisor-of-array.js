/**
 * @param {number[]} nums
 * @return {number}
 */
var GCD = function(largest,smallest){
    while (largest > 0 && smallest > 0){
        if(largest > smallest) largest %= smallest;
        else smallest %= largest;
    }
    if(largest === 0) return smallest;
    return largest;
}

var findGCD = function(arr) {
    let smallest = arr[0];
    let largest = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > largest) {
            largest = arr[i];
        }
        if(arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return GCD(largest,smallest);
};