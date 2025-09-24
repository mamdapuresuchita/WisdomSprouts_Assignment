//Assignment1 JS

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



//...................Assignment 2........................................

let otp="";
const randomOtp = document.querySelector("#displayOtp");
const enteredOtpElmt = document.querySelector("#enteredOtp");


function generateOtp(){ 
  otp = Math.floor(1000 + Math.random()*9000);//0 to 9000 will be printed ao if 1000 added num will be 4 digit
  console.log(otp);
  randomOtp.innerText =otp;

  enteredOtpElmt.value ="";//clears input
  
}

//limit input to 4 digits

// enteredOtpElmt.addEventListener("input",()=>{
//   if(enteredOtpElmt.value.length>4){
//     enteredOtpElmt.value = enteredOtpElmt.value.slice(0,4);
//   }
// })

function verifyOtp(){
  
  if(otp == enteredOtpElmt){
    alert("You entered correct Otp!!")
  }
  else{
    alert("Invalid Otp!!Please try again")
  }

  
}


