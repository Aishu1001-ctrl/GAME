document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents default form submission
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    
    if (name && email && password) {
        alert("Account created successfully!");
        window.location.href = "../login/login.html"; // Redirect to login page
    } else {
        alert("Please fill in all fields.");
    }
});
