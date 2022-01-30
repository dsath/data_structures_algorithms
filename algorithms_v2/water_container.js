// test cases

let test1 = [7,1,2,3,9]; // R -> 28
let test2 = []; // R -> 0
let test3 = [7]; // R -> 0
let test4 = [6,9,3,4,5,8]; // R -> 32

// function max_water_container(heights) {
//   let maxArea = 0;
//   for (let p1 = 0; p1 < heights.length; p1++) {
//     for(let p2 = p1 + 1; p2 < heights.length; p2++) {
//       const height = Math.min(heights[p1], heights[p2]);
//       const width = p2 - p1;
//       const area = height * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// }

function max_water_container(heights) {
  let p1 = 0, p2 = heights.length - 1, maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;

    maxArea = Math.max(maxArea, area);

    if(heights[p1] < heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
}

console.log(max_water_container(test1));
console.log(max_water_container(test2));
console.log(max_water_container(test3));
console.log(max_water_container(test4));
