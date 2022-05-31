const directions = [
  [-1, 0], //up
  [0, 1], //right
  [1, 0], //down
  [0, -1] //left
];

let test = [
  [0, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11],
  [12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23]
];

function traverseDFS(matrix) {
  if(!matrix || !matrix[0] || matrix[0].length === 0) return null; 

  const seen = new Array(matrix.length).fill(0).map((elem) => {
    return new Array(matrix[0].length).fill(false);
  });

  const values = [];
  dfs(matrix, 0, 0, seen, values);
  return values;
}

function dfs(matrix, row, col, seen, values) {
  let rowLength = matrix.length;
  let colLength = matrix[0].length;
  values.push(matrix[row][col]);
  seen[row][col] = true;
  for (let i = 0; i < directions.length; i++) {
    let check = [row + directions[i][0], col + directions[i][1]];
    if(check[0] >= 0 && check[0] < rowLength && 
       check[1] >= 0 && check[1] < colLength && 
       !seen[check[0]][check[1]]) {
      dfs(matrix, check[0], check[1], seen, values);
    }
  }
  return;
}

let test2 = [];

console.log(test);
console.log(traverseDFS(test2));
