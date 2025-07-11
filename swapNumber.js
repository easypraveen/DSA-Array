// JavaScript Code to swap two numbers using third variable
let a = 2;
let b = 3;

let temp = a;
a = b;
b = temp

console.log(a,b)

// JavaScript Code to swap two numbers using destructuring assignment
let x = 5;
let y = 8;
console.log(x,y);

//destructuring array
[y,x] = [x,y];

console.log(x,y);

//Swap Two Numbers Without Using Third Variable.
a = a + b;
b = a - b;
a = a - b;

console.log(a,b)

// JavaScript Code to swap two numbers using bitwise XOR
x = x ^ y;
y = x ^ y;
x = x ^ y;

console.log(x,y);
