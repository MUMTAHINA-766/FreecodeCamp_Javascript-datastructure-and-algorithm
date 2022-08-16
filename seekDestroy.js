function destroyer(arr) {
  console.log(arguments)
  let desArr = arguments[0];
  let kill = [];
  let result = [];
  for(let i = 1; i<arguments.length; i++){
    kill.push(arguments[i])
  }
  for(let j = 0; j<desArr.length; j++){
  if(kill.includes(desArr[j])==false){
    result.push(arr[j])
  }
  }
  //return result;
  console.log(arr)
  console.log(destroyer);
  console.log(result);
  

}

let output = destroyer([1, 2, 3, 1, 2, 3,8,5,"Hamza","Rao"],"Hamza", 2, 3,7,4,9);
