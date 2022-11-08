const { test } = require("../TEST/test.js");
const { testCases, additionalInfo } = require("./test/testCases.js");
const WALL = -1;
const GATE = 0;
const EMPTY = 2147483647;
const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

test(fn, testCases, additionalInfo);

function fn(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === GATE) dfs(matrix, y, x, 0);
    }
  }
  return matrix;
}

function dfs(matrix, row, col, count) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    count > matrix[row][col]
  )
    return;

  matrix[row][col] = count;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    dfs(matrix, row + direction[0], col + direction[1], count + 1);
  }
  // we want to change value in cell if it is greater than count
  // if cell is reached that is less than current count, just return
  // all adjacent cells to that cell will also be smaller than the current
  // count
}
