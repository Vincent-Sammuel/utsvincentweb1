
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
    
  const hardcodedUsername = 'admin123';
  const hardcodedPassword = '12345';

  const usernameInput = document.getElementById('username').value;
  const passwordInput = document.getElementById('password').value;

  if (usernameInput === hardcodedUsername && passwordInput === hardcodedPassword) {
    
    alert('Login berhasil! Anda akan diarahkan ke halaman menu.');
    window.location.href = 'menu.html';
  } else {
      
    document.getElementById('error-message').style.display = 'block';
  }
});
