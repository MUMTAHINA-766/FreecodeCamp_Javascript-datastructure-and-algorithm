function sumPrimes(num) {
  let arr = [];
  let sum = 2;
  if(num==2){
    return num;
  }
  else if(num == 3){
    return num+2;
  }
  if(num>3){
  for(let i=4; i<=num; i++){
    if(i%2!=0){
      arr.push(i);
      let n = (6*i)+1
      if(arr.includes(n)==true){
        console.log(n)
      }
      console.log(i)
    sum+=i;
    }
  }
}
console.log(arr)
 return sum+3;
}
console.log(sumPrimes(25));
