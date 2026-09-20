/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findMax = function(arr) {
    let colIndex = -1;
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            colIndex = i;
        }
    }

    return colIndex;
} 

var findPeakGrid = function(mat) {
    let low = 0;
    let high = mat.length - 1;

    while(low <= high) {
        let mid = Math.floor((low + high) / 2);

        let col = findMax(mat[mid]);
        let top = mid - 1 >= 0 ? mat[mid - 1][col] : -1;
        let bottom = mid + 1 <= mat.length - 1 ? mat[mid + 1][col] : -1;

        if(top < mat[mid][col] && mat[mid][col] > bottom) return [mid, col];
        else if (mat[mid][col] < top) high = mid - 1;
        else low = mid + 1;
    }
};