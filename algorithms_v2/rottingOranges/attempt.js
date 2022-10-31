const { test } = require("./test/test");

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

test(fn);

function fn(matrix) {
  let freshOranges = 0;
  const queue = [];
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === ROTTEN) {
        queue.push([y, x]);
      } else if (matrix[y][x] === FRESH) {
        freshOranges++;
      }
    }
  }

  let currentQueue = queue.length;
  let totalMinutes = 0;
  while (queue.length > 0) {
    if (currentQueue === 0) {
      currentQueue = queue.length;
      totalMinutes++;
    }

    const [row, col] = queue.shift();
    currentQueue--;

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const [tryY, tryX] = [row + direction[0], col + direction[1]];
      if (
        tryY < 0 ||
        tryY >= matrix.length ||
        tryX < 0 ||
        tryX >= matrix[0].length
      )
        continue;

      if (matrix[tryY][tryX] === FRESH) {
        freshOranges--;
        matrix[tryY][tryX] = ROTTEN;
        queue.push([tryY, tryX]);
      }
    }
  }

  return freshOranges === 0 ? totalMinutes : -1;
}
