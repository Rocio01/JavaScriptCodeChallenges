// Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing
//  sequence by removing no more than one element from the array.

// Note: sequence a0, a1, ..., an is considered to be a strictly increasing 
// if a0 < a1 < ... < an. Sequence containing only one element is also considered to be strictly increasing.

function solution(sequence) {
  let j = 0;
  for (let i=0;i<sequence.length;i++) {
  
    if(sequence[i] <= sequence[i-1]) {
      j++;
      // check if more than one nonincreasing found
      if(j > 1) return false; 
      
      // check if second previous number is equal to / bigger than current number
      // and previous number is equalto / bigger than next number
      if(sequence[i] <= sequence[i-2] && sequence[i+1] <= sequence[i-1]) return false; 
    }
    
  } 
  return true;
}



console.log(solution([10, 20, 40, 1]))
// false
console.log(solution([40, 50, 60, 10, 20, 30]))
// false