document.addEventListener('DOMContentLoaded', function() {
    // Simulação de carregamento de notícias
    setTimeout(loadNews, 1500);
    
    // Adiciona delays diferentes para cada card de notícia
    function addDelaysToCards() {
        const cards = document.querySelectorAll('.news-card');
        cards.forEach((card, index) => {
            card.style.setProperty('--delay', index);
        });
    }
    
    // Carrega notícias (simulação - na prática, você carregaria de um arquivo JSON)
    function loadNews() {
        const newsContainer = document.querySelector('.news-container');
        newsContainer.innerHTML = '';
        
        // Isso seria substituído por uma requisição real a um arquivo de notícias
        const sampleNews = [
            {
                title: "Novo Parque Inaugurado na Cidade",
                date: "15 de Outubro, 2023",
                excerpt: "A prefeitura inaugurou um novo espaço de lazer com área verde e equipamentos de ginástica.",
                image: "images/news1.jpg"
            },
            {
                title: "Festival Cultural Atrai Milhares",
                date: "10 de Outubro, 2023",
                excerpt: "Evento celebrou a diversidade cultural da região com música, dança e gastronomia.",
                image: "images/news2.jpg"
            },
            {
                title: "Investimentos em Educação",
                date: "5 de Outubro, 2023",
                excerpt: "Escolas municipais receberão novos equipamentos e capacitação para professores.",
                image: "images/news3.jpg"
            }
        ];
        
        sampleNews.forEach((news, index) => {
            const newsCard = document.createElement('div');
            newsCard.className = 'news-card';
            newsCard.style.setProperty('--delay', index);
            
            newsCard.innerHTML = `
                <img src="${news.image}" alt="${news.title}" class="news-image">
                <div class="news-content">
                    <h3 class="news-title">${news.title}</h3>
                    <p class="news-date">${news.date}</p>
                    <p class="news-excerpt">${news.excerpt}</p>
                    <a href="#" class="read-more">Leia mais</a>
                </div>
            `;
            
            newsContainer.appendChild(newsCard);
        });
    }
});
