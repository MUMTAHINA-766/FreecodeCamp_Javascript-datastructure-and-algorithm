function translatePigLatin(str) {
  let vow = "aeiou" ;
  let newStr = "";
 
    for(let i = 0;i<vow.length;i++){
     if(vow.includes(str[0])==true){
      newStr=str+"way";
      return newStr;
    }
    }
    let j = 0;
    let cluster = "";
    while(vow.includes(str[j])==false && j<str.length){
    console.log(str[j]);
    cluster+=str[j];
    j++;
    newStr = str.substring(j)+cluster+ "ay";
    }
  //console.log(str.length);
  //console.log(vow.length);
  console.log(str[0]);
  console.log(cluster);
  console.log(newStr);
  return newStr;
}
translatePigLatin("schwartz");
