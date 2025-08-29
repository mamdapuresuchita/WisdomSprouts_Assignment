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

let num_SumOfDig=123;
let sum=0;

do{
    rem=num_SumOfDig%10;
    sum=sum+rem;
    num_SumOfDig=Math.floor(num_SumOfDig/10);

}
while(num_SumOfDig>0)

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

let num_CheckPrime=19;


if (num_CheckPrime<=1){
    console.log(num_CheckPrime," is not a prime number");
}

else{
    for (let i=2;i<num_CheckPrime;i++){
        if(num_CheckPrime % i == 0){
            console.log(num_CheckPrime," is not a prime number");
            break;
        }
    }
    console.log(num_CheckPrime," is a prime number");
}



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


//10.Palindrome checker

let str_palindrome = prompt("Enter a string to check if it's a palindrome: ").toLowerCase();
let reversedString = "";

for (let i = str_palindrome.length - 1; i >= 0; i--){
  reversedString = reversedString + str_palindrome[i]; 
}


if (str_palindrome == reversedString) {
  console.log(`${str_palindrome} is a palindrome!`);
} 
else {
  console.log(`${str_palindrome} is not a palindrome.`);
}

//11.Count vowels & consonants

let word=prompt("Enter a string ");
word=word.toLowerCase();


let vowels=0;
let consonants=0;

for(i=0;i<word.length;i++){
    let char=word[i];
    
    if (char == "a" || char == "e" || char == "i" ||
        char == "o" || char == "u")
        {
            vowels++;
        }
        
        else consonants++;
    
}

console.log("Number of Vowels:",vowels);
console.log("Number of Consonants", consonants);

//12. reverse number using while loop

let correctNum=Number(prompt("Enter a number: "));
let reversedNum = 0;

    while (correctNum > 0) {
      let digit = correctNum % 10; 
      reversedNum = reversedNum * 10 + digit; 
      correctNum = Math.floor(correctNum / 10);
    }
    
console.log("Reversed number is: ",reversedNum);

//13.Sum of Odd & Even number

 let even_num = 0;
 let odd_num = 0;

    for (let i = 1; i <= 100; i++) {
        if(i%2==0){
            even_num = even_num + i ;
        }
        else{
            odd_num = odd_num + i;
        }
    }
    console.log("Sum of even numbers:",even_num);
    console.log("Sum of Odd numbers",odd_num);

//14.Factorial

let num =Number(prompt("Enter a number:"));
let fact=1;
let i=1;

while(i<=num){
    fact=fact*i;
    i++;
}

console.log("Factorial of "+num + " is: "+ fact);

//15. Average of N Numbers

 let countOfNum=Number(prompt("How many numbers: "));
 
 let SumOfNumbers=0;

 let actualNum=0;
 
 for(let i=1; i<=countOfNum; i++){
     let actualNum=Number(prompt("Enter a number :"));
     SumOfNumbers=SumOfNumbers + actualNum;
 }
  let Average=SumOfNumbers/countOfNum;
  
 
 console.log("Sum of numbers: ",SumOfNumbers);
 console.log("Average:", Average);


//16. Leap Year Checker

let year=Number(prompt("Enter a year:"));

if (year%4==0 && (year%100!=0 || year%400==0)){
    console.log(year,"is a leap year");
}
else{
console.log(year,"is not a leap year");
}

//17. Find Divisor of a Number

let num17=Number(prompt("Enter a number"));

for (let i=1;i<=num17;i++){
    if(num17 % i == 0){
        console.log("Divisors of",num17 ,":" ,i);
    }
}

//18.Fibonacci Sequence

let terms = Number(prompt("How many terms? "));

let f1=0,f2=1;
let seq=0;

for(i=0;i<terms;i++){
    seq=seq+f1+", ";
    let nxt=f1+f2;
    f1=f2;
    f2=nxt;
}

console.log("Sequence:"+ seq);

//19.Armstrong number

let num19=Number(prompt("Enter a number: "))

let str19=num19.toString();
let numStr=str19.length;
let sum_num=0;

for (let i=0;i<numStr;i++){
    sum_num = sum_num + Math.pow(Number(str19[i]),numStr);
}

if(sum_num == num19){
console.log(num19," is an armstrong number");
}
else{
    console.log(num19 ,"is not an Armstrong number")
}


//20.
