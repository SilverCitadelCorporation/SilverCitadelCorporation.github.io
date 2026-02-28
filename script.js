// script.js

// JavaScript for interactive features and navigation

// Example interactive function
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Function to initialize event listeners
function init() {
    const menuButton = document.getElementById('menu-button');
    menuButton.addEventListener('click', toggleMenu);
}

// Initialize on document ready
document.addEventListener('DOMContentLoaded', init);