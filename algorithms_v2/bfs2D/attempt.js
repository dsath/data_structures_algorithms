const { test } = require("./test/test.js");

const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1], //left
];

test(fn);
function fn(matrix) {
  let seen = new Array(matrix.length)
    .fill(1)
    .map(() => new Array(matrix[0].length).fill(false));

  let values = [];
  let queue = [[0, 0]];
  seen[0][0] = true;

  while (queue.length > 0) {
    const currentPosition = queue.shift();

    values.push(matrix[currentPosition[0]][currentPosition[1]]);

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const [tryY, tryX] = [
        currentPosition[0] + direction[0],
        currentPosition[1] + direction[1],
      ];

      if (
        tryY < matrix.length &&
        tryY >= 0 &&
        tryX < matrix[0].length &&
        tryX >= 0 &&
        !seen[tryY][tryX]
      ) {
        queue.push([tryY, tryX]);
        seen[tryY][tryX] = true;
      }
    }
  }
  return values;
}
