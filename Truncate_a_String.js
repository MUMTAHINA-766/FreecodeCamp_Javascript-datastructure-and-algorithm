function truncateString(str, num) {
  let output = str.substring(0,num);
  if(str.length>num){
    output+="...";
  }
  return output;
}

let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);
