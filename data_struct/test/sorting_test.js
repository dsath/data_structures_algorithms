// takes sort function and runs multiple test. sort function must return pointer to sorted array.
function sorting_test(fn) {
  let tests = 10000;
  let failures = 0;
  for (let i = 0; i < tests; i++) {
    let length = Math.floor(Math.random() * 40);
    let test = [];
    for (let i = 0; i < length; i++) {
      test.push(Math.floor(Math.random() * 100));
    }

    let expected = [...test].sort((a, b) => {
      return a - b;
    });
    test = fn(test);

    if (!doTheyMatch(test, expected)) {
      console.log(`Actual Result: ${test} 
      Expected Result: ${expected}`);
      return;
      failures++;
    }
  }

  if (failures === 0) {
    console.log("PASSED");
    console.log(`${tests} test cases passed succesfully`);
  } else {
    console.log("FAILED");
    console.log(`${failures} out of ${tests} tests failed`);
  }
}

function doTheyMatch(arrayA, arrayB) {
  for (let i = 0; i < arrayA.length || i < arrayB.length; i++) {
    if (arrayA[i] !== arrayB[i]) {
      return false;
    }
  }
  return true;
}

module.exports.sorting_test = sorting_test;
