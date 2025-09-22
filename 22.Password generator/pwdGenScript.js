upperCaseSet = "ABCDRFGHIJKLMNOPQRSTUVWXYZ";
lowerCaseSet ="abcdefghijklmnopqrstuvwxyz";
numSet ="1234567890";
symbolSet ="[]\;',./{}:<>?!@#$%^&*()_+-=";


//selectors

displayBox = document.querySelector("#result")
totalCharInput =document.querySelector("#lenOfPwd")
numInput = document.querySelector("#includeNum")
upperInput = document.querySelector("#includeUpperCase")
lowerInput = document.querySelector("#includeLowerCase")
splCharInput =document.querySelector("#includeSplChar")



//defines an arrow function called getRandomData
//Math.random Generates a random floating-point number between 0 to 1
//Math.random() * dataSet.length -Multiplies the random number by the length of the array/string.

let getRandomData =(dataSet)=>{ 
    return dataSet[Math.floor(Math.random()* dataSet.length)]
}


let generatePwd =(pwd = "")=>{

}
