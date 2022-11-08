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

function fn(graph, node, seen, values) {
  values.push(node);
  seen[node] = true;
  const connections = graph[node];
  for (let i = 0; i < connections.length; i++) {
    const connection = connections[i];
    if (!seen[connection]) fn(graph, connection, seen, values);
  }
  return values;
}

console.log(fn(adjacencyList, 0, [], []));
