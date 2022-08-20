function convertHTML(str) {
  let newStr = "";
  for(let i= 0; i<str.length; i++){
    if(str[i]=="&"){
      newStr = str.replace(/&/g,'&amp;');
      
    }
    if(str[i]=="<"){
      newStr = str.replace(/</g,'&lt;');
      
    }
     if(str[i]==">"){
      newStr = str.replace(/>/g,'&gt;');
      
    }
    if(str[i]==">"){
      newStr = str.replaceAll(/>/g,'&gt;')
                  .replaceAll(/</g,'&lt;');
     
    }
    if(str[i]=='"'){
      newStr = str.replace(/"/g,'&quot;');
     
    }
    if(str[i]=="'"){
      newStr = str.replace(/'/g,'&apos;');
     
    }
    // if(str.includes("<"||">"||"'"||"&"||'"')==false){
    //   return newStr = str;
    // }
  }
  console.log(newStr);
  return newStr;
}

convertHTML("Hamburgers < Pizza > Tacos");
