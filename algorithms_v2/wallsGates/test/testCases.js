// test cases
const INF = 2147483647;
testCase1 = [
  [INF, -1, 0, INF],
  [INF, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

testCase1Solution = [
  [3, -1, 0, 1],
  [2, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
];

testCase2 = [
  [INF, -1, 0, INF],
  [-1, INF, INF, -1],
  [INF, -1, INF, -1],
  [0, -1, INF, INF],
];

testCase2Solution = [
  [INF, -1, 0, 1],
  [-1, 2, 1, -1],
  [1, -1, 2, -1],
  [0, -1, 3, 4],
];

const testCases = [
  [testCase1, testCase1Solution],
  [testCase2, testCase2Solution],
];

let additionalInfo =
  "more tests at https://leetcode.com/problems/walls-and-gates/";

module.exports.testCases = testCases;
module.exports.additionalInfo = additionalInfo;
