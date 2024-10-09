// Switch between sign up and login forms
function switchForm(formId) {
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById(formId).style.display = 'block';
}

// Function to check password as the user types
function checkPassword() {
    const password = document.getElementById('password').value;
    const requirements = document.getElementById('passwordRequirements');

    let valid = true;

    // Check length
    if (password.length >= 8) {
        document.getElementById('length').classList.add('valid');
        document.getElementById('length').classList.remove('invalid');
    } else {
        document.getElementById('length').classList.add('invalid');
        document.getElementById('length').classList.remove('valid');
        valid = false;
    }

    // Check for uppercase letter
    if (/[A-Z]/.test(password)) {
        document.getElementById('uppercase').classList.add('valid');
        document.getElementById('uppercase').classList.remove('invalid');
    } else {
        document.getElementById('uppercase').classList.add('invalid');
        document.getElementById('uppercase').classList.remove('valid');
        valid = false;
    }

    // Check for lowercase letter
    if (/[a-z]/.test(password)) {
        document.getElementById('lowercase').classList.add('valid');
        document.getElementById('lowercase').classList.remove('invalid');
    } else {
        document.getElementById('lowercase').classList.add('invalid');
        document.getElementById('lowercase').classList.remove('valid');
        valid = false;
    }

    // Check for number
    if (/\d/.test(password)) {
        document.getElementById('number').classList.add('valid');
        document.getElementById('number').classList.remove('invalid');
    } else {
        document.getElementById('number').classList.add('invalid');
        document.getElementById('number').classList.remove('valid');
        valid = false;
    }

    // Check for special character
    if (/[@$!%*?&]/.test(password)) {
        document.getElementById('special').classList.add('valid');
        document.getElementById('special').classList.remove('invalid');
    } else {
        document.getElementById('special').classList.add('invalid');
        document.getElementById('special').classList.remove('valid');
        valid = false;
    }

    // Show/hide the requirements list
    if (valid) {
        requirements.style.display = 'none';
    } else {
        requirements.style.display = 'block';
    }
}

function validateAndRedirect() {
    // Get the password input value
    var password = document.getElementById('password').value;
    
    // Perform password validation
    if (validatePassword(password)) {
        // If password is valid, redirect to main.html
        window.location.href = 'main.html';
    } else {
        // If password is invalid, show an error message
        alert('Invalid password. Please try again.');
    }
}

// Validate password before form submission
function validatePassword() {
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');
    let missingRequirements = [];

    // Check for each requirement and add missing ones to the list
    if (password.length < 8) {
        missingRequirements.push("at least 8 characters");
    }

    if (!/[A-Z]/.test(password)) {
        missingRequirements.push("one uppercase letter");
    }

    if (!/[a-z]/.test(password)) {
        missingRequirements.push("one lowercase letter");
    }

    if (!/\d/.test(password)) {
        missingRequirements.push("one number");
    }

    if (!/[@$!%*?&]/.test(password)) {
        missingRequirements.push("one special character (@$!%*?&)");
    }

    // If any requirements are missing, display the error message
    if (missingRequirements.length > 0) {
        errorMessage.textContent = "Password does not meet the following requirement(s): " + missingRequirements.join(", ") + ".";
        return false; // Prevent form submission
    }

    // Clear the error message and show a success message when valid
    errorMessage.textContent = "";
    alert("You have successfully signed up!");
    return true; // Allow form submission
}


// Toggle password visibility
function togglePassword() {
    const passwordField = document.getElementById('password');
    passwordField.type = (passwordField.type === 'password') ? 'text' : 'password';
}