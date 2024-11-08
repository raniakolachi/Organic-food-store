
function addToCart(name, image, price, hoverImage) {
  const cartContainer = document.getElementById("cart-container");
  
  cartContainer.style.display = "block";

  const cartItems = document.getElementById("cart-items");
  const cartItem = document.createElement("div");
  cartItem.className = "cart-item d-flex justify-content-between align-items-center my-2";
  
  cartItem.innerHTML = `
      <div>
          <img src="${hoverImage}" alt="${name}" style="width: 50px; height: 50px; object-fit: cover;">
          ${name} - ${price}
      </div> 
      <button class="btn btn-sm btn-danger" onclick="removeFromCart(this)">Remove</button>`;
  
  cartItems.appendChild(cartItem);
}

function removeFromCart(button) {
  const cartContainer = document.getElementById("cart-container");
  
  button.parentElement.remove();
  
  if (!cartContainer.querySelector(".cart-item")) {
    cartContainer.style.display = "none"; 
  }
}

function clearCart() {
  const cartItems = document.getElementById("cart-items");
  
  cartItems.innerHTML = "";
  const cartContainer = document.getElementById("cart-container");
  cartContainer.style.display = "none";
}
