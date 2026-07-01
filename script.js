// Payment information
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";

// Product data - Your Rengoku Pixel Art
const products = [
    {
        id: 1,
        name: "Rengoku Pixel Art",
        description: "Huge Pixel art design of an anime character from Demon Slayer. Flame Hashira Rengoku with stunning detail and vibrant colors!",
        price: "$2.00",
        image: "https://images.unsplash.com/photo-1579783902614-e3fb5141b0cb?w=500&h=400&fit=crop"
    }
];

// Load products on page load
document.addEventListener('DOMContentLoaded', loadProducts);

function loadProducts() {
    const productGrid = document.getElementById('productGrid');
    productGrid.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div style="position: relative;">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <span class="product-badge">PIXEL ART</span>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="buyNow('${product.name}', '${product.price}')">
                    🛒 Buy Now
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

function buyNow(productName, price) {
    const message = `
🔥 ${productName} - ${price}

💵 PAYMENT INSTRUCTIONS:
━━━━━━━━━━━━━━━━━━━━━━━━━━
1. Send ${price} to: ${CASHAPP_TAG}
   📱 Cash App Link: 
   ${CASHAPP_LINK}

2. DM ${DISCORD_TAG} on Discord with:
   ✓ Your proof of payment
   ✓ Which product you ordered

3. Receive your product instantly! ⚡

━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Discord: ${DISCORD_TAG}
💰 Cash App: ${CASHAPP_TAG}
🔥 Anime Pixel Art Store
━━━━━━━━━━━━━━━━━━━━━━━━━━

Thanks for supporting! ✨
    `;
    
    alert(message);
    
    // Optional: Copy Cash App link to clipboard
    navigator.clipboard.writeText(CASHAPP_LINK).catch(err => {
        console.log('Cash App link:', CASHAPP_LINK);
    });
}

// Allow customization of products
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