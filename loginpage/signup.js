document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (firstName && lastName && email &&password && dob && gender) {
        alert('Signup successful! Redirecting to the desired page...');
        // Redirect to the page of your choice after successful sign-up
        window.location.assign='login.html';
    } else {
        alert('Please fill in all fields.');
    }
});
