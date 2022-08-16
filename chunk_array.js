function chunkArrayInGroups(arr, size) {

  let chunkedArray = [];
   for (let i = 0; i < arr.length; i++) {
      const last = chunkedArray[chunkedArray.length - 1];
      if(!last || last.length === size){
         chunkedArray.push([arr[i]]);
      }else{
         last.push(arr[i]);
      }
   };
   //return chunkedArray;
   console.log(chunkedArray)
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2);

//2nd solution

// function chunkArrayInGroups(arr, size) {
//   let bigArray = [];
//   let subArray = [];
//   let subCntr = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(subCntr === size){
//       subCntr = 0;
//       bigArray.push(subArray);
//       subArray=[];
//     }
//      subArray.push(arr[i]);
//      //console.log(subCntr,subArray);
//     subCntr++;
//   }
//   bigArray.push(subArray)
//   // console.log(bigArray);
//   return bigArray;
// }

// chunkArrayInGroups(["a", "b", "c", "d","e","f","g"], 3);

//3rd solution
// function chunkArrayInGroups(arr, size) {
// let bigArr = [];
// for(let i=0; i<arr.length; i = i + size){
// let subarr = arr.slice(i, i+size);
// bigArr.push(subarr)
// }
// return bigArr;
// }
// chunkArrayInGroups(["a", "b", "c", "d","e","f","g"], 3);
