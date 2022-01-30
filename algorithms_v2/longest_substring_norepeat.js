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
  let longest = 0;
  let l = 0, r = 0;
  let seenMap = {};

  if(s.length <= 1) {
    return s.length;
  }

  while(longest < s.length - l) {
    while(r < s.length) {
      let seenChar = s[r];
      if(seenMap[seenChar] === undefined || seenMap[seenChar] < l) {
        seenMap[seenChar] = r;
        let currentLength = r - l + 1;
        longest = Math.max(currentLength, longest);
        r++;
      } else {
        l = seenMap[seenChar] + 1;
        break;
      }
    }
  }
  return longest;
}
console.log(longest_sub_norepeat_opt(testCase1));
console.log(longest_sub_norepeat_opt(testCase2));
console.log(longest_sub_norepeat_opt(testCase3));
console.log(longest_sub_norepeat_opt(testCase4));
