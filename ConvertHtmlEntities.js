//my solution
function convertHTML(str) {
  console.log(str);
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
  }
  console.log(newStr);
  return newStr|| str;
}

convertHTML("Hamburgers Pizza Tacos");


//solution 2
function convertHTML(str) {
  return str
  .replace(/&/g,"&amp;")
  .replace(/</g,"&lt;")
  .replace(/>/g,"&gt;")
  .replace(/"/g,"&quot;")
  .replace(/'/g,"&apos;")
}
console.log(convertHTML("Hamburgers < Pizza < Tacos"));

//solution 3
