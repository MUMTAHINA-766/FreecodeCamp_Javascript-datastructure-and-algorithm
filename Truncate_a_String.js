function truncateString(str, num) {
  let output = str.substring(0,num);
  if(str.length>num){
    output+="...";
  }
  return output;
}

//Another solution:
// let result = truncateString("A-tisket a-tasket A green and yellow basket", 8);

// function truncateString(str, num) {
// //let emstr = "";
// if (str.length === num || str.length < num){
// return str
// }else{
// let emstr = str.slice(0,num);
// return emstr+"..."
// }


// //return emstr+"..."

// }

// truncateString("A-tisket a-tasket A green and yellow basket", 8);

// //truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)
