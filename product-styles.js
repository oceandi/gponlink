// Product Page Scripts

// Specs Tab Functionality
function showSpec(specType) {
    // Hide all spec contents
    const allSpecs = document.querySelectorAll('.spec-content');
    allSpecs.forEach(spec => spec.classList.remove('active'));
    
    // Remove active class from all tabs
    const allTabs = document.querySelectorAll('.spec-tab');
    allTabs.forEach(tab => tab.classList.remove('active'));
    
    // Show selected spec content
    document.getElementById(specType).classList.add('active');
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}

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
            
            setTimeout(() => {
                closeBuyModal();
                e.target.reset();
                submitButton.disabled = false;
                submitButton.textContent = 'Siparişi Tamamla';
                submitButton.style.backgroundColor = '#0071e3';
                
                // Show success message
                showSuccessMessage();
            }, 2000);
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

// Success message
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.innerHTML = `
        <div class="success-content">
            <div class="success-icon">✓</div>
            <h3>Siparişiniz Alındı!</h3>
            <p>En kısa sürede sizinle iletişime geçeceğiz.</p>
        </div>
    `;
    document.body.appendChild(successDiv);
    
    // Animate success message
    gsap.from(successDiv, {
        y: 50,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
    
    // Remove after 5 seconds
    setTimeout(() => {
        gsap.to(successDiv, {
            y: 50,
            opacity: 0,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: () => successDiv.remove()
        });
    }, 5000);
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

// Add success message styles
const style = document.createElement('style');
style.textContent = `
    .success-message {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #fff;
        border-radius: 18px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        padding: 30px;
        z-index: 3000;
        min-width: 300px;
    }
    
    .success-content {
        text-align: center;
    }
    
    .success-icon {
        width: 60px;
        height: 60px;
        background-color: #34c759;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        margin: 0 auto 20px;
    }
    
    .success-message h3 {
        font-size: 21px;
        font-weight: 600;
        margin-bottom: 8px;
    }
    
    .success-message p {
        font-size: 17px;
        color: #86868b;
    }
`;
document.head.appendChild(style);