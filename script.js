
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Get values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // all fields are filled
    if (name && email && message) {
        alert("Thank you for your message, " + name + "!");
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill out all fields.");
    }
});
