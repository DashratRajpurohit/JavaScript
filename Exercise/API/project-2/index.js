const btn = document.querySelector("#Btn");
const cardsContainer = document.querySelector("#cardsContainer");

function cardCreat(data, index) {
    const card = document.createElement('div');
    card.classList.add("Card");
    card.style.animationDelay = `${index * 0.1}s`;

    const cardImage = document.createElement('div');
    cardImage.classList.add("card-image");

    if (data.primaryImageSmall || data.primaryImage) {
        const img = document.createElement('img');
        img.src = data.primaryImageSmall || data.primaryImage;
        img.alt = data.title || 'Artwork';

        img.onerror = function () {
            console.log(`Failed to load image for: ${data.title}`);
            cardImage.innerHTML = '';
            cardImage.style.background = `linear-gradient(135deg, hsl(${index * 30}, 70%, 60%), hsl(${index * 30 + 60}, 70%, 70%))`;
            cardImage.innerHTML = `<div style="color: white; font-size: 48px; text-align: center;">🎨</div>`;
        };

        img.onload = function () {
            console.log(`✓ Successfully loaded: ${data.title}`);
        };

        cardImage.appendChild(img);
    } else {
        cardImage.style.background = `linear-gradient(135deg, hsl(${index * 30}, 70%, 60%), hsl(${index * 30 + 60}, 70%, 70%))`;
        cardImage.innerHTML = `<div style="color: white; font-size: 48px; text-align: center;">🎨</div>`;
    }

    const cardContent = document.createElement('div');
    cardContent.classList.add("card-content");

    const title = document.createElement('h3');
    title.classList.add("card-title");
    title.textContent = data.title || 'Untitled';

    const artist = document.createElement('p');
    artist.classList.add("card-artist");
    artist.textContent = data.artistDisplayName || data.culture || 'Unknown Artist';

    const date = document.createElement('p');
    date.classList.add("card-date");
    date.textContent = data.objectDate || 'Date unknown';

    const footer = document.createElement('div');
    footer.classList.add("card-footer");

    const badge = document.createElement('span');
    badge.classList.add("card-badge");
    badge.textContent = data.objectName || data.classification || 'Artwork';

    const id = document.createElement('span');
    id.classList.add("card-id");
    id.textContent = `ID: ${data.objectID}`;

    footer.appendChild(badge);
    footer.appendChild(id);

    cardContent.appendChild(title);
    cardContent.appendChild(artist);
    cardContent.appendChild(date);
    cardContent.appendChild(footer);

    card.appendChild(cardImage);
    card.appendChild(cardContent);

    cardsContainer.appendChild(card);
}

