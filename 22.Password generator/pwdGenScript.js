upperCaseSet = "ABCDRFGHIJKLMNOPQRSTUVWXYZ";
lowerCaseSet ="abcdefghijklmnopqrstuvwxyz";
numSet ="1234567890";
symbolSet ="[]\;',./{}:<>?!@#$%^&*()_+-=";


//selectors
displayBox = document.querySelector("#result");



totalChar =document.querySelector("#lenOfPwd")
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

//while loop keep adding characters until the password length reaches the number entered.

const generatePassword = () => {
      let password = "";

      while (password.length < totalChar.value) {
        if (upperInput.checked && password.length < totalChar.value) {
          password += getRandomData(upperCaseSet);
        }
        if (lowerInput.checked && password.length < totalChar.value) {
          password += getRandomData(lowerCaseSet);
        }
        if (numInput.checked && password.length < totalChar.value) {
          password += getRandomData(numSet);
        }
        if (splCharInput.checked && password.length < totalChar.value) {
          password += getRandomData(symbolSet);
        }
      }

      displayBox.value = password;
      console.log(password);
    };

    document.getElementById("btn").addEventListener("click", generatePassword);

    // Generate one on page load
    generatePassword();

