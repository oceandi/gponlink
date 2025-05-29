// Product Page Scripts

// Buy Button Functionality
let selectedProduct = '';
let selectedPrice = 0;

function openBuyModal(productName, price) {
    // Get the page category
    const pageTitle = document.querySelector('.product-title').textContent;
    
    // Redirect to checkout page with product details
    const checkoutParams = new URLSearchParams({
        product: productName,
        price: price,
        category: pageTitle
    });
    
    window.location.href = `checkout.html?${checkoutParams.toString()}`;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            gsap.from(entry.target, {
                y: 50,
                opacity: 0,
                duration: 0.8,
                ease: 'power2.out'
            });
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});