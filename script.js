const usernameE1 = document.querySelector('#username');
const emailE1 = document.querySelector('#email');
const passwordE1 = document.querySelector('#password');
const confirmPasswordE1 = document.querySelector('#confirm-password');
const form = document.querySelector('#signup')

form.addEventListener('submit', function(e){
    e.preventDefault() //prevent the form from performing any other event than submit.

    //validate feilds
    let isUsernameValid = checkUsername(),
        isEmailValid = checkEmail(),
        isPasswordValid = checkPassword(),
        isConfirmPasswordValid = checkConfirmPassword();
    let isFormValid = isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid;
    //submit to the server if the form is valid
    if(isFormValid){
    }
});

const checkUsername = () => {
    let valid = false;
    const min = 3,
    max = 25;
    const username = usernameE1.value.trim();
    if(!isRequired(username)){
        showError(usernameE1, 'Username cannot be blank');
    }else if(!isBetween(username.length, min, max)){
        showError(usernameE1, `Username must be between ${min} and ${max} characters.`)
    }else{
        showSuccess(usernameE1);
        valid = true;
    }
    return valid;
};
const isRequired = value => value === '' ? false: true;
const isBetween = (length, min, max) => length < min || length > max ? false: true;

const showError = (input, message) => {
    //get the form feild element
    const formFeild = input.parentElement;
    //add the error class
    formFeild.classList.remove('success');
    formFeild.classList.add('error');
    //show the error message
    const error = formFeild.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    const formFeild = input.parentElement;
    formFeild.classList.remove('error');
    formFeild.classList.add('success');
    // formFeild.classList.remove('error');
    // formFeild.classList.add('success');
    const success = formFeild.querySelector('small');
    success.textContent = '';
};









