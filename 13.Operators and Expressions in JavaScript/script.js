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


console.log("First number greater than second",x>y);
console.log("First number less than second",x<y);
console.log("Are the two numbers equal?",x==y);

//Assignment 3: Logical Operators

let maths=Number(prompt("Enter Maths score:"));
let sci=Number(prompt("Enter Science score:"));

if(maths>=90 && sci>=85){
    console.log("Scholarship Eligibility:true")
}

//Assignment 4: Assignment Operators

let a=10;

console.log("Initial value of x:",a);

a+=5;
console.log("After adding 5:",a);

a*=3;
console.log("After multiplying by 3:",a);

a-=10;      
console.log("After subtracting by 10:",a);

a/=2;
console.log("After dividing by 2:",a);

a%=3;
console.log("Modulus with 3:",a);

//Assignment 5: Operator Precedence

let e1=10+3*5;
let e2=(10+3)*5;
let e3=20/2+3;
let e4=20/(2+3);

console.log("Expression result_1",e1);
console.log("Expression result_2",e2);
console.log("Expression result_3",e3);
console.log("Expression result_4",e4);

//Assignment 6:Combined Example


let length=Number(prompt("Enter length:"));
let width=Number(prompt("Enter width"));

let perimeter= 2 * (length + width);
let area= length * width;

console.log("Perimeter",perimeter);
console.log("Area",area);

let result=(perimeter>area);
console.log("Is perimeter greater than area?",result)


//Assignment 7:Complex Logical and Comparison Operations

let age=Number(prompt("Enter age:"));
let citizenship=prompt("Are you a citizen (true/false)?") =="true";

let Eligible_to_Vote=(age>=18) && citizenship;
console.log("Eligible to vote:",Eligible_to_Vote);

//Assignment 8: BMI Calculator

let weight=Number(prompt("Ënter weight (kg):"));
let height=Number(prompt("Enter height (m):"));

let bmi=weight/(height*height);
console.log("BMI:",bmi);

if(bmi<18.5){
    console.log("Category:Underweight");
} else if(bmi>=18.5 && bmi<24.9){
    console.log("Category:Normal weight");
} else if(bmi>=25 && bmi<29.9){
    console.log("Category:Overweight");
} else if(bmi>=30 ){
    console.log("Category:Obesity");
}

//Assignment 9:Even or Odd

let number=Number(prompt("Enter a number:"));

if(number%2==0){
    console.log("Even");
} else {
    console.log("Odd");
}

//Assignment 10: Shopping Discount

let totalAmt=Number(prompt("Enter total amount:"));

if(totalAmt>100){
    let discountedAmt=totalAmt-(totalAmt*0.1);
    console.log("Discounted Total:", discountedAmt);
}

else{
    console.log("No discount applied as amount is less than 100")
}