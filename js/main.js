// Smooth scroll to products section
function scrollToProducts() {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

// Initialize tooltips or other interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add any initialization code here
    console.log('WebShop initialized');
});

// Handle keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Example: Press '/' to focus search
    if (event.key === '/') {
        event.preventDefault();
        // Focus search input
    }
});
