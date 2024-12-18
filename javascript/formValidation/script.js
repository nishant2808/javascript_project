const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPassError = document.getElementById('confirmPassError');

submitBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(validateName() && validateEmail() && validatePassword() && validateConfirmpass() ){
        alert("form is succesfully submit");
    }
});
function validateName(){
    let fullName = document.getElementById('fullName').value;

    if(fullName.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateEmail(){
    let email = document.getElementById('email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        emailError.innerHTML = "Enter Valid Email";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validatePassword(){
    let password = document.getElementById('password').value;

    if(password.length == 0){
        passwordError.innerHTML = "Password is required";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,30}$/)){
        passwordError.innerHTML = "Password should contain 1 Uppercase, 1 Lowecase, 1 Digit & 1 Alphabet";
        passwordError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    passwordError.innerHTML = "";
    passwordError.previousElementSibling.classList.add('fa-check');
    return true;
}

function validateConfirmpass(){
    let confirmPass = document.getElementById('confirmPass').value;
    let password = document.getElementById('password').value;

    if(confirmPass.length == 0){
        confirmPassError.innerHTML = " Confirm Password is required";
        confirmPassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(confirmPass  !== password){
        confirmPassError.innerHTML = "Password do not match";
        confirmPassError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }
    confirmPassError.innerHTML = "";
    confirmPassError.previousElementSibling.classList.add('fa-check');
    return true;

}

function myFunction() {
    var pass = document.getElementById("password");
    var confirm = document.getElementById("confirmPass");
    if (pass.type === "password" || confirm.type === "password") {
      pass.type = "text";
      confirm.type = "text";
    } else {
        pass.type = "password";
        confirm.type = "password";
    }
}

