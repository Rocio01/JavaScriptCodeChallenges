function solution(inputString) {
  let result;
inputString == inputString.split("").reverse().join("") ? result = true : result = false
return result;
}

console.log(solution("aba"))