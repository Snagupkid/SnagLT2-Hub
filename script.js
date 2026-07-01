// Payment info
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";
const DISCORD_SERVER = "https://discord.gg/McgA9Ma329";

// Products
const products = [
    {
        id: 1,
        name: "Rengoku Pixel Art",
        description: "Exclusive Demon Slayer pixel art of Rengoku, the Flame Hashira! Huge design perfect for LT2 collectors and anime fans. High-quality 1080p artwork.",
        price: "$2.00",
        image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=400&fit=crop"
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
🔗 Server: discord.gg/McgA9Ma329
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
console.log('Join the community: https://discord.gg/McgA9Ma329');
