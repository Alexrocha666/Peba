document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('news.json');
        const news = await response.json();
        renderNews(news);
    } catch (error) {
        console.error('Erro ao carregar notícias:', error);
        document.getElementById('news-container').innerHTML = `
            <p class="error-message">Erro ao carregar notícias. Tente recarregar a página.</p>
        `;
    }
});

function renderNews(news) {
    const container = document.getElementById('news-container');
    
    news.forEach(item => {
        const newsCard = document.createElement('article');
        newsCard.className = 'news-card';
        newsCard.innerHTML = `
            <a href="noticia.html?id=${item.id}" class="news-link">
                <img src="${item.image}" class="news-image">
                <div class="news-content">
                    <h3>${item.title}</h3>
                    <p class="news-date">${item.date}</p>
                    <p>${item.excerpt}</p>
                </div>
            </a>
        `;
        container.appendChild(newsCard);
    });
}
