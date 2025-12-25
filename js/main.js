import { products, categories } from './data.js';

// Setup Global State
const state = {
    cart: JSON.parse(localStorage.getItem('wearceylon_cart')) || [],
    wishlist: JSON.parse(localStorage.getItem('wearceylon_wishlist')) || [],
    theme: localStorage.getItem('wearceylon_theme') || 'light'
};

// DOM Elements
const body = document.body;
const cartCountElements = document.querySelectorAll('.cart-count');
const mobileMenuBtn = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const themeToggleBtn = document.getElementById('theme-toggle');

// Helper Functions
function formatCurrency(amount) {
    return 'LKR ' + amount.toLocaleString('en-LK');
}

function updateCartCount() {
    const totalItems = state.cart.reduce((total, item) => total + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);
}

function saveCart() {
    localStorage.setItem('wearceylon_cart', JSON.stringify(state.cart));
    updateCartCount();
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const existingItem = state.cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }

    saveCart();
    alert(`${product.name} added to cart!`);
}

// Theme Handling
function initTheme() {
    body.setAttribute('data-theme', state.theme);
    updateThemeIcon();
}

function toggleTheme() {
    state.theme = state.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('wearceylon_theme', state.theme);
    body.setAttribute('data-theme', state.theme);
    updateThemeIcon();
}

function updateThemeIcon() {
    if (themeToggleBtn) {
        themeToggleBtn.textContent = state.theme === 'light' ? '🌙' : '☀️';
    }
}

// Event Listeners
if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', toggleTheme);
}

// Initialize
function init() {
    initTheme();
    updateCartCount();

    // Check if we are on homepage to render sections
    const featuredGrid = document.querySelector('#featured-grid');
    if (featuredGrid) {
        renderFeaturedProducts(featuredGrid);
    }

    const categoryGrid = document.querySelector('#category-grid');
    if (categoryGrid) {
        renderCategories(categoryGrid);
    }
}

function renderFeaturedProducts(container) {
    const featured = products.filter(p => p.featured).slice(0, 4);
    container.innerHTML = featured.map(product => `
        <div class="product-card">
            <a href="product.html?id=${product.id}" class="product-image">
                <img src="${product.image}" alt="${product.name}">
                ${product.new ? '<span class="badge badge-new">New</span>' : ''}
            </a>
            <div class="product-info">
                <span class="product-category">${product.category}</span>
                <a href="product.html?id=${product.id}">
                    <h3 class="product-title">${product.name}</h3>
                </a>
                <p class="product-price">${formatCurrency(product.price)}</p>
                <button class="btn-add-cart" onclick="window.addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function renderCategories(container) {
    container.innerHTML = categories.map(cat => `
        <div class="category-card">
            <img src="${cat.image}" alt="${cat.name}">
            <div class="category-overlay">
                <h3>${cat.name}</h3>
                <a href="shop.html?cat=${cat.id}" class="btn btn-sm">Shop Now</a>
            </div>
        </div>
    `).join('');
}

// Expose addToCart globally for inline onclick handlers
window.addToCart = addToCart;

document.addEventListener('DOMContentLoaded', init);
