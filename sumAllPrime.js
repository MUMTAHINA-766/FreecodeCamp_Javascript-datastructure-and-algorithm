const isPrime = (num) => {
   let x = Math.floor(Math.sqrt(num));
   let j = x;
   while (j >= 2) {
      if (num % j === 0) {
         return false;
      }
      j--;
   }
   return true;
};
function sumPrimes(num) {
 let iter = num;
   let sum = 0;
   while (iter >= 2) {
      if (isPrime(iter) === true) {
         sum += iter;
      }
      iter--;
   }
   return sum;
}
console.log(sumPrimes(10));

//solve 2

// function sumPrimes(num) {
//   let sum=0;
//   let counter=2;
  
//   while(counter<=num)
//     {
//       if(isPrimes(counter))
//       {
//         sum +=counter;
//       }
//       counter +=1;
//     }
//   return sum;
// }
// function isPrimes(isnumber)
//   {
//     let counter=2;
//     while(counter<isnumber)
//       {
//         if(isnumber%counter===0)
//         {
//           return false;
//         }
//         counter +=1;
//       }
//     return true;
//   }
// console.log(sumPrimes(10));
