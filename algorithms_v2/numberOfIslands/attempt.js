const { test } = require("./test/test");

var directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
test(numIslands);
function numIslands(matrix) {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === "1") {
        ++count;
        traverseIsland(matrix, [y, x]);
      }
    }
  }

  return count;
}

function traverseIsland(matrix, position) {
  const queue = [position];
  matrix[position[0]][position[1]] = "0";

  while (queue.length > 0) {
    let currentPosition = queue.shift();

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const [tryY, tryX] = [
        currentPosition[0] + direction[0],
        currentPosition[1] + direction[1],
      ];

      if (
        tryY < 0 ||
        tryY >= matrix.length ||
        tryX < 0 ||
        tryX >= matrix[0].length
      )
        continue;

      if (matrix[tryY][tryX] === "1") {
        queue.push([tryY, tryX]);
        matrix[tryY][tryX] = "0";
      }
    }
  }
}
