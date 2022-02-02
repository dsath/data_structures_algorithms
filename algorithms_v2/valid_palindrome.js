let test1 = "aabaa"; // => true
let test2 = "aabbaa"; // => true
let test3 = "abc"; // => false
let test4 = "a"; // => true
let test5 = ""; // => true
let test6 = "A man, a plan, a canal: Panama"; // => true

// start from outside
function isValidPalindrome1(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0; right = s.length - 1;

  while(left < right) {
    if(s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;

}

// start from middle.
function isValidPalindrome2(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  const middle = Math.floor(s.length / 2);
  let right = middle;
  let left = (s.length % 2 === 0) ? middle - 1 : middle; 

  while(right < s.length) {
    if(s[left] !== s[right]) return false;
    left--; right++;
  }
  return true;
}

// compare reversed string
function isValidPalindrome3(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  let reversedString = "";
  for(let i = s.length - 1; i >= 0; i--) {
    reversedString += s[i];
  }
  return reversedString === s;
}

console.log(isValidPalindrome3(test1));
console.log(isValidPalindrome3(test2));
console.log(isValidPalindrome3(test3));
console.log(isValidPalindrome3(test4));
console.log(isValidPalindrome3(test5));
console.log(isValidPalindrome3(test6));
