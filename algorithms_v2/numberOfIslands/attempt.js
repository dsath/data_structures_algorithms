const { test } = require("./test/test");

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
const WATER = "0";
const LAND = "1";
test(fn);

function fn(matrix) {
  let count = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === LAND) {
        ++count;
        const queue = [[y, x]];
        matrix[y][x] = "0";

        while (queue.length > 0) {
          const currentPos = queue.shift();

          for (let i = 0; i < directions.length; i++) {
            const [tryY, tryX] = [
              currentPos[0] + directions[i][0],
              currentPos[1] + directions[i][1],
            ];

            if (
              tryY < 0 ||
              tryY >= matrix.length ||
              tryX < 0 ||
              tryX >= matrix[0].length
            )
              continue;

            if (matrix[tryY][tryX] === LAND) {
              queue.push([tryY, tryX]);
              matrix[tryY][tryX] = WATER;
            }
          }
        }
      }
    }
  }
  return count;
}
