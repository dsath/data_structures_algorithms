function max_subarray(array) {
  const mid = Math.floor(array.length/2);
  if(array.length === 1) {
    return [array, array[0]];
  } else {
    const [left_max_array, l_sum] = max_subarray(array.slice(0, mid));
    const [right_max_array, r_sum] = max_subarray(array.slice(mid, array.length));
    const [cross_max_array, cross_sum] = max_crossing_subarray(array);
    const max = Math.max(l_sum, r_sum, cross_sum);

    switch (max) {
      case l_sum:
        return [left_max_array, l_sum];
      case r_sum:
        return [right_max_array, r_sum];
      case cross_sum:
        return [cross_max_array, cross_sum];
    }
  }
}

function max_crossing_subarray(array) {
  let mid = Math.floor(array.length/2);
  let li = mid-1; 
  let ri = mid;

  let left_sum_max = -Infinity;
  let i = li;
  let sum = 0;
  while(li >= 0) {
    sum += array[li];
    if(sum > left_sum_max) {
      left_sum_max = sum;
      i = li;
    }
    li--
  }
  let right_sum_max = -Infinity;
  let j = ri;
  sum = 0;
  while(ri < array.length) {
    sum += array[ri];
    if(sum > right_sum_max) {
      right_sum_max = sum;
      j = ri;
    }
    ri++
  }
  return [array.slice(i, j+1), left_sum_max + right_sum_max];
}


// let a = [1000, -4, -6, 22, -9, -15, -17, -10];
let a = [-4, 1000, -6, 22, -9, -15, -17, -10];
let b = [1000, -4];
let c = [-1000, -10, -50, 20, -10, 40];
let d = c.reverse();

console.log(a);
console.log(max_subarray(a));



// console.log(count, count2, count3);


