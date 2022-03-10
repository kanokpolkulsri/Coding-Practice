/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
var superPow = function(a, b) {
    const MOD = 1337;
    let res = 1;
    let pre_a = a%MOD;
    
    for(let j =  b.length - 1; j>=0; j--) {
        let tmp_res = 1;
        for(let i = 0; i<10; i++) {
            if (i === b[j]) {
                res = (tmp_res*res) % MOD;
            } 
            tmp_res = (tmp_res * pre_a)%MOD;
        }
        pre_a = tmp_res;
    }
    return res;
};