function getIndexToIns(arr, num) {

  let sorted = arr.sort(function sortingArray(a, b){
    return a-b;
  })

  console.log(sorted)
  sorted.push(num);
  console.log(sorted);

    let sorted_newsrt = arr.sort(function sortingArray(x, y){
    return x-y;
  })

  console.log(arr)

  console.log(sorted_newsrt.indexOf(num));
  return sorted.indexOf(num);
  
}
let output = getIndexToIns([10, 20, 40, 50], 30);

//Another solution
// function getIndexToIns(arr, num) {
//   let belong = 0;
//   for(let i = 0; i <arr.length; i++){
//     if(arr[i]<num){
//       belong++;
//     }
//   }
//   console.log(belong);
//   return belong;
// }

// getIndexToIns([10, 20, 40, 50], 30);