async function apiLoad() {
    cardsContainer.innerHTML = '<div class="loading">Loading artworks...</div>';

    try {
        console.log('Fetching artworks from Met Museum...');
        const searchUrl = 'https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=painting';
        const searchResponse = await fetch(searchUrl);
        const searchData = await searchResponse.json();

        console.log(`Found ${searchData.total} artworks`);

        const objectIDs = searchData.objectIDs.slice(0, 12);
        cardsContainer.innerHTML = '<div class="loading">Loading details...</div>';

        const artworkPromises = objectIDs.map(id =>
            fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`)
                .then(res => res.json())
        );

        const artworks = await Promise.all(artworkPromises);
        cardsContainer.innerHTML = '';

        artworks.forEach((artwork, index) => {
            if (artwork && artwork.primaryImage) {
                cardCreat(artwork, index);
            }
        });

        console.log('✓ Cards created!');

        // Start slideshow after 1 second
        setTimeout(() => {
            startSlideshow(artworks.filter(a => a && a.primaryImage));
        }, 1000);

    } catch (error) {
        cardsContainer.innerHTML = '<div class="loading">Error loading artworks.</div>';
        console.error('Error:', error);
    }
}

btn.addEventListener('click', apiLoad);

// Slideshow System
let slideshowData = [];
let currentSlideIndex = 0;
let slideshowInterval = null;
let isPaused = false;
const SLIDE_DURATION = 5000;

const slideshowOverlay = document.getElementById('slideshowOverlay');
const slideshowCard = document.getElementById('slideshowCard');
const closeBtn = document.getElementById('closeSlideshow');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pauseBtn = document.getElementById('pauseBtn');
const progressBar = document.getElementById('progressBar');
const slideCounter = document.getElementById('slideCounter');

function showSlide(index) {
    if (slideshowData.length === 0) return;

    if (index < 0) index = slideshowData.length - 1;
    if (index >= slideshowData.length) index = 0;

    currentSlideIndex = index;
    const artwork = slideshowData[index];

    slideshowCard.classList.remove('show');

    setTimeout(() => {
        slideshowCard.innerHTML = '';

        const cardImage = document.createElement('div');
        cardImage.classList.add('card-image');

        if (artwork.primaryImageSmall || artwork.primaryImage) {
            const img = document.createElement('img');
            img.src = artwork.primaryImageSmall || artwork.primaryImage;
            img.alt = artwork.title || 'Artwork';
            img.onerror = function () {
                cardImage.style.background = `linear-gradient(135deg, hsl(${index * 30}, 70%, 60%), hsl(${index * 30 + 60}, 70%, 70%))`;
                cardImage.innerHTML = `<div style="color: white; font-size: 48px; text-align: center;">🎨</div>`;
            };
            cardImage.appendChild(img);
        } else {
            cardImage.style.background = `linear-gradient(135deg, hsl(${index * 30}, 70%, 60%), hsl(${index * 30 + 60}, 70%, 70%))`;
            cardImage.innerHTML = `<div style="color: white; font-size: 48px; text-align: center;">🎨</div>`;
        }

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const title = document.createElement('h3');
        title.classList.add('card-title');
        title.textContent = artwork.title || 'Untitled';

        const artist = document.createElement('p');
        artist.classList.add('card-artist');
        artist.textContent = artwork.artistDisplayName || artwork.culture || 'Unknown Artist';

        const date = document.createElement('p');
        date.classList.add('card-date');
        date.textContent = artwork.objectDate || 'Date unknown';

        const footer = document.createElement('div');
        footer.classList.add('card-footer');

        const badge = document.createElement('span');
        badge.classList.add('card-badge');
        badge.textContent = artwork.objectName || artwork.classification || 'Artwork';

        const id = document.createElement('span');
        id.classList.add('card-id');
        id.textContent = `ID: ${artwork.objectID}`;

        footer.appendChild(badge);
        footer.appendChild(id);

        cardContent.appendChild(title);
        cardContent.appendChild(artist);
        cardContent.appendChild(date);
        cardContent.appendChild(footer);

        slideshowCard.appendChild(cardImage);
        slideshowCard.appendChild(cardContent);

        slideCounter.textContent = `${index + 1} / ${slideshowData.length}`;

        setTimeout(() => {
            slideshowCard.classList.add('show');
        }, 50);

    }, 300);

    if (!isPaused) {
        startProgressBar();
    }
}

function startProgressBar() {
    progressBar.style.transition = 'none';
    progressBar.style.width = '0%';

    setTimeout(() => {
        progressBar.style.transition = `width ${SLIDE_DURATION}ms linear`;
        progressBar.style.width = '100%';
    }, 50);
}

function startSlideshow(artworks) {
    slideshowData = artworks;
    currentSlideIndex = 0;
    isPaused = false;

    slideshowOverlay.classList.add('active');
    showSlide(0);

    slideshowInterval = setInterval(() => {
        if (!isPaused) {
            showSlide(currentSlideIndex + 1);
        }
    }, SLIDE_DURATION);
}

function stopSlideshow() {
    slideshowOverlay.classList.remove('active');
    if (slideshowInterval) {
        clearInterval(slideshowInterval);
        slideshowInterval = null;
    }
    progressBar.style.width = '0%';
}

function togglePause() {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? '▶ Play' : '⏸ Pause';

    if (isPaused) {
        progressBar.style.transition = 'none';
    } else {
        const currentWidth = parseFloat(progressBar.style.width) || 0;
        const remainingTime = SLIDE_DURATION * (1 - currentWidth / 100);
        progressBar.style.transition = `width ${remainingTime}ms linear`;
        progressBar.style.width = '100%';
    }
}

closeBtn.addEventListener('click', stopSlideshow);
prevBtn.addEventListener('click', () => showSlide(currentSlideIndex - 1));
nextBtn.addEventListener('click', () => showSlide(currentSlideIndex + 1));
pauseBtn.addEventListener('click', togglePause);

document.addEventListener('keydown', (e) => {
    if (!slideshowOverlay.classList.contains('active')) return;

    if (e.key === 'ArrowLeft') showSlide(currentSlideIndex - 1);
    if (e.key === 'ArrowRight') showSlide(currentSlideIndex + 1);
    if (e.key === ' ') {
        e.preventDefault();
        togglePause();
    }
    if (e.key === 'Escape') stopSlideshow();
});
