/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => {return a[0]-b[0]});
    
    let output = [];
    let start = intervals[0][0];
    let end = intervals[0][1];
    for(let i=1; i<intervals.length; i++) {
        if(end >= intervals[i][0]) {
            end = Math.max(end, intervals[i][1]);
        } else {
            output.push([start, end]);
            start = intervals[i][0];
            end = intervals[i][1];
        }
        
    }
    output.push([start, end]);
    return output;
};