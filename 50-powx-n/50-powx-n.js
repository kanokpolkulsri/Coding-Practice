/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if(n===0) return 1;
    let m = Math.abs(n);
    let result = m%2===0 ? myPow(x*x, m/2) : x*myPow(x*x, (m-1)/2);
    return n<0 ? 1/result : result;
};