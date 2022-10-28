const { test } = require("./test/test");

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const ROTTEN = 2;
const FRESH = 1;
const EMPTY = 0;

test(rottingOranges);

function rottingOranges(matrix) {
  let freshOranges = 0;
  const queue = [];
  let minutes = 0;

  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[0].length; x++) {
      if (matrix[y][x] === ROTTEN) {
        queue.push([y, x]);
      } else if (matrix[y][x] === FRESH) {
        freshOranges++;
      }
    }
  }

  let currentQueueLength = queue.length;
  while (queue.length > 0) {
    if (currentQueueLength === 0) {
      ++minutes;
      currentQueueLength = queue.length;
    }

    let pos = queue.shift();
    currentQueueLength--;

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      let [tryY, tryX] = [pos[0] + direction[0], pos[1] + direction[1]];
      if (
        tryY < 0 ||
        tryY >= matrix.length ||
        tryX < 0 ||
        tryX >= matrix[0].length
      )
        continue;

      if (matrix[tryY][tryX] === FRESH) {
        queue.push([tryY, tryX]);
        matrix[tryY][tryX] = ROTTEN;
        freshOranges--;
      }
    }
  }
  return freshOranges !== 0 ? -1 : minutes;
}
