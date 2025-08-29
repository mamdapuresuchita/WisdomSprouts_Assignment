//1.Assignment

let a=Number(prompt("Enter a number:"));

if(a>=1){
    console.log("The number is positive.");
}
else if(a==0){
    console.log("The number is Zero.");
}
else {
    console.log("The number is negative");
}

//2.Multiplication

for(i=1;i<=10;i++){
    
    console.log(a,"*",i,"=",a*i);
}

//3.Number Guessing game


while(true){
    let randomNum=3;
    let guessNum=Number(prompt("Guess the number:"));
    
if(guessNum==randomNum){
    console.log("Correct! You guessed the right number.")
    break;
}
else{
    console.log("Incorrect guess! Try again")
}

}
//4. Even number

for(i=1;i<=20;i++){
     if(i%2==0){
         console.log(i);
         i++;
     }
}

//5.Sum of digits

let num=123;
let sum=0;

do{
    rem=num%10;
    sum=sum+rem;
    num=Math.floor(num/10);
    
}
while(num>0)

console.log(sum);

//6.FizzBuzz

for(i=1;i<=50;i++){
    if (i%3==0 && i%5==0){
        console.log("FizzBuzz");
    }
    else if(i%5==0){
        console.log("Buzz");
    }
    else if (i%3==0){
        console.log("Fizz");
    }
    else{
        console.log(i);
    }
    
}

//7.Prime Number


//9.Find largest of three number

let num1=Number(prompt("Enter first number:"));
let num2=Number(prompt("Enter second number:"));
let num3=Number(prompt("Enter third number:"));

if(num1>num2 && num1>num3){
    console.log("The largest number is:",num1);
}
else if(num2>num1 && num2>num3){
    console.log("The largest number is:",num2);
}
else{
    console.log("The largest number is:",num3);
}

//reverse

let reverseString=(a.split("").reverse().join(""));


//14.Factorial

let num =Number(prompt("Enter a number:"));
let fact=1;
let i=1;

while(i<=num){
    fact=fact*i;
    i++;
}

console.log("Factorial of "+num + " is: "+ fact);

//16. Leap Year Checker

let year=Number(prompt("Enter a year:"));

if (year%4==0 && (year%100!=0 || year%400==0)){
    console.log(year,"is a leap year");
}
else{
console.log(year,"is not a leap year");
}

//