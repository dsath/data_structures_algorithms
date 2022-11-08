const adjacencyList = [
  [1, 3],
  [0],
  [3, 8],
  [0, 2, 4, 5],
  [3, 6],
  [3],
  [4, 7],
  [6],
  [2],
];

function bfs(matrix) {
  const seen = {};
  const queue = [0];
  const finalResult = [];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    seen[currentNode] = true;
    finalResult.push(currentNode);

    const connections = adjacencyList[currentNode];

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) {
        queue.push(connection);
      }
    }
  }
  return finalResult;
}

console.log(bfs(adjacencyList));
