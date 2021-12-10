/**
 * @param {character[][]} grid
 * @return {number}
 */

findIsland = (grid, row, col) => {
    if(row >= grid.length || row < 0 || col >= grid[0].length || col < 0 || grid[row][col] === '0') return;
    
    grid[row][col] = '0'
    findIsland(grid, row, col+1);
    findIsland(grid, row+1, col);
    findIsland(grid, row, col-1);
    findIsland(grid, row-1, col);
}

var numIslands = function(grid) {
    let island = 0;
    for(let i=0; i<grid.length; i++) {
        for(let j=0; j<grid[0].length; j++) {
            if(grid[i][j] === '1') {
                island += 1;
                findIsland(grid, i, j);
            }
        }
    }
    return island;
};