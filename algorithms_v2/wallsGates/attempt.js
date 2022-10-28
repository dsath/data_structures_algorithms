const { test } = require("../TEST/test");
const { testCases, additionalInfo } = require("./test/testCases");

const GATE = 0;

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

test(wallGates, testCases, additionalInfo);

function wallGates(matrix) {
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === GATE) {
        dfs(matrix, y, x, 0);
      }
    }
  }
  return matrix;
}

function dfs(matrix, row, col, stepCount) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    stepCount > matrix[row][col]
  )
    return;

  matrix[row][col] = stepCount;
  for (let i = 0; i < directions.length; i++) {
    const direction = directions[i];
    const [tryY, tryX] = [row + direction[0], col + direction[1]];

    dfs(matrix, tryY, tryX, stepCount + 1);
  }
}
