// Add an event listener to the logout button
const button = document.getElementById('logoutButton');
button.addEventListener('click', function() {
    fetch('/logout', {
        method: 'POST',
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // Redirect to the home page upon successful logout
            window.location.href = 'Home.html?v=' + Date.now();
        } else {
            alert('Logout failed. Please try again.');
        }
    })
    .catch(error => {
        console.error('Logout error:', error);
        alert('An error occurred during logout. Please try again later.');
    });
});
