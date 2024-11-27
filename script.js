let cart = [];

function addToCart(name, image, price, hoverImage) {
    // Check if item already exists in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // Increase quantity and update total price for the item
        existingItem.quantity += 1;
        existingItem.totalPrice = existingItem.quantity * parseFloat(existingItem.price.replace('c', ''));
    } else {
        // Add new item to the cart
        const newItem = {
            name,
            image,
            price,
            hoverImage,
            quantity: 1,
            totalPrice: parseFloat(price.replace('c', '')) // Initial price for 1 quantity
        };
        cart.push(newItem);
    }

    // Update the UI
    updateCartUI();
    updateCartBadge();
}

function updateCartUI() {
    const cartItemsContainer = document.getElementById("cart-items");
    cartItemsContainer.innerHTML = ""; // Clear previous items

    cart.forEach(item => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("d-flex", "justify-content-between", "align-items-center", "mb-3");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
            <span>${item.name} (${item.quantity})</span>
            <span>c${item.totalPrice.toFixed(2)}</span>
            <button class="btn btn-sm btn-danger" onclick="removeFromCart('${item.name}')">Remove</button>
        `;

        cartItemsContainer.appendChild(cartItem);
    });

    updateCartTotal();
}

function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.totalPrice, 0);
    document.getElementById("cart-total").innerText = `c${total.toFixed(2)}`;
}

function updateCartBadge() {
    const cartBadge = document.getElementById("cart-badge");
    cartBadge.innerText = cart.length;

    cartBadge.style.display = cart.length > 0 ? "inline-block" : "none";
}

function clearCart() {
    cart = [];
    updateCartUI();
    updateCartBadge();
}

function removeFromCart(name) {
    cart = cart.filter(item => item.name !== name);
    updateCartUI();
    updateCartBadge();
}
