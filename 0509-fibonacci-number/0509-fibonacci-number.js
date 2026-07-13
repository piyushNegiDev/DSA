/**
 * @param {number} n
 * @return {number}
 */
 let store = {}
var fib = function(n) {
    if(store[n]) return store[n];
    if(n<=1) return n;
    store[n] = fib(n-1) + fib(n-2);
    return store[n];
};