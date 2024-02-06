document.getElementById("myForm").addEventListener('submit', function(event) { 
    
    //get the input elements and the error elements
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let firstNameError = document.getElementById("firstNameError");
    let lastNameError = document.getElementById("lastNameError");
    let emailError = document.getElementById("emailError");
    let passwordError = document.getElementById("passwordError")

    

    //clear the previous error messages
    firstNameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    //check if the first name field is empty 
    if (firstName.value.trim() == ""){
        //display an error message and prevent submission
        firstNameError.textContent = "First name cannot be empty";
        event.preventDefault();
    }

    if (lastName.value.trim() == ""){
        lastNameError.textContent = "Last name cannot be empty";
        event.preventDefault();
    }

    if (password.value.trim() == "") {
        passwordError.innerHTML = "Password cannot be empty";
        event.preventDefault();
    }

    if (email.value.trim() == "") {
        emailError.innerHTML = "Email cannot be empty";
        event.preventDefault();
    //check if the email is formatted properly
    } else if (!validateEmail(email.value)) {
        emailError.innerHTML = "Looks like this is not an Email";
        event.preventDefault();
    }


});

 //helper function to validate the email using regex
function validateEmail(email) {
    //define the email patter
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return pattern.test(email);
}