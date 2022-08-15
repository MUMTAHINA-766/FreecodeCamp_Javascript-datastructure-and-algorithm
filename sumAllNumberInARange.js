function sumAll(arr) {
   let start = arr[0];
   let end = arr[1];
  let sum = 0;
  for(let i = start; i<=end; i++){
    sum += i;
  }
  if(start>end){
    for(let i = end; i<=start; i++){
      sum+=i;
    }

  }
  
  return sum;
  //console.log(sum)
}

let output = sumAll([4, 1]);
