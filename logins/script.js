document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
  
    // Simulando um sistema de login básico
    const validUsername = "admin";
    const validPassword = "123456";
  
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
  
    const errorMessage = document.getElementById("error-message");
  
    if (username === validUsername && password === validPassword) {
      // Login bem-sucedido - Redireciona para o site
      window.location.href = "https://www-8wins-com-br-9gcc.vercel.app";
    } else {
      // Exibe uma mensagem de erro
      errorMessage.textContent = "Usuário ou senha inválidos!";
    }
  });
  