// 🛒 AfroShop Cart Script

// Simulated cart data
const cart = [
  { name: "African Print Dress", price: 49.99 },
  { name: "Handcrafted Vase", price: 29.99 }
];

// Display cart items
const cartItems = document.getElementById("cartItems");
cart.forEach(item => {
  const div = document.createElement("div");
  div.innerHTML = `<p>${item.name} - €${item.price}</p>`;
  cartItems.appendChild(div);
});

// Checkout function
function checkout() {
  alert("Redirecting to payment...");
}
