// 🧠 AfroShop Product Loader Script

// Sample product data
const products = [
  {
    name: "African Print Dress",
    image: "assets/images/fashion/fashion1.jpg",
    price: "€49.99"
  },
  {
    name: "Tribal Bluetooth Speaker",
    image: "assets/images/electronics/electronics1.jpg",
    price: "€89.99"
  },
  {
    name: "Handcrafted Vase",
    image: "assets/images/home-decor/decor1.jpg",
    price: "€29.99"
  }
];

// 🛒 Load products into the homepage
const productGrid = document.getElementById("productGrid");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";
  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <h3>${product.name}</h3>
    <p>${product.price}</p>
    <button onclick="addToCart('${product.name}')">Add to Cart</button>
  `;
  productGrid.appendChild(card);
});

// 🛍️ Add to Cart function
function addToCart(productName) {
  alert(`${productName} added to cart!`);
}

// 🧠 Filtering logic already provided earlier
// Make sure displayProducts() targets #productContainer

