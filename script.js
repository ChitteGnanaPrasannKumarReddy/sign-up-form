function validateEmail() {
    const email = document.getElementById('email').value;
    const emailMessage = document.getElementById('emailMessage');

    if (email.length > 3 && email.includes('@') && email.includes('.')) {
        emailMessage.textContent = 'Email looks good!';
        emailMessage.className = 'message success';
    } else {
        emailMessage.textContent = 'Make sure email is more than 3 characters and has @ and a.';
        emailMessage.className = 'message error';
    }
}

function validatePassword() {
    const password = document.getElementById('password').value;
    const passwordMessage = document.getElementById('passwordMessage');

    if (password.length > 8) {
        passwordMessage.textContent = 'Password looks good!';
        passwordMessage.className = 'message success';
    } else {
        passwordMessage.textContent = 'Make sure password is more than 8 characters.';
        passwordMessage.className = 'message error';
    }
}

function handleSubmit() {
    const emailMessage = document.getElementById('emailMessage');
    const passwordMessage = document.getElementById('passwordMessage');

    if (emailMessage.className === 'message success' && passwordMessage.className === 'message success') {
        if (confirm('Do you want to submit the form?')) {
            alert('Successful signup!');
        } else {
            document.getElementById('signupForm').reset();
            emailMessage.textContent = '';
            passwordMessage.textContent = '';
        }
    } else {
        alert('Please ensure all fields are filled out correctly.');
    }
}
