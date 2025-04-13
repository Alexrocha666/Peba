document.addEventListener('DOMContentLoaded', () => {
  fetch('noticias.json')
    .then(res => res.json())
    .then(dados => {
      const container = document.getElementById('noticias-container');
      dados.forEach((noticia) => {
        const div = document.createElement('div');
        div.className = 'noticia';
        div.innerHTML = `<h2>${noticia.titulo}</h2><img src="${noticia.imagem}" alt="${noticia.titulo}" width="100%"><p>${noticia.resumo}</p>`;
        div.onclick = () => {
          localStorage.setItem('noticiaSelecionada', JSON.stringify(noticia));
          window.location.href = 'noticia.html';
        };
        container.appendChild(div);
      });
    });
});
