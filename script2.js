const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-2');
const btn = document.querySelector('button');


function validate(arr) {
    arr.forEach(input => {
        if (input.value.trim() === '') {
            const message = `${capital(input)} is required`;
            error(input, message);
        } else {
            validateLength(password, 6, 15);
            validateLength(username, 3, 15);
        }  
    });
}

function validateLength(input, min, max) {
    if (input.value.length < min) {
        const message = `${capital(input)} must be at least ${min} characters`;
        error(input, message);
    } else if (input.value.length > max) {
        const message = `${capital(input)} must be less than ${max} characters`;
        error(input, message);
    } else {
        success(input);
    }
}

function emailValidation(mail) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email.value)) {
        success(mail);
    } else {
        const message = `${capital(mail)} is not valid`;
        error(mail, message);
    }
}

function validatePassword(pass1, pass2) {
    if (pass2.value.length == 0) {
        const message = `Password confirmation is required`;
        error(pass2, message);
    } else if (pass1.value !== pass2.value && pass2.value.length > 0) {
        const message = `Password does not match`;
        error(pass2, message);
    } else {
        success(pass2);
    }
}

function error(input, message) {
    const inputParent = input.parentElement;
    inputParent.className = 'form-control error';
    inputParent.lastElementChild.innerText = message;
}

function success(input) {
    const inputParent = input.parentElement;
    inputParent.className = 'form-control success';
}

function capital(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    validate([username, email, password, password2]);
    emailValidation(email);
    validatePassword(password, password2);
})
