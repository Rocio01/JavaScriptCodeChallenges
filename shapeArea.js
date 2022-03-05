// elow we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

// A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking
//  the n - 1-interesting polygon and appending 1-interesting 
// polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
function solution(n) {
  let previous = n-1;
   return (n*n) + (previous* previous)
}

console.log(solution(3))
// 13