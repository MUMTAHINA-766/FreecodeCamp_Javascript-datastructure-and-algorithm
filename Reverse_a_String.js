function reverseString(str) {
  let arr="";
  for(let i=str.length-1;i>=0;i--){
  arr+=str[i];}
  return arr;
}

let result = reverseString("hello");
