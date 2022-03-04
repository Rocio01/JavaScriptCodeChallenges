// Given an array of integers, find the pair
//  of adjacent elements that has the largest product and return that product.

function solution(inputArray) {
  let temp = inputArray[0] * inputArray[1]
for (let i = 0; i <= inputArray.length; i++){

  if((inputArray[i] * inputArray[i+1]) > temp){
    temp = (inputArray[i] * inputArray[i+1])
  }

}
return temp;
}
console.log(solution( [3, 6, -2, -5, 7, 3]))
// solution(inputArray) = 21.