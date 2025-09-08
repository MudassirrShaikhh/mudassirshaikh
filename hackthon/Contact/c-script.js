// JavaScript for Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('active');
});

document.getElementById('admissionForm').addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Clear previous errors
    document.querySelectorAll('.error').forEach(function(el) {
        el.textContent = '';
    });

    // Validation flags
    let isValid = true;

    // Name validation
    const name = document.getElementById('Name').value.trim();
    if (name === '') {
        isValid = false;
        document.getElementById('nameError').textContent = 'Name is required.';
    }

    // Email validation
    const email = document.getElementById('Email').value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        isValid = false;
        document.getElementById('emailError').textContent = 'Valid email is required.';
    }

    // Message validation
    const message = document.getElementById('Message').value.trim();
    if (message === '') {
        isValid = false;
        document.getElementById('messageError').textContent = 'Message is required.';
    }

    // If the form is valid, submit it
    if (isValid) {
        alert('Form submitted successfully!');
        // Optionally, you can submit the form programmatically:
        // this.submit();
    }
});