const form = document.getElementById('validationForm');
const errorMessages = document.getElementById('errorMessages');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    validateForm();
});

function validateForm() {
    errorMessages.innerHTML = ''; // Clear previous error messages

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validation checks
    if (fullName.length < 5) {
        displayError('Full Name must be at least 5 characters');
    }
    if (!email.includes('@')) {
        displayError('Enter a valid Email ID');
    }
    if (phone.length !== 10 || phone === '123456789') {
        displayError('Enter a valid 10-digit Phone Number');
    }
    if (password.length < 8 || password === 'password' || password.toLowerCase() === fullName.toLowerCase()) {
        displayError('Password must be at least 8 characters and cannot be "password" or your name');
    }
    if (password !== confirmPassword) {
        displayError('Passwords do not match');
    }

    // If no errors, submit the form (can add AJAX submission here if needed)
    if (errorMessages.innerHTML === '') {
        form.submit(); // Submit the form
    }
}

function displayError(message) {
    const error = document.createElement('div');
    error.classList.add('alert', 'alert-danger');
    error.textContent = message;
    errorMessages.appendChild(error);
}
