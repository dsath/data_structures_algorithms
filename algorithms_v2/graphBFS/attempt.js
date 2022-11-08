const { test } = require("./test/test.js");

test(fn);

function fn(graph) {
  const queue = [0];
  const seen = {};
  const values = [];

  while (queue.length > 0) {
    const cn = queue.shift();
    values.push(cn);
    seen[cn] = true;
    const connections = graph[cn];

    for (let i = 0; i < connections.length; i++) {
      const connection = connections[i];
      if (!seen[connection]) queue.push(connection);
    }
  }
  return values;
}
