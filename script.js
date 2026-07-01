// Payment info
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";
const DISCORD_SERVER = "https://discord.gg/vQ3g4UzedK";

// Products
const products = [
    {
        id: 1,
        name: "Gon Pixel Art",
        description: "Hunter x Hunter protagonist Gon in stunning pixel art style. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Gon+Pixel+Art"
    },
    {
        id: 2,
        name: "Rengoku Pixel Art",
        description: "Demon Slayer Flame Hashira Rengoku in epic pixel art design. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Rengoku+Pixel+Art"
    },
    {
        id: 3,
        name: "Lucario Pixel Art",
        description: "Pokemon Lucario legendary pixel art style. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Lucario+Pixel+Art"
    },
    {
        id: 4,
        name: "Franky Pixel Art",
        description: "One Piece cyborg Franky in awesome pixel art design. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Franky+Pixel+Art"
    },
    {
        id: 5,
        name: "Yami Pixel Art",
        description: "Black Clover anti-magic Dark Lord Yami in stunning pixel art style. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Yami+Pixel+Art"
    },
    {
        id: 6,
        name: "Meg Pixel Art",
        description: "Exclusive Meg character pixel art design. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Meg+Pixel+Art"
    },
    {
        id: 7,
        name: "Nishinoya Pixel Art",
        description: "Haikyuu volleyball legend Nishinoya in epic pixel art style. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=Nishinoya+Pixel+Art"
    },
    {
        id: 8,
        name: "XXXTentacion Pixel Art",
        description: "XXXTentacion tribute pixel art design. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://via.placeholder.com/300x250?text=XXXTentacion+Pixel+Art"
    }
];

let currentRating = 0;

// Load products and reviews on page load
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    loadReviews();
    setupStarRating();
});

function loadProducts() {
    const grid = document.getElementById('productGrid');
    grid.innerHTML = '';
    
    products.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="buyNow('${product.name}', '${product.price}')" style="cursor: pointer;">⚡ GRIND NOW</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function buyNow(productName, price) {
    const message = `🔥 ${productName} - ${price}

⚙️ GRIND. BUILD. FLEX. 🪚

💵 PAYMENT STEPS:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
1️⃣ Send ${price} to ${CASHAPP_TAG}
   🔗 ${CASHAPP_LINK}

2️⃣ DM ${DISCORD_TAG} on Discord
   📸 Include proof of payment
   🎮 Tell us your LT2 username

3️⃣ Receive your pixel art instantly! ⚡
   📦 Digital delivery
   🚀 Within minutes!

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Discord: ${DISCORD_TAG}
🔗 Server: discord.gg/vQ3g4UzedK
💰 Cash App: ${CASHAPP_TAG}
🪚 Lumber grind never stops!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Trusted | ⚡ Fast | 🎮 LT2 Community`;
    
    alert(message);
}

function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => {
        star.addEventListener('click', function() {
            currentRating = this.dataset.rating;
            updateStarDisplay();
        });
        star.addEventListener('mouseover', function() {
            const rating = this.dataset.rating;
            stars.forEach(s => {
                if (s.dataset.rating <= rating) {
                    s.style.opacity = '1';
                } else {
                    s.style.opacity = '0.5';
                }
            });
        });
    });
    document.querySelector('.star-rating').addEventListener('mouseout', updateStarDisplay);
}

function updateStarDisplay() {
    const stars = document.querySelectorAll('.star');
    const display = document.getElementById('ratingDisplay');
    stars.forEach(star => {
        if (star.dataset.rating <= currentRating) {
            star.classList.add('active');
            star.style.opacity = '1';
        } else {
            star.classList.remove('active');
            star.style.opacity = '0.5';
        }
    });
    if (currentRating > 0) {
        display.textContent = `${currentRating}/5 Stars`;
    } else {
        display.textContent = '';
    }
}

function submitReview() {
    const name = document.getElementById('reviewName').value.trim();
    const comment = document.getElementById('reviewComment').value.trim();
    
    if (!name) {
        alert('Please enter your name! 📝');
        return;
    }
    
    if (!comment) {
        alert('Please write a comment! 💬');
        return;
    }
    
    if (currentRating === 0) {
        alert('Please select a rating! ⭐');
        return;
    }
    
    const review = {
        name: name,
        comment: comment,
        rating: currentRating,
        date: new Date().toLocaleDateString()
    };
    
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    reviews.unshift(review);
    localStorage.setItem('reviews', JSON.stringify(reviews));
    
    // Clear form
    document.getElementById('reviewName').value = '';
    document.getElementById('reviewComment').value = '';
    currentRating = 0;
    updateStarDisplay();
    
    // Reload reviews
    loadReviews();
    
    alert('🎉 Review posted! Thanks for supporting Snags LT2 Hub!');
}

function loadReviews() {
    const reviewsList = document.getElementById('reviewsList');
    let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
    
    reviewsList.innerHTML = '';
    
    if (reviews.length === 0) {
        reviewsList.innerHTML = '<div class="empty-reviews">Be the first to leave a review! 🚀</div>';
        return;
    }
    
    reviews.forEach(review => {
        const stars = '⭐'.repeat(review.rating);
        const reviewCard = document.createElement('div');
        reviewCard.className = 'review-card';
        reviewCard.innerHTML = `
            <div class="review-header">
                <span class="review-name">${review.name}</span>
                <span class="review-stars">${stars}</span>
            </div>
            <p class="review-text">"${review.comment}"</p>
        `;
        reviewsList.appendChild(reviewCard);
    });
}

// Add product function for future updates
function addProduct(name, description, price, imageUrl) {
    products.push({
        id: products.length + 1,
        name: name,
        description: description,
        price: price,
        image: imageUrl
    });
    loadProducts();
}

// Console easter egg
console.log('%c⚙️ SNAGS LT2 HUB ⚙️', 'font-size: 20px; color: #00d4ff; text-shadow: 0 0 10px #00d4ff; font-weight: bold;');
console.log('%cGrind. Build. Flex. 🪚', 'font-size: 16px; color: #00ff88; text-shadow: 0 0 10px #00ff88;');
console.log('Join the community: https://discord.gg/vQ3g4UzedK');