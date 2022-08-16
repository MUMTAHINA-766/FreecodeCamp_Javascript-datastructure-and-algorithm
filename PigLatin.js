function translatePigLatin(str) {
  let vow = ["a","e","i","o","u"] ;
  let newStr = "";
 
    for(let i = 0;i<vow.length;i++){
     if(str[0]==vow[i]){
      //console.log("yes");
      newStr=str+"way";
    }
    // else if(str[0]!=vow[i]){
    //    //console.log("no");
    //    newStr=str+str[0]+"ay";
    //   newStr = newStr.substring(1);
    // }
    }
      for(let j = 0;j<vow.length;j++){
     if(str[0]!=vow[j]){
       //console.log("no");
       newStr=str+str[0]+"ay";
      newStr = newStr.substring(1);
    }
    }
  //console.log(str.length);
  //console.log(vow.length);
  console.log(str[0]);
  //console.log(vow[0]);
  console.log(newStr);
  return newStr;
}
translatePigLatin("algorithm");
