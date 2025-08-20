//Assignment 1: Arithmetic Operations

let x=Number(prompt("Enter the first number:"));
let y=Number(prompt("Enter the second number:"));

let sum = x+y;
let difference = x-y;
let product = x*y;
let division = x/y;
let modulus = x%y;

console.log("x:", x);
console.log("y:", y);
console.log("Addition:",sum );
console.log("Subtraction:", difference);
console.log("Multiplication:", product);
console.log("Division:", division);
console.log("Modulus:", modulus);


//Assignment 2: Comparison Operators

// let x=Number((prompt("Enter the first number:")));
// let y=Number((prompt("Enter the second number:")));

console.log("First number greater than second",x>y);
console.log("First number less than second",x<y);
console.log("Are the two numbers equal?",x==y);

//Assignment 3: Logical Operators

console.log("Both numbers are positive:", x > 0 && y > 0);
console.log("At least one number is positive:", x > 0 || y > 0);
console.log("Both numbers are equal:", a == b);