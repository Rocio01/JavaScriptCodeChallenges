// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

function solution(inputArray) {
  let numArr = []
  let result = []


    for(let i = 0; i < inputArray.length; i++){
      numArr.push(inputArray[i].length)    

    }

    let max = Math.max(...numArr); 

    // inputArray.forEach(i => {
    //   if(i.length === max  ){
    //     result.push(i)
    //   }
    // })
    result = inputArray.filter(i=> 
      i.length === max
    )

return result
}

console.log(solution(["aba", "aa", "ad", "vcd", "aba"]))
// ["aba", "vcd", "aba"]