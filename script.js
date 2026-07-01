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
    alert(`
🎉 ${productName} - ${price}

📱 PAYMENT INSTRUCTIONS:
1. Send ${price} via Cash App
2. DM @snagupkid on Discord with proof of payment
3. You'll receive your account info within minutes!

💬 Discord: @snagupkid
📲 Have questions? Just DM us!
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