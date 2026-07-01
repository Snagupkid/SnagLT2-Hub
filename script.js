// Payment info
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";

// Products
const products = [
    {
        id: 1,
        name: "Rengoku Pixel Art",
        description: "Huge Pixel art design of Rengoku from Demon Slayer. Flame Hashira with stunning detail and vibrant colors!",
        price: "$2.00",
        image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=400&fit=crop"
    }
];

// Load products
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
                <button class="product-button" onclick="buyNow('${product.name}', '${product.price}')">🛒 Buy Now</button>
            </div>
        `;
        grid.appendChild(card);
    });
}

function buyNow(productName, price) {
    const message = `🔥 ${productName} - ${price}

💵 PAYMENT:
1. Send ${price} to ${CASHAPP_TAG}
   Link: ${CASHAPP_LINK}

2. DM ${DISCORD_TAG} on Discord
   Include proof of payment

3. Get your pixel art instantly! ⚡

━━━━━━━━━━━━━━━━━━
💬 Discord: ${DISCORD_TAG}
💰 Cash App: ${CASHAPP_TAG}
━━━━━━━━━━━━━━━━━━`;
    
    alert(message);
}

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