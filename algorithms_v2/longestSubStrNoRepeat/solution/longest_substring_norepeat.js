const testCase1 = "abccabb"; // => 3
const testCase2 = "cccccc"; // => 1
const testCase3 = ""; // => 0
const testCase4 = "abcbda"; // => 4

function longest_sub_norepeat(s) {
  if(s.length <= 1) {
    return s.length;
  }
  let maxLen = 0;
  for(let l = 0; l < s.length; l++) {
    let seenMap = {}
    curLen = 0;

    //could use a while loop here as well
    for(let r = l; r < s.length; r++) {
      const currentChar = s[r];
      if(!seenMap[currentChar]) {
        curLen++;
        seenMap[currentChar] = true;
        maxLen = Math.max(curLen, maxLen);
      } else {
        break;
      }
    }
  }
  return maxLen;
}

function longest_sub_norepeat_opt(s) {
  if(s.length <= 1) return s.length;
  let seenMap = {};
  let longest = 0, l = 0;
  for(let r = 0; r < s.length; r++) {
    let currentChar = s[r]; 
    let previousCharIndex = seenMap[currentChar];

    // if current character has already been seen and its twin is not to the left of the l pointer,
    // move l pointer to right of twin
    if(previousCharIndex >= l) {
      l = previousCharIndex + 1;
    }
    seenMap[currentChar] = r;
    longest = Math.max(longest, r - l + 1);
  }
  return longest;
}
console.log(longest_sub_norepeat_opt(testCase1));
console.log(longest_sub_norepeat_opt(testCase2));
console.log(longest_sub_norepeat_opt(testCase3));
console.log(longest_sub_norepeat_opt(testCase4));
