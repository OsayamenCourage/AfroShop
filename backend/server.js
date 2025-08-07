// 🌐 AfroShop Backend Server

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("AfroShop"));

// MongoDB connection
mongoose.connect("mongodb://localhost:27017/afroshopDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});
const User = mongoose.model("User", userSchema);

// Register route
app.post("/register", (req, res) => {
  const newUser = new User(req.body);
  newUser.save().then(() => res.send("User registered!"));
});

// Login route
app.post("/login", (req, res) => {
  User.findOne({ email: req.body.email, password: req.body.password })
    .then(user => {
      if (user) res.send("Login successful!");
      else res.send("Invalid credentials.");
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// Checkout route
app.post("/checkout", (req, res) => {
  // Simulate payment processing
  console.log("Payment info:", req.body);
  res.send("Payment successful! Thank you for shopping with AfroShop.");
});

// Redirect to dashboard
res.redirect("/pages/dashboard.html");

// Admin Panel
const productSchema = new mongoose.Schema({
  name: String,
  category: String,
  price: Number,
  rating: Number
});
const Product = mongoose.model("Product", productSchema);

app.post("/add-product", (req, res) => {
  const newProduct = new Product(req.body);
  newProduct.save().then(() => res.send("Product added!"));
});

