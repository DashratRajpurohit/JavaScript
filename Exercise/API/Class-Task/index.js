const btn = document.querySelector("#Btn");
const loading = document.getElementById("loading");
const cardsContainer = document.getElementById("cardsContainer");


const API_KEY = "2c6624b8705e85836a47430c0faa39f1";
const API_URL = `https://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=12`;

function createNewsCard(article, index) {
    const card = document.createElement("div");
    card.className = "card";
    
    
    const date = new Date(article.published_at).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
    
    
    const imageUrl = article.image ;
    
    
    const description = article.description ;
    
    card.innerHTML = `
        <div class="card-image">
            <img src="${imageUrl}" alt="${article.title}" onerror="this.src='https://via.placeholder.com/400x300?text=News+Image'">
        </div>
        <div class="card-content">
            <h3 class="card-title">${article.title}</h3>
            <p class="card-description">${description}</p>
            <p class="card-source">📰 ${article.source}</p>
            <p class="card-date">${date}</p>
            <div class="card-footer">
                <a href="${article.url}" target="_blank" class="card-link">Read More</a>
            </div>
        </div>
    `;
    
    return card;
}

function displayNews(articles) {
    cardsContainer.innerHTML = "";
    
    articles.forEach((article, index) => {
        const card = createNewsCard(article, index);
        cardsContainer.appendChild(card);
    });
}

function loadApi() {
    
    loading.classList.add("show");
    cardsContainer.innerHTML = "";
    
    fetch(API_URL)
        .then((response) => response.json())
                .then((data) => {
            console.log("News-data:", data);
            loading.classList.remove("show");
            
            
                displayNews(data.data);
            
        })
        .catch((error) => {
            console.error("Error loading news:", error);
            loading.classList.remove("show");
            cardsContainer.innerHTML = `<div class="no-data">Error loading news. Please check your internet connection and try again.</div>`;
        });
}

btn.addEventListener("click", loadApi); 