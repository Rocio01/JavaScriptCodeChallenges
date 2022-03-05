// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing
//  sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
// if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function solution(sequence) {

let j = 0
let result;
for(let i = 0; i < sequence.length; i++){
  if(sequence[i] < sequence[i+1]){
    j ++
  }
}
j > 0 ? result = false: result = true
return result
}



console.log(solution([1, 3, 2, 1]))
// false