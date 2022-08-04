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
