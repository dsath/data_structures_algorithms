//Create a function that reverse a string:

//my solution
function reverse(str) {
  let arr = str.split('');
  let reversed_arr = [];
  while(arr.length != 0) {
    reversed_arr.push(arr.pop());
  }
  reversed_str = reversed_arr.join('');
  return reversed_str;
}

console.log(reverse("Hi, I'm Devin"))
