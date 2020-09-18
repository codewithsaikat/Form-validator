const form = document.getElementById('form');

const username = document.getElementById('username');

const email = document.getElementById('email');

const password = document.getElementById('password');

const passwordConfirm = document.getElementById('password confirm');

// show input error message 

function showError(input, message) {

    const formControl = input.parentElement;

    formControl.className = 'form-control error';

    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success outline 

function showSuccess(input) {

    const formControl = input.parentElement;

    formControl.className = 'form-control success';
}

// check email is valid 

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields 

function checkRequired(inputArr) {
    inputArr.forEach(function(input){
        if (input.value.trim() === '') {
            showError(input, `${getFiledName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length 

function checkLength(input, min, max) {
    if(input.value.length < min) {

        showError(input, `${getFiledName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max) {
        showError(input, `${getFiledName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}



// Get field name

function getFiledName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, passwordConfirm]);

    checkLength(username, 3, 15);

    checkLength(password, 6, 25);

});