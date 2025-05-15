// Tab switching için event listener
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".detail-options");
    const contentSections = document.querySelectorAll(".content-section");

    // Açılışta 12. seçeneği aktif yap
    const defaultOption = "12";
    const activeSection = document.querySelector(`.content-section[data-content="${defaultOption}"]`);
    if (activeSection) {
        contentSections.forEach(section => section.classList.add("hidden"));
        activeSection.classList.remove("hidden");
    }

    // Açılışta ilgili butonu aktif yap
    const defaultButton = document.querySelector(`.detail-options[data-option="${defaultOption}"]`);
    if (defaultButton) {
        defaultButton.classList.add("active");
    }

    // Butonlara tıklama olaylarını ekle
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const selectedOption = button.getAttribute("data-option");

            contentSections.forEach(section => {
                section.classList.add("hidden");
            });

            const activeSection = document.querySelector(`.content-section[data-content="${selectedOption}"]`);
            if (activeSection) {
                activeSection.classList.remove("hidden");
            }

            buttons.forEach(btn => btn.classList.remove("active"));
            button.classList.add("active");
        });
    });

    // Tüm form handler'ları başlat
    Object.values(formConfigs).forEach(config => {
        const formHandler = new FormHandler(config);
        console.log(`Form handler initialized for: ${config.buttonId}`);
    });
});

// Form yapılandırmaları
const formConfigs = {
    s200gb12m: {
        buttonId: 'sboxButtons200-12m',
        popupId: 'sboxPopups200-12m',
        formId: 'sboxForms200-12m',
        formType: 'superbox'
    },

    s500gb12m: {
        buttonId: 'sboxButtons500-12m',
        popupId: 'sboxPopups500-12m',
        formId: 'sboxForms500-12m',
        formType: 'superbox'
    },

    s1000gb12m: {
        buttonId: 'sboxButtons1000-12m',
        popupId: 'sboxPopups1000-12m',
        formId: 'sboxForms1000-12m',
        formType: 'superbox'
    },

    s2000gb12m: {
        buttonId: 'sboxButtons2000-12m',
        popupId: 'sboxPopups2000-12m',
        formId: 'sboxForms2000-12m',
        formType: 'superbox'
    },

    s5gbEk: {
        buttonId: 'sboxButtons5-ek',
        popupId: 'sboxPopups5-ek',
        formId: 'sboxForms5-ek',
        formType: 'superbox'
    },

    s15gbEk: {
        buttonId: 'sboxButtons15-ek',
        popupId: 'sboxPopups15-ek',
        formId: 'sboxForms15-ek',
        formType: 'superbox'
    },

    s50gbEk: {
        buttonId: 'sboxButtons50-ek',
        popupId: 'sboxPopups50-ek',
        formId: 'sboxForms50-ek',
        formType: 'superbox'
    },

    s200gbEk: {
        buttonId: 'sboxButtons200-ek',
        popupId: 'sboxPopups200-ek',
        formId: 'sboxForms200-ek',
        formType: 'superbox'
    },

};

// Form işleyici sınıfı
class FormHandler {
    constructor(config) {
        this.button = document.getElementById(config.buttonId);
        if (!this.button) {
            console.error(`Button with id ${config.buttonId} not found`);
            return;
        }
        
        this.popup = document.getElementById(config.popupId);
        if (!this.popup) {
            console.error(`Popup with id ${config.popupId} not found`);
            return;
        }

        this.form = document.getElementById(config.formId);
        this.closeButton = this.popup.querySelector('.close-popup');
        this.formType = config.formType;
        
        console.log('FormHandler initialized with:', config);
        this.initializeEventListeners();
    }

    initializeEventListeners() {
        const handleClick = (e) => {
            console.log('Button clicked');
            e.preventDefault();
            e.stopPropagation();
            this.openPopup();
        };

        this.button.addEventListener('click', handleClick);

        this.closeButton.addEventListener('click', () => {
            this.closePopup();
        });

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

// Toggle menu fonksiyonu
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}