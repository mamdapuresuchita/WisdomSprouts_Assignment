passwordInput = document.querySelector("#password");
strText = document.querySelector("#checkStrength");



passwordInput.addEventListener("input",()=>{ //every time the user types in the password box, the function runs.
    pwd = passwordInput.value;

    //Regex checks

    lower =  /[a-z]/.test(pwd);
    upper =  /[A-Z]/.test(pwd);
    num = /[0-9]/.test(pwd);
    special = /[@$!%*?&]/.test(pwd);
    lengthOfPassword = pwd.length >= 8; //true if length of password is more than 8

    
    let strength = 0;

     if (lower) strength++; //if valid add count to strength
     if (upper) strength++;
     if (num) strength++;
     if (special) strength++;
     if (lengthOfPassword) strength++;

     //Show result

        if (pwd.length === 0) {
        strText.textContent = "";//If input is empty clears the message.
        }
         else if (strength <= 2) {
        strText.textContent = "Weak Password ";
        strText.className = "weak";//strText is your DOM element (the <div id="checkStrength"> where you show the message).
        } 
        else if (strength === 3 || strength === 4) {
        strText.textContent = "Medium Strength";
        strText.className = "medium";
        }
        else if (strength === 5) {
        strText.textContent = "Strong Password";
        strText.className = "strong";
        }

});