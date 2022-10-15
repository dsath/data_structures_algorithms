const { test } = require("./test/test");
const directions = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

// set up seen array and calls the function to start the traversal
function fn(matrix) {
  const traversal = [];
  let position = [0, 0];
  let seen = new Array(matrix.length)
    .fill(0)
    .map(() => new Array(matrix[0].length).fill(false));

  traverse(matrix, seen, traversal, position);

  return traversal;
}

function traverse(matrix, seen, traversal, [y, x]) {
  traversal.push(matrix[y][x]);
  seen[y][x] = true;

  for (let index = 0; index < directions.length; index++) {
    let curDirY = directions[index][0];
    let curDirX = directions[index][1];
    checkMove(matrix, seen, traversal, [y + curDirY, x + curDirX]);
  }
}

function checkMove(matrix, seen, traversal, [y, x]) {
  if (
    x >= matrix[0].length ||
    x < 0 ||
    y >= matrix.length ||
    y < 0 ||
    seen[y][x] === true
  )
    return;

  traverse(matrix, seen, traversal, [y, x]);
}

test(fn);
