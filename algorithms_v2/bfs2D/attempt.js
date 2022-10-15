const { test } = require("./test/test");

var directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
function fn(matrix) {
  const seen = new Array(matrix.length)
    .fill(1)
    .map(() => new Array(matrix[0].length).fill(false));

  const queue = [[0, 0]];
  const list = [];

  while (queue.length > 0) {
    const currentPos = queue.shift();
    const row = currentPos[0];
    const col = currentPos[1];
    if (
      row < 0 ||
      row >= matrix.length ||
      col < 0 ||
      col >= matrix[0].length ||
      seen[row][col] === true
    )
      continue;
    list.push(matrix[row][col]);
    seen[row][col] = true;

    for (let i = 0; i < directions.length; i++) {
      const direction = directions[i];
      const newPosition = [row + direction[0], col + direction[1]];
      queue.push(newPosition);
    }
  }

  return list;
}
test(fn);
