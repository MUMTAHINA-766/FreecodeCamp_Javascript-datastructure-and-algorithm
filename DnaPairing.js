function pairElement(str) {
  let subArr = [];
for(let i = 0; i<str.length; i++){
  if(str[i].includes("A")==true){
    subArr.push(["A","T"]);
  }
  if(str[i].includes("T")==true){
    subArr.push(["T","A"]);
  }
  if(str[i].includes("G")==true){
   subArr.push(["G","C"]);
  }
  if(str[i].includes("C")==true){
   subArr.push(["C","G"]);
  }
}
  console.log(subArr);
  return subArr;
}
let output = pairElement("TCGAT");
