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

// Slider functionality
let currentIndex = 0;
const slides = document.getElementById('slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let startX, moveX, initialPosition;
let isDragging = false;

function showSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    
    currentIndex = index;
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    
    // Update dots
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

function changeSlide(direction) {
    showSlide(currentIndex + direction);
}

function currentSlide(index) {
    showSlide(index);
}

// Touch and mouse events for swipe functionality
slides.addEventListener('mousedown', dragStart);
slides.addEventListener('touchstart', dragStart);
slides.addEventListener('mousemove', drag);
slides.addEventListener('touchmove', drag);
slides.addEventListener('mouseup', dragEnd);
slides.addEventListener('touchend', dragEnd);
slides.addEventListener('mouseleave', dragEnd);

function dragStart(e) {
    e.preventDefault();
    isDragging = true;
    startX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    initialPosition = -currentIndex * 100;
    
    // Stop auto sliding during manual interaction
    clearInterval(slideInterval);
}

function drag(e) {
    if (!isDragging) return;
    
    moveX = e.type.includes('mouse') ? e.pageX : e.touches[0].pageX;
    const diff = (moveX - startX) / slides.offsetWidth * 100;
    const newPosition = initialPosition + diff;
    
    // Add resistance at the edges
    if ((currentIndex === 0 && diff > 0) || (currentIndex === totalSlides - 1 && diff < 0)) {
        slides.style.transform = `translateX(${newPosition / 3}%)`;
    } else {
        slides.style.transform = `translateX(${newPosition}%)`;
    }
}

function dragEnd() {
    if (!isDragging) return;
    isDragging = false;
    
    const movedBy = moveX - startX;
    
    // If moved enough in either direction, change slide accordingly
    if (movedBy < -100) {
        changeSlide(1);
    } else if (movedBy > 100) {
        changeSlide(-1);
    } else {
        // If not moved enough, snap back to current slide
        showSlide(currentIndex);
    }
    
    // Resume auto sliding
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

// Auto slide
let slideInterval = setInterval(() => changeSlide(1), 5000);

// Pause on hover
const sliderContainer = document.querySelector('.product-slider');
if (sliderContainer) {
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    sliderContainer.addEventListener('mouseleave', () => {
        if (!isDragging) {
            slideInterval = setInterval(() => changeSlide(1), 5000);
        }
    });
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