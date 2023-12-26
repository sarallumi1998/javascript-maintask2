function validateLogin() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username.trim() === '' || password.trim() === '') {
        showCustomAlert('Please fill in all fields');
    } else if (username.length < 8 || password.length < 8) {
        showCustomAlert('Type greater than 8 characters');
    } else {
        showCustomAlert('Login successful!');
    }
}

function validateInput(value, validationBoxId, minLength) {
    var validationBox = document.getElementById(validationBoxId);
    if (value.trim() === '') {
        validationBox.innerHTML = '';
    } else if (value.length >= minLength) {
        validationBox.innerHTML = '&#10004;'; 
        validationBox.style.color = 'green';
    } else {
        validationBox.innerHTML = '&#10008;'; 
        validationBox.style.color = 'red';
    }
}
function showCustomAlert(message) {
    var customAlert = document.getElementById('customAlert');
    var customAlertMessage = document.getElementById('customAlertMessage');
    
    customAlertMessage.innerText = message;
    customAlert.style.display = 'block';
}

function closeCustomAlert() {
    var customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
}
const form = document.querySelector('#form');
const Username = document.querySelector('#username');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const cpassword = document.querySelector('#cpassword');
let success = true

form.addEventListener('submit',(e)=>{

   if(!validateInputs()){
    e.preventDefault();
   }

})
function validateInputs(){
    const usernameVal = Username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal =password.value.trim();
    const cpasswordVal =cpassword.value.trim();
   if(usernameVal===''){
    success = false;
    setError(username, 'Username is Required')
   }
   else{
   setSuccess(username)
}
if(emailVal===''){
    success = false;
    setError(email,'Email is Required')

}
else if(!validateEmail(emailVal)){
success = false;
setError(email,'Please enter a valid email')
}
else{
    setSuccess(email)
}
    
if(passwordVal === ''){
        success= false;
        setError(password,'Password is required')
    }
    else if(passwordVal.length<8){
        success = false;
        setError(password,'Password must be atleast 8 characters long')
    }
    else{
        setSuccess(password)
    }

    if(cpasswordVal === ''){
        success = false;
        setError(cpassword,'Confirm password is required')
    }
    else if(cpasswordVal!==passwordVal){
        success = false;
        setError(cpassword,'Password does not match')
    }
    else{
        setSuccess(cpassword)
    }

    return success;

}

   
function setError(element,message){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element){
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')
    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };



  function validateAndCreateAccount() {
    
    success = true;

    if (!validateInputs()) {
        showCustomAlert('Please fill in all fields');
        disableFormFields(true);
    } else {
        showCustomAlert('Account successfully created!');
    }
}

function closeCustomAlert() {
    var customAlert = document.getElementById('customAlert');
    customAlert.style.display = 'none';
    disableFormFields(false); 
}

function disableFormFields(disabled) {
    var formFields = document.querySelectorAll('#form input');
    formFields.forEach(function (field) {
        field.disabled = disabled;
    });
}

