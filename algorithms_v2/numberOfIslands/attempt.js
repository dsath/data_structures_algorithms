const { test } = require("./test/test");

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const LAND = "1";
const WATER = "0";

test(fn);

function fn(matrix) {
  let numIslands = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === LAND) {
        console.log("hi");
        numIslands++;
        matrix[y][x] = WATER;
        const queue = [[y, x]];

        while (queue.length > 0) {
          const [posY, posX] = queue.pop();

          for (let i = 0; i < directions.length; i++) {
            const direction = directions[i];
            const [tryY, tryX] = [posY + direction[0], posX + direction[1]];

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

  return numIslands;
}
