/**
 * @param {string} s
 * @return {number}
 */
let findPalin = (s) => {
    if(s == '') return false;
    
    for(let i=0; i<Math.floor(s.length/2); i++) {
        if(s[i] !== s[s.length-i-1]) return false;
    }
    return true;
}

var countSubstrings = function(s) {
    let tmp = '';
    let count = 0;
    for(let i=0; i<s.length; i++) {
        tmp = s[i];
        for(let j=i; j<s.length; j++) {
            if(j !== i) tmp += s[j];
            if(findPalin(tmp)) count += 1;
        }
        tmp = '';
    }
    return count;
};