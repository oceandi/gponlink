// Product Page Scripts

// Buy Modal Functionality
let selectedProduct = '';
let selectedPrice = 0;

function openBuyModal(productName, price) {
    selectedProduct = productName;
    selectedPrice = price;
    
    // Update modal content
    document.getElementById('productName').value = `Router ${productName}`;
    document.getElementById('productPrice').value = price;
    document.getElementById('summaryProduct').textContent = `Router ${productName}`;
    document.getElementById('summaryPrice').textContent = `₺${price.toLocaleString('tr-TR')}`;
    document.getElementById('totalPrice').textContent = `₺${price.toLocaleString('tr-TR')}`;
    
    // Show modal
    document.getElementById('buyModal').style.display = 'block';
    
    // Animate modal
    gsap.from('.modal-content', {
        y: -50,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out'
    });
}

function closeBuyModal() {
    gsap.to('.modal-content', {
        y: -50,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        onComplete: () => {
            document.getElementById('buyModal').style.display = 'none';
        }
    });
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('buyModal');
    if (event.target == modal) {
        closeBuyModal();
    }
}

// Form submission
document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const submitButton = e.target.querySelector('.btn-submit');
    
    // Disable submit button and show loading
    submitButton.disabled = true;
    submitButton.textContent = 'Gönderiliyor...';
    
    try {
        const response = await fetch(e.target.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });
        
        if (response.ok) {
            // Success animation
            submitButton.textContent = '✓ Sipariş Alındı';
            submitButton.style.backgroundColor = '#34c759';
            
            // Prepare order data for confirmation page
            const orderParams = new URLSearchParams({
                order: `GP-${new Date().getFullYear()}-${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}`,
                product: formData.get('product'),
                price: formData.get('price'),
                name: formData.get('fullname'),
                phone: formData.get('phone'),
                address: formData.get('address'),
                city: formData.get('city'),
                district: formData.get('district'),
                installation: formData.get('installation') || 'self'
            });
            
            // Redirect to confirmation page
            setTimeout(() => {
                window.location.href = `order-confirmation.html?${orderParams.toString()}`;
            }, 1500);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        submitButton.disabled = false;
        submitButton.textContent = 'Siparişi Tamamla';
        alert('Bir hata oluştu. Lütfen tekrar deneyin.');
        console.error('Error:', error);
    }
});

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