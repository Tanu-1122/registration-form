document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Fetch form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // You can perform client-side validation here

    // Send data to the server
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(response => response.json())
    .then(data => {
        console.log('Registration successful:', data);
        // You can redirect or show a success message here
    })
    .catch(error => {
        console.error('Error during registration:', error);
        // Handle errors, show an error message, etc.
    });
});
