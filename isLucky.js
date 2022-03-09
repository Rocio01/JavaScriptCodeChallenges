// Ticket numbers usually consist of an even number of digits. A ticket number 
// is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

function solution(n) {
let arr = n.toString().split("")
let first = arr.slice(0, arr.length/2)
let second  = arr.slice(arr.length/2, arr.length)
let initial = 0
let result;
let firstNum = first.reduce((previous, current) => Number(previous) + Number(current), initial)
let secondNum = second.reduce((previous, current) => Number(previous) + Number(current), initial)
firstNum === secondNum ? result = true: result = false
return result
}

console.log(solution(1230))
// true 