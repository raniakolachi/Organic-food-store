
let cart = [];

function addToCart(name, image, price, hoverImage) {
  const product = { name, image, price, hoverImage };
  cart.push(product);

  updateCartDisplay();
}

function removeFromCart(index) {
  cart = cart.filter((_, i) => i !== index); 
  updateCartDisplay(); 
}

function clearCart() {
  cart = [];
  updateCartDisplay(); 
}

function updateCartDisplay() {
  const cartContainer = document.getElementById("cart-container");
  const cartItems = document.getElementById("cart-items");

  
  cartItems.innerHTML = "";

  if (cart.length > 0) {
    cartContainer.style.display = "block"; 

    cart.map((item, index) => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "cart-item d-flex justify-content-between align-items-center my-2";

      cartItem.innerHTML = `
        <div>
            <img src="${item.hoverImage}" alt="${item.name}" style="width: 50px; height: 50px; object-fit: cover;">
            ${item.name} - ${item.price}
        </div> 
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>`;

      cartItems.appendChild(cartItem); 
    });
  } else {
    cartContainer.style.display = "none"; 
  }
}
