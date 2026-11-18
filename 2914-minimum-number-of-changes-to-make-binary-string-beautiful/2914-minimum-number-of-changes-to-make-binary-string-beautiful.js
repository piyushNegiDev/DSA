/**
 * @param {string} s
 * @return {number}
 */
var minChanges = function(s) {
    let minChanges = 0;

    while(s.length > 0) {
        let st = s.slice(0, 2);
        let numOfZero = 0;
        let numOfOne = 0;

        if(st[0] === '1') {
            numOfOne++;
        } else {
            numOfZero++;
        }

        if(st[1] === '1') {
            numOfOne++;
        } else {
            numOfZero++;
        }

        minChanges += Math.min(numOfZero, numOfOne);

        s = s.slice(2);
    }

    return minChanges;
};