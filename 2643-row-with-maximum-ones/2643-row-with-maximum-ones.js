/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    let maxCount = 0;
    let index = 0;

    for(let i = 0; i < mat.length; i++) {
        let count = 0;

        for(let j = 0; j < mat[i].length; j++) {
            if(mat[i][j] === 1) count++;
        }

        if(count > maxCount) {
            index = i;
            maxCount = count;
        }
    }

    return [index, maxCount];
};