// Payment information
const CASHAPP_TAG = "$younginmal";
const CASHAPP_LINK = "https://cash.app/$younginmal";
const DISCORD_TAG = "@snagupkid";

// Product data - UPDATE THIS WITH YOUR PRODUCTS
const products = [
    {
        id: 1,
        name: "Premium Account",
        description: "Full access to premium features",
        price: "$19.99",
        image: "https://via.placeholder.com/280x200?text=Premium+Account"
    },
    {
        id: 2,
        name: "Standard Account",
        description: "Great for casual users",
        price: "$9.99",
        image: "https://via.placeholder.com/280x200?text=Standard+Account"
    },
    {
        id: 3,
        name: "Deluxe Account",
        description: "Everything + exclusive perks",
        price: "$29.99",
        image: "https://via.placeholder.com/280x200?text=Deluxe+Account"
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
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-price">${product.price}</div>
                <button class="product-button" onclick="buyNow('${product.name}', '${product.price}')">
                    Buy Now
                </button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

function buyNow(productName, price) {
    const paymentLink = `<a href="${CASHAPP_LINK}" target="_blank" style="color: #0066cc; text-decoration: underline;">📱 Pay via Cash App (${CASHAPP_TAG})</a>`;
    
    alert(`
🎉 ${productName} - ${price}

💵 PAYMENT INSTRUCTIONS:
1. Pay ${price} to ${CASHAPP_TAG}
   Cash App Link: ${CASHAPP_LINK}

2. DM ${DISCORD_TAG} on Discord with:
   - Your proof of payment
   - Which account you bought

3. Get your account info instantly! ⚡

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💬 Discord: ${DISCORD_TAG}
💰 Cash App: ${CASHAPP_TAG}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    `);
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