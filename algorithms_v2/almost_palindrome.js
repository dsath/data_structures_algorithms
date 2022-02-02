let test1 = "raceacar"; // => true
let test2 = "abccdba"; // => true
let test3 = "abcdefdba"; // => false
let test4 = ""; // => true
let test5 = "a"; // => true
let test6 = "ab"; // => true
let test7 = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga"; // => true

function isAlmostPalindrome(s) {
  s = s.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0; right = s.length - 1;
  while(left < right) {
    if(s[left] !== s[right]) {
      return isValidPalindrome(s, left + 1, right) || isValidPalindrome(s, left, right - 1);
    }
    left++; right--;
  }
  return true;
}

function isValidPalindrome(s, left, right) {
  while(left < right) {
    if(s[left] !== s[right]) return false;
    left++; right--;
  }
  return true;
}

console.log(isAlmostPalindrome(test1));
console.log(isAlmostPalindrome(test2));
console.log(isAlmostPalindrome(test3));
console.log(isAlmostPalindrome(test4));
console.log(isAlmostPalindrome(test5));
console.log(isAlmostPalindrome(test6));
console.log(isAlmostPalindrome(test7));

