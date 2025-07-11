//Program for sum of n natural numbers

function findSum(n){

//Naive Approach
 let sum = 0;
 for(let i = 1;i <= n;i++) sum = sum + i
 return sum

//Expected Approach
return n * (n + 1)/2
}


//Program for Sum of squares of first n natural numbers

function summation(n){

//Naive Approach
  let sum = 0;
  for(let i = 1; i <= n;i++) sum += (i * i)
  return sum

//Expected Approach
return n * (n + 1)/2 * (2 * n + 1)/3
}


let result = summation(10);
console.log(result)