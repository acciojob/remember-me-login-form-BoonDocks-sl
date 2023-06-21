  if (localStorage.getItem('username') && localStorage.getItem('password')) {
      const existingButton = document.createElement('button');
      existingButton.id = 'existing';
      existingButton.textContent = 'Login as existing user';
      document.body.appendChild(existingButton);
    }

    // Submit event listener
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const rememberMe = document.getElementById('checkbox').checked;

      if (rememberMe) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
      }

      alert('Logged in as ' + username);
    });

    // Existing user button event listener
    document.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'existing') {
        const savedUsername = localStorage.getItem('username');
        alert('Logged in as ' + savedUsername);
      }
    });