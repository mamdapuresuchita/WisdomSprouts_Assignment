inputElement = document.getElementById("textarea");
resultElement = document.getElementById("result");


function countVowels(){ 
    inputText = inputElement.value;
    vowels='aeiouAEIOU';
    count=0;

    for(i=0;i<inputText.length;i++){
        if(vowels.includes(inputText[i])){
            count++;
        }
    }
    resultElement.textContent = "Number of vowels: " + count;
}

function countConsonants(){
    inputText = inputElement.value;
    vowels='aeiouAEIOU';
    count=0;

    for(i=0;i<inputText.length;i++){
        if(!vowels.includes(inputText[i])){
            count++;
        }
    }
    resultElement.textContent = "Number of consonants: " + count;

}


function Tosmallcase(){
    inputText = inputElement.value;
    resultElement.textContent = inputText.toLowerCase();
}


function ToTitleCase(){
    inputText = inputElement.value;
    resultElement.textContent = inputText.charAt(0).toUpperCase() + inputText.slice(1).toLowerCase();
 }


 function checkPalindrome(){
    inputText = inputElement.value;
    reverseStr = inputText.split("").reverse().join("");
    if(inputText.toLowerCase() == reverseStr.toLowerCase()){
        resultElement.textContent = "The text is a palindrome.";
    } else {
        resultElement.textContent = "The text is not a palindrome.";
    }
 }

 function extractFirstWord(){
    inputText = inputElement.value;
    firstWord = inputText.split(" ")[0];
    resultElement.textContent ="First word: " + firstWord;
 }

 function replaceSpaces(){
    inputText = inputElement.value;
    resultElement.textContent = inputText.replaceAll(" ", "-");
 }

 function splitStr(){
    inputText=inputElement.value;
    resultElement.textContent=inputText.split("");
 }

 function ToCapitalizeEachWord(){
    inputText = inputElement.value;
    Converted_string = inputText.split(" ");
    resultElement.textContent = Converted_string;

    for(i=0;i<Converted_string.length;i++){
        Converted_string[i] = Converted_string[i].charAt(0).toUpperCase() + Converted_string[i].slice(1).toLowerCase();
     }
    resultElement.textContent = Converted_string.join("  ");
 }

 function reverseString(){
    inputText = inputElement.value;
    reverseString = inputText.split("").reverse().join("");
    resultElement.textContent = reverseString;
 }
  

 function countOccurrences(){
    inputText = inputElement.value;
    searchChar =prompt("Enter a letter to search for:");
    countchar=0;

    for(i=0;i<inputText.length;i++){
        if(inputText[i]==searchChar){
            countchar++;
        }
    resultElement.textContent ="Number of occurences of " + searchChar + ":" + countchar;
        
 }
}

function ToRemoveNonAlpha(){
    inputText=inputElement.value;
    resultElement.textContent = inputText.replaceAll(/[^a-zA-Z0-9]/g, "");

    
}

function IsSameChar(){
    inputText = inputElement.value;
    if(inputText.charAt(0) == inputText.charAt(inputText.length -1)){
        resultElement.textContent = "String starts and ends with same character : " + inputText.charAt(0);
    }
    else{
        resultElement.textContent ="String starts and ends with different character.";
    }
    }



// function convertToLowerCase(){
//     inputText = inputElement.value;
//     result.textContent= inputText.toLowerCase()