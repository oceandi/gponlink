// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Page load animation
window.addEventListener('load', function() {
    setTimeout(() => {
        document.body.classList.remove('preload');
        document.querySelector('.desktop').style.opacity = '1';
        document.querySelector('.desktop').style.transition = 'opacity 0.3s ease';
        
        const spinner = document.querySelector('.loading-spinner');
        spinner.style.opacity = '0';
        spinner.style.transition = 'opacity 0.3s ease';
        
        setTimeout(() => spinner.remove(), 300);
    }, 300);
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