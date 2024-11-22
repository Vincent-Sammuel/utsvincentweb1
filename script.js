document.getElementById('loginForm').addEventListener('submit', function(event) {  
  event.preventDefault();   

  const username = document.getElementById('username').value;  
  const password = document.getElementById('password').value;  

  
  if (username === "admin123" && password === "12345") {  
      
      window.location.href = "menu.html";  
  } else {  
      alert("Username atau password salah!");  
  }  
});
