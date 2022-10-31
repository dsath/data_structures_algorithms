const { test } = require("../TEST/test");
const { testCases, additionalInfo } = require("./test/testCases");

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
  const queue = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      const element = matrix[y][x];
      if (element === GATE) queue.push([y, x]);
    }
  }

  while (queue.length > 0) {
    const [row, col] = queue.shift();
    dfs(matrix, row, col, 0);
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
    const [tryY, tryX] = [row + direction[0], col + direction[1]];

    dfs(matrix, tryY, tryX, count + 1);
  }
}
