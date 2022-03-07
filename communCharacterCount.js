// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".
function solution(s1, s2) {
  let count = 0;
  let arrS1 = s1.split("").sort()
  let arrS2 = s2.split("").sort()
console.log(arrS1)
console.log(arrS2)
  if ( arrS1.length < arrS2.length ){
  for(let i= 0; i < arrS1.length; i++){
    if(arrS1[i] === arrS2[i]){
      count ++
    }
  } 
  } else if (arrS2.length < arrS1.length  || arrS2.length === arrS1.length  ){
    for(let i= 0; i < arrS2.length; i++){
      if(arrS1[i] === arrS2[i]){
        count ++
      }
    } 

  }
return count
}
console.log(solution("aabccj", "adajac"))
// 3

console.log(solution("abca", "xyzbac"))
// 3