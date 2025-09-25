const fullNameElmt = document.querySelector("#fullName");
const emailElmt = document.querySelector("#email");
const mobNoElmt = document.querySelector("#mobNo");
const maleElmt = document.querySelector("#male");
const femaleElmt = document.querySelector("#female");
const pwdElmt = document.querySelector("#pwd");
const confirmPwdElmt = document.querySelector("#pwd2");
const genderOptions = document.querySelectorAll(".genderOption");
//Errors
const nameErrorMsg = document.querySelector("#nameError");
const emailErrorMsg = document.querySelector("#emailError");
const mobErrorMsg= document.querySelector("#mobError");
const genderErrorMsg = document.querySelector("#genderError");
const pwdErrorMsg = document.querySelector("#pwdError");
const pwd2ErrorMsg= document.querySelector("#pwd2Error");
const success = document.querySelector("#submit")
//const  = document.querySelector("#");
// const  = document.querySelector("#");

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     formValidation();
// })

function formValidation(){

    let name = fullNameElmt.value.trim();
    let email= emailElmt.value.trim();
    let mobNo =mobNoElmt.value.trim();
    let password = pwdElmt.value.trim();
    let confirmPassword = confirmPwdElmt.value.trim();

    //reset msg
    nameErrorMsg.classList.add("d-none");
    emailErrorMsg.classList.add("d-none");
    mobErrorMsg.classList.add("d-none");
    genderErrorMsg.classList.add("d-none");
    pwdErrorMsg.classList.add("d-none");
    pwd2ErrorMsg.classList.add("d-none");
    success.classList.add("d-none");

//Full Name Validation    
    if(name == ""){
        nameErrorMsg.innerText = "This field is mandatory!";
        nameErrorMsg.classList.remove("d-none");
        return;
    }
    if(name.length <2){
         nameErrorMsg.innerText = "Atleast 2 characters are required!";
        nameErrorMsg.classList.remove("d-none");
         return;
    }
    let regex = /^[A-Za-z]+$/; // only alphabets allowed
    if (!regex.test(name)) {
        nameErrorMsg.innerText = "No numbers or special characters allowed.)!";
        nameErrorMsg.classList.remove("d-none");
        return;
    }

//Email Validation
let emailPattern =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     if(email == ""){
        emailErrorMsg.innerText = "This field is mandatory!";
        emailErrorMsg.classList.remove("d-none");
        return;
    }
    if (!emailPattern.test(email)) {
        emailErrorMsg.innerText = "Email must be in the patter Ex.abc@gamil.com";
        emailErrorMsg.classList.remove("d-none");
        return;
    }

//Mobile Validation

let mobilePattern = /^[1-9][0-9]{9}$/; //should start with 1 to 9 , next 9 digits can be numbers between 0 to 1

    if(mobNo == ""){
        mobErrorMsg.innerText = "This field is mandatory!";
        mobErrorMsg.classList.remove("d-none");
        return;
    }
    if (!mobilePattern.test(mobNo)) {
        mobErrorMsg.innerText = "Enter a valid 10-digit mobile number!";
        mobErrorMsg.classList.remove("d-none");
        return;
    }

//Gender Validation

let selectedOption = false;
    genderOptions.forEach(option=>{
        if(option.checked){
            selectedOption=true;
        }
    });
    if(!selectedOption){
        genderErrorMsg.innerText ="Please select your gender!";
        genderErrorMsg.classList.remove("d-none");
        return;
    }

//Password Validation
    if(password == ""){
        pwdErrorMsg.innerText = "Please enter a password";
        pwdErrorMsg.classList.remove("d-none");
        return;
    }
    if(password.length < 6){
        pwdErrorMsg.innerText = "Password should be more than 6 characters!";
        pwdErrorMsg.classList.remove("d-none");
        return;
    }
    if(!/[A-Z]/.test(password)){
        pwdErrorMsg.innerText = "Password should contain atleast 1 uppercase letter !";
        pwdErrorMsg.classList.remove("d-none");
        return;
    }
     if(/\d/.test(password)){
        pwdErrorMsg.innerText = "Password should not contain numbers !";
        pwdErrorMsg.classList.remove("d-none");
        return;
    }

//Confirm Password Validation

    if (confirmPassword ==""){
        pwd2ErrorMsg.innerText="Please enter password again!";
        pwd2ErrorMsg.classList.remove("d-none");
        return;
    }
    if(confirmPassword !== password){
        pwd2ErrorMsg.innerText = "Passwords did not match";
        pwd2ErrorMsg.classList.remove("d-none");
        return;
    }

//If successfully submitted

success.classList.remove("d-none");

}