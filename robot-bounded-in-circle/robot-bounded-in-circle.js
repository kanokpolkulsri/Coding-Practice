/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function(instructions) {
    let dir=0, x=0, y=0;
    for(let i of instructions){
        if(i=='L') dir++;
        else if(i=='R') dir+=3;
        else {
            switch(dir%4){
                case 0: y++; break;
                case 1: x++; break;
                case 2: y--; break;
                case 3: x--; break;
            }
        }
    }
    return dir%4 !=0 || (!x && !y);
};