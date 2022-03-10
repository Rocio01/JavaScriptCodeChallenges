// Some people are standing in a row in a park. There are trees between them 
// which cannot be moved. Your task is to rearrange the people by their
//  heights in a non-descending order without moving the trees. People can be very tall!

function solution(a) {
  let arr = []
  let arr2 = a.filter((x) => (x != -1))
  let sort =  arr2.sort((a, b) => {
    return a -b
  })

for(let i= 0; i <= a.length; i ++){
  if(a[i]=== -1){
    arr.push(i)
  } 

}

if(arr.length != 0){

 arr.forEach( i => {
   sort.splice(i, 0, -1)
 })
 
}

 return sort

}
 console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// [-1, 150, 160, 170, -1, -1, 180, 190].
console.log(solution([4, 2, 9, 11, 2, 16]))