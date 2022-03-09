// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// solution(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function solution(s1, s2) {
  let result = 0;
  let arr1 = s1.split("").sort()
  let arr2 = s2.split("").sort();
  for(let i = 0; i < arr1.length; i++){
    for(let j = 0; j < arr2.length; j++){
      if( arr1[i] === arr2[j] && (arr1[i] != 0 || arr1[j] != 0) ){        
        arr1.splice(i,1, 0)
        arr2.splice(j,1, 0)
        result ++      
      }
    }
  }
return result
}


console.log(solution("abxcaj", "xyzbxacj"))
// 5