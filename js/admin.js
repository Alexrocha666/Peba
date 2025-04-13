// Simulação de login
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Simulação - na prática, você teria uma verificação segura
    if (username === 'admin' && password === 'fuxico123') {
        // Salva no sessionStorage que o usuário está logado
        sessionStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'painel.html';
    } else {
        alert('Usuário ou senha incorretos!');
    }
});

// Verificação de login para páginas administrativas
if (window.location.pathname.includes('/admin/') && 
    !window.location.pathname.endsWith('/admin/index.html')) {
    
    const isLoggedIn = sessionStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'index.html';
    }
}

// Logout
document.getElementById('logoutBtn')?.addEventListener('click', function() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'index.html';
});

// Simulação de envio de notícia
document.getElementById('newsForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('newsTitle').value;
    const image = document.getElementById('newsImage').value;
    const content = document.getElementById('newsContent').value;
    
    // Aqui você normalmente enviaria para um servidor
    // Para este exemplo, apenas simulamos
    alert(`Notícia "${title}" enviada com sucesso! (Simulação)`);
    
    // Limpa o formulário
    this.reset();
});
