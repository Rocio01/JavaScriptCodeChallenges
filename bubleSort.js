function solution(arr){
  let temp
for(let i = 0; i < arr.length; i++){
  for (let j = 0; j < arr.length; j++){
  if(arr[j] > arr[j + 1] ){
    temp = arr[j]
    arr[j] = arr[j+1]
    arr[j+1] = temp
    
  }

}
}
return arr

}

console.log(solution([3,4,1,80,76,3]))