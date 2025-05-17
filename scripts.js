function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

const formConfigs = {
    fiber: {
        buttonId: 'fiberButton',      // HTML'de: <a href="#" id="fiberButton" class="wbutton2">Başvurun</a>
        popupId: 'fiberPopup',
        formId: 'fiberForm',
        formType: 'fiber'
    },
    superbox: {
        buttonId: 'superboxButton',   // HTML'de: <a href="#" id="superboxButton" class="bbutton2">Başvurun</a>
        popupId: 'superboxPopup',
        formId: 'superboxForm',
        formType: 'superbox'
    },
    tvPlus: {
        buttonId: 'tvPlusButton',   // HTML'de: <a href="#" id="tvPlusButton" class="bbutton2">Başvurun</a>
        popupId: 'tvPlusPopup',
        formId: 'tvPlusForm',
        formType: 'tv_plus'
    },
    vdsl: {
        buttonId: 'vdslButton',   // HTML'de: <a href="#" id="vdslButton" class="bbutton2">Başvurun</a>
        popupId: 'vdslPopup',
        formId: 'vdslForm',
        formType: 'vdsl'
    },
    buds: {
        buttonId: 'budsButton',   // HTML'de: <a href="#" id="budsButton" class="bbutton2">Başvurun</a>
        popupId: 'budsPopup',
        formId: 'budsForm',
        formType: 'galaxy_buds'
    }
};

// Form işleyicisi sınıfı
class FormHandler {
    constructor(config) {
        this.button = document.getElementById(config.buttonId);
        this.popup = document.getElementById(config.popupId);
        this.form = document.getElementById(config.formId);
        this.closeButton = this.popup.querySelector('.close-popup');
        this.formType = config.formType;
        
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        // Popup açma
        this.button.addEventListener('click', (e) => {
            e.preventDefault();
            this.openPopup();
        });

        // Popup kapatma
        this.closeButton.addEventListener('click', () => {
            this.closePopup();
        });

        // Form gönderimi
        this.form.addEventListener('submit', (e) => {
            e.preventDefault();
            this.submitForm();
        });
    }

    openPopup() {
        this.popup.classList.add('active');
        gsap.fromTo(
            this.popup.querySelector('.popup-content'),
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.4, ease: 'power1.out' }
        );
    }

    closePopup() {
        gsap.to(this.popup.querySelector('.popup-content'), {
            scale: 0.8,
            opacity: 0,
            duration: 0.3,
            ease: 'power1.in',
            onComplete: () => this.popup.classList.remove('active')
        });
    }

    async submitForm() {
        try {
            const formData = new FormData(this.form);
            const response = await fetch(this.form.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                alert('Form başarıyla gönderildi!');
                this.form.reset();
                this.closePopup();
            } else {
                throw new Error('Form gönderilemedi');
            }
        } catch (error) {
            alert('Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin.');
            console.error('Hata:', error);
        }
    }
}

// Form işleyicilerini başlat
Object.values(formConfigs).forEach(config => {
    new FormHandler(config);
});

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
sliderContainer.addEventListener('mouseenter', () => {
    clearInterval(slideInterval);
});

sliderContainer.addEventListener('mouseleave', () => {
    if (!isDragging) {
        slideInterval = setInterval(() => changeSlide(1), 5000);
    }
});