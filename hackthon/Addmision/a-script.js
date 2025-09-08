// JavaScript for Menu Toggle
document.getElementById('menu-icon').addEventListener('click', function() {
    document.getElementById('side-menu').classList.toggle('active');
});


document.getElementById('admissionForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Form submission ko rok leta hai taake validation check ho sake

    // Form Validation
    let isValid = true;
    const fields = ['studentName', 'studentAge', 'guardianName', 'guardianContact', 'grade', 'source'];

    fields.forEach(function(field) {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ccc';
        }
    });

    if (isValid) {
        alert('Form submitted successfully!');
        // Yahan aap form data ko server pe bhejne ke liye AJAX ya kisi aur method ka use kar sakte hain
    } else {
        alert('Please fill in all required fields.');
    }
});
