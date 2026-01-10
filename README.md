# 🛒 SmartCart – Vanilla JavaScript E-Commerce Website

SmartCart is a fully functional e-commerce website built using **Vanilla JavaScript**, **HTML**, and **CSS**.  
The project focuses on core JavaScript concepts like DOM manipulation, localStorage, dynamic rendering, and real-time UI updates — without using any frameworks.

---

## 📸 Website Preview

<img width="1366" height="4342" alt="homePage" src="https://github.com/user-attachments/assets/79b7547c-fad4-4407-bb9a-76a761a92311" />
<img width="1366" height="945" alt="AddToCart" src="https://github.com/user-attachments/assets/68de5c4e-5145-48e9-a3df-1314d6b80bcf" />

## 🚀 Features

- Dynamic product listing using JSON data
- Add to cart functionality
- Increment / decrement product quantity
- Real-time price update (without page refresh)
- Cart data stored in `localStorage`
- Remove items from cart
- Real-time cart total & subtotal calculation
- Toast notifications on add/remove actions
- Reusable Header & Footer (JS based)
- Multiple pages:
  - Home
  - Products
  - Cart
  - About
  - Contact

---

## 🧠 What I Learned

- DOM manipulation using JavaScript
- Working with HTML `<template>` elements
- Using `localStorage` to persist cart data
- Handling events efficiently
- Updating UI in real time
- Writing modular JavaScript (separate files)
- Debugging common JavaScript errors
- Structuring a real project without frameworks

---

## 📂 Project Structure
SmartCart/
│
├── Api/
│ └── Products.json
│
├── js/
│ ├── addToCart.js
│ ├── getCartProductFromLocalStorage.js
│ ├── incrementDecrementBtn.js
│ ├── removeTheCartFromCart.js
│ ├── showAddToCartCards.js
│ ├── updateCartProductTotal.js
│ ├── updateCartValue.js
│ ├── header.js
│ ├── footer.js
│ └── showToast.js
│
├── css/
│ └── style.css
│
├── screenshots/
│ ├── homepage.png
│ └── cart.png
│
├── index.html
├── products.html
├── cart.html
├── about.html
├── contact.html
└── README.md
