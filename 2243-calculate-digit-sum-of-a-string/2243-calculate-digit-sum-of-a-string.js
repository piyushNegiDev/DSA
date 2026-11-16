/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function(s, k) {
    if(s.length <= k) return s;

    var sum = function(st) {
        let sum = 0;

        while(st.length > 0) {
            sum += Number(st.slice(0, 1));
            st = st.slice(1);
        }

        return String(sum);
    }

    while(s.length > k) {
        let ans = '';
        while(s.length > 0) {
            let st = s.slice(0, k);
            ans += sum(st);           
            s = s.slice(k);
        }
        s = ans;
    }

    return s;
};