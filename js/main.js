document.addEventListener('DOMContentLoaded', () => {
    fetch('news.json')
        .then(response => response.json())
        .then(news => {
            const container = document.getElementById('news-container');
            news.forEach(item => {
                container.innerHTML += `
                    <article class="news-card">
                        <a href="noticia.html?id=${item.id}">
                            <img src="${item.image}" class="news-image">
                            <div class="news-content">
                                <h3>${item.title}</h3>
                                <p class="news-date">${item.date}</p>
                                <p>${item.excerpt}</p>
                            </div>
                        </a>
                    </article>
                `;
            });
        });
});
