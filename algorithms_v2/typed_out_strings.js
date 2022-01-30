let test1 = ["ab#z", "az#z"]; // => True
let test2 = ["abc#d", "acc#c"]; // => False
let test3 = ["x#y#z#", "a#"]; // => True
let test4 = ["a###b", "b"]; // => True
let test5 = ["Ab#z", "ab#z"] // => False

function typed_strings(s, t) {
  let sString, tString;

  function backSpaceTranslate(ar) {
    let returnStringArr = []
    for(let i = 0; i < ar.length; i++) {
      if(ar[i] === '#') {
        returnStringArr.pop();
      } else {
        returnStringArr.push(ar[i]);
      }
    }
    return returnStringArr;
  }

  sString = backSpaceTranslate(s);
  tString = backSpaceTranslate(t);

  if(sString.length !== tString.length) {
    return false;
  } else {
    for(let p = 0; p < sString.length; p++) {
      if(sString[p] !== tString[p]) {
        return false;
      }
    }
  }
  return true;
}


function typed_strings_opt(s, t) {
  let p1 = s.length - 1; p2 = t.length - 1;

  function findNextCompare(s, p) {
    let skip = 0;

    while(skip > 0 || s[p] === '#') {
      if(s[p] === '#') {
        skip++;
        p--;
      } else {
        skip--;
        p--;
      }
    }
    return p;
  }

  while(p1 >= 0 || p2 >= 0) {
    p1 = findNextCompare(s, p1);
    p2 = findNextCompare(t, p2);
    if(s[p1] !== t[p2]) {
      return false;
    }
    p1--; p2--;
  }
  return true;
}

console.log(typed_strings_opt(test1[0], test1[1]));
console.log(typed_strings_opt(test2[0], test2[1]));
console.log(typed_strings_opt(test3[0], test3[1]));
console.log(typed_strings_opt(test4[0], test4[1]));
console.log(typed_strings_opt(test5[0], test5[1]));



