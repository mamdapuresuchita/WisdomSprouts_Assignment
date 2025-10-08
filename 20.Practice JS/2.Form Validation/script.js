const usernameInput = document.getElementById("username").value.trim();
const emailInput = document.getElementById("email").value.trim();
const passwordInput = document.getElementById("password").value.trim();
const form = document.getElementById("myForm");

const usernameErrorMsg = document.getElementById("usernameError");
const emailErrorMsg = document.getElementById("emailError");
const passwordErrorMsg = document.getElementById("passwordError");
const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
      e.preventDefault(); // prevent automatic submit
      let isValid = true;
  
      const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/; // simple email check
  
      //reset error msg
      usernameErrorMsg.classList.add("d-none");
      emailErrorMsg.classList.add("d-none");
      passwordErrorMsg.classList.add("d-none");
      successMsg.classList.add("d-none");

      //username validation
      if(usernameInput == ""){
        usernameErrorMsg.innerText = "Username is required!";
        usernameErrorMsg.classList.remove("d-none");
        isValid =false;
      }

      if(!emailPattern.test(emailInput)){
        emailErrorMsg.innerText = "Enter a valid email id";
        emailErrorMsg.classList.remove("d-none");
        isValid= false ;
      }

      if(passwordInput.length > 6){
        passwordErrorMsg.innerText = "Password must be atleast 6 charactes long";
        passwordErrorMsg.classList.remove("d-none");
        isValid = false;
      }

      if (isValid) {
        successMsg.classList.remove("d-none");
         alert("Form submitted successfully ✅");
        form.reset();
      }

  })

