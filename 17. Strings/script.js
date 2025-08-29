
inputElement = document.getElementById('textarea');
result=document.getElementById('result');

function capitalize(){
    inputText = inputElement.value;
    result.textContent= inputText.toUpperCase()
}

function convertToLowerCase(){
    inputText = inputElement.value;
    result.textContent= inputText.toLowerCase()
}

function replaceSpacesWithHyphen(){
    inputText=inputElement.value;
    result.textContent=inputText.replaceAll(" ", "-");

}

function splitStringIntoArray(){
    inputText=inputElement.value;
    result.textContent=inputText.split("");
}

function checkVowel(){
    inputText=inputElement.value;
    vowels='aeiouAEIOU'
    countVowel=0;

    for(i=0;i<inputText.length;i++){
        if(vowels.includes(inputText[i])){
            countVowel++
        }
        result.textContent=countVowel   
    }
}

function checkPalindrome(){
    inputText=inputElement.value;
    result.textContent=inputText.reverse();
}

