// const {test} = require('./test/test.js');


function fn(array) {
  const width = array.length;
  const height = array[0].length;

  const visited = new Array(width).fill(1).map((item) => new Array(height).fill(false));
  const traversal = [];

  const directions = {
    up: [0, -1],
    right: [1, 0],
    down: [0, 1],
    left: [-1, 0]
  };

  let currentPosition = [0, 0];

  while(true) {
    traversal.push(array[currentPosition[0]][currentPosition[1]])
    visited[currentPosition[0]][currentPosition[1]] = true;

    if(validateMove(currentPosition, directions.up, visited)) {
      // console.log(validateMove(currentPosition, directions.up, visited));
      // console.log(visited[currentPosition[0]][currentPosition[1]-1]); 
      currentPosition = makeMove(currentPosition, directions.up);
    } else if(validateMove(currentPosition, directions.right, visited)) {
      currentPosition = makeMove(currentPosition, directions.right);
    } else if(validateMove(currentPosition, directions.down, visited)) {
      currentPosition = makeMove(currentPosition, directions.down);
    } else if(validateMove(currentPosition, directions.left, visited)) {
      currentPosition = makeMove(currentPosition, directions.left);
    } else {
      break;
    }
  }

  return traversal;
}

function validateMove(currentPos, move, visited) {
  const width = visited.length;
  const height = visited[0].length;
  const newPosition = makeMove(currentPos, move);

  if(newPosition[0] < width && 
     newPosition[0] >= 0 &&
     newPosition[1] < height &&
     newPosition[1] >= 0 &&
     visited[newPosition[0]][newPosition[1]] !== true) {
    return true;
  } else {
    return false;
  }
}

function makeMove(pos, move) {
  return [pos[0] + move[0], pos[1] + move[1]]
}
console.log(fn([[1,8,7,6], [2,3,4,5]]));
