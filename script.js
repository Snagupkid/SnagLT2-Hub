// Payment info
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";
const DISCORD_SERVER = "https://discord.gg/VFtxWX5tDg";

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

// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);

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
🔗 Server: discord.gg/VFtxWX5tDg
💰 Cash App: ${CASHAPP_TAG}
🪚 Lumber grind never stops!
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Trusted | ⚡ Fast | 🎮 LT2 Community`;
    
    alert(message);
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
console.log('Join the community: https://discord.gg/VFtxWX5tDg');