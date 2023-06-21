// script.js
document.addEventListener('DOMContentLoaded', function() {
	// Retrieve stored username and password from local storage
	const savedUsername = localStorage.getItem('username');
	const savedPassword = localStorage.getItem('password');

	// Check if there are saved details and show the existing user button
	if (savedUsername && savedPassword) {
		const existingUserButton = document.getElementById('existing');
		existingUserButton.style.display = 'inline-block';
	}

	// Handle form submission
	document.getElementById('loginForm').addEventListener('submit', function(e) {
		e.preventDefault();

		const username = document.getElementById('username').value;
		const password = document.getElementById('password').value;
		const rememberMe = document.getElementById('checkbox').checked;

		// Store username and password if "Remember me" checkbox is checked
		if (rememberMe) {
			localStorage.setItem('username', username);
			localStorage.setItem('password', password);
		} else {
			// Remove stored username and password
			localStorage.removeItem('username');
			localStorage.removeItem('password');
		}

		alert(`Logged in as ${username}`);
	});

	// Handle existing user button click
	document.getElementById('existing').addEventListener('click', function() {
		const savedUsername = localStorage.getItem('username');
		alert(`Logged in as ${savedUsername}`);
	});
});
