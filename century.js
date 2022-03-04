// Given a year, return the century it is in. The first century spans from the year 1 up to 
// and including the year 100, the second - from the year 101 up to and including the year 200, etc.

function solution(year) {
  let result;
  let mod = year % 100;
if ( mod === 0){
  result = year / 100
}
if (mod !== 0){
  result = Math.floor(year/ 100) + 1
}
return result;
}
