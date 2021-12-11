//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// my solution
// add each character to a hash table and set its value to true
// You can then see if they have been encountered before with O(1) search time using hash table.
// This is O(n)
function firstRecurringCharacter(input) {
  let hash = {};
  for(let i = 0; i < input.length; i++) {
    let key = input[i].toString();
    if(hash[key]) {         //check if input is repeated
      return input[i];
    } else {                   //if not repeated place in hash array and set its value to true
      hash[key] = true;
    }
  }

  return undefined;
}
let result;
result = firstRecurringCharacter([2,5,1,2,3,5,1,2,4]);
console.log(result);
result = firstRecurringCharacter([2,1,1,2,3,5,1,2,4]);
console.log(result);
result = firstRecurringCharacter([2,3,4,5]);
console.log(result);
result = firstRecurringCharacter([2,5,5,2,3,5,1,2,4]);
console.log(result);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2



//instructor solution

////O(n) time complexity O(n) space complexity using hash table
//function firstRecurringCharacter2(input) {
//  let map = {};
//  for (let i = 0; i < input.length; i++) {
//    if (map[input[i]] !== undefined) {
//      return input[i]
//    } else {
//      map[input[i]] = i;
//    }
//  }
//  return undefined
//}
