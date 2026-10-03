/**
 * @param {number} n
 * @return {number}
 */
var clumsy = function(n) {
    let cal = n;
    let ans = 0;
    let opCount = 1;
    
    for(let i = n - 1; i > 0; i--) {
        if(opCount === 1) {
            cal *= i; 
        } else if (opCount === 2) {
            cal = Math.trunc(cal / i)
        } else if (opCount === 3) {
            cal += i;
        } else {
            ans += cal;
            cal = -i;
            opCount = 0;
        }

        opCount++;
    }

    return ans += cal;
};