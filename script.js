// Event Listener untuk Form Login
if (document.getElementById('loginForm')) {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usernameInput = document.getElementById('username').value;
      const passwordInput = document.getElementById('password').value;
  
      const storedUsername = localStorage.getItem('username');
      const storedPassword = localStorage.getItem('password');
  
      if (usernameInput === storedUsername && passwordInput === storedPassword) {
        // Jika login berhasil
        window.location.href = 'menu.html';
      } else {
        // Jika login gagal
        document.getElementById('error-message').style.display = 'block';
      }
    });
  }
  
  // Event Listener untuk Form Register
  if (document.getElementById('registerForm')) {
    document.getElementById('registerForm').addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Ambil nilai input dari form
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirm-password').value;
      
      // Validasi kata sandi
      if (password !== confirmPassword) {
        alert('Kata sandi dan konfirmasi kata sandi harus sama.');
        return;
      }
      
      // Simpan data ke Local Storage
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
      
      // Alihkan pengguna ke halaman login
      alert('Registrasi berhasil! Silakan login.');
      window.location.href = 'login.html';
    });
  }
  