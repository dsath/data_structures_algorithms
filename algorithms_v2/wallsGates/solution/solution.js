const { test } = require("../../TEST/test");
const { testCases, additionalInfo } = require("../test/testCases");

const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

test(wallsAndGates, testCases, additionalInfo);

function dfs(grid, row, col, count) {
  if (
    row < 0 ||
    row >= grid.length ||
    col < 0 ||
    col >= grid[0].length ||
    count > grid[row][col]
  )
    return;
  grid[row][col] = count;
  for (let i = 0; i < directions.length; i++) {
    const currentDir = directions[i];
    dfs(grid, row + currentDir[0], col + currentDir[1], count + 1);
  }
}

function wallsAndGates(rooms) {
  for (let row = 0; row < rooms.length; row++) {
    for (let col = 0; col < rooms[0].length; col++) {
      if (rooms[row][col] === GATE) dfs(rooms, row, col, 0);
    }
  }

  return rooms;
}
