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
    f25mbps12m: {
        buttonId: 'fiberButtonf25-12m',
        popupId: 'fiberPopupf25-12m',
        formId: 'fiberFormf25-12m',
        formType: 'fiber'
    },

    f50mbps12m: {
        buttonId: 'fiberButtonf50-12m',
        popupId: 'fiberPopupf50-12m',
        formId: 'fiberFormf50-12m',
        formType: 'fiber'
    },

    f100mbps12m: {
        buttonId: 'fiberButtonf100-12m',
        popupId: 'fiberPopupf100-12m',
        formId: 'fiberFormf100-12m',
        formType: 'fiber'
    },

    f200mbps12m: {
        buttonId: 'fiberButtonf200-12m',
        popupId: 'fiberPopupf200-12m',
        formId: 'fiberFormf200-12m',
        formType: 'fiber'
    },

    f500mbps12m: {
        buttonId: 'fiberButtonf500-12m',
        popupId: 'fiberPopupf500-12m',
        formId: 'fiberFormf500-12m',
        formType: 'fiber'
    },

    f1000mbps12m: {
        buttonId: 'fiberButtonf1000-12m',
        popupId: 'fiberPopupf1000-12m',
        formId: 'fiberFormf1000-12m',
        formType: 'fiber'
    },



    f25mbps24mDevice: {
        buttonId: 'fiberButtonf25-24m-device',
        popupId: 'fiberPopupf25-24m-device',
        formId: 'fiberFormf25-24m-device',
        formType: 'fiber'
    },

    f50mbps24mDevice: {
        buttonId: 'fiberButtonf50-24m-device',
        popupId: 'fiberPopupf50-24m-device',
        formId: 'fiberFormf50-24m-device',
        formType: 'fiber'
    },

    f100mbps24mDevice: {
        buttonId: 'fiberButtonf100-24m-device',
        popupId: 'fiberPopupf100-24m-device',
        formId: 'fiberFormf100-24m-device',
        formType: 'fiber'
    },

    f200mbps24mDevice: {
        buttonId: 'fiberButtonf200-24m-device',
        popupId: 'fiberPopupf200-24m-device',
        formId: 'fiberFormf200-24m-device',
        formType: 'fiber'
    },

    f500mbps24mDevice: {
        buttonId: 'fiberButtonf500-24m-device',
        popupId: 'fiberPopupf500-24m-device',
        formId: 'fiberFormf500-24m-device',
        formType: 'fiber'
    },

    f1000mbps24mDevice: {
        buttonId: 'fiberButtonf1000-24m-device',
        popupId: 'fiberPopupf1000-24m-device',
        formId: 'fiberFormf1000-24m-device',
        formType: 'fiber'
    },


    
    f25mbpsThsz: {
        buttonId: 'fiberButtonf25-t',
        popupId: 'fiberPopupf25-t',
        formId: 'fiberFormf25-t',
        formType: 'fiber'
    },

    f50mbpsThsz: {
        buttonId: 'fiberButtonf50-t',
        popupId: 'fiberPopupf50-t',
        formId: 'fiberFormf50-t',
        formType: 'fiber'
    },

    f100mbpsThsz: {
        buttonId: 'fiberButtonf100-t',
        popupId: 'fiberPopupf100-t',
        formId: 'fiberFormf100-t',
        formType: 'fiber'
    },

    f200mbpsThsz: {
        buttonId: 'fiberButtonf200-t',
        popupId: 'fiberPopupf200-t',
        formId: 'fiberFormf200-t',
        formType: 'fiber'
    },

    f500mbpsThsz: {
        buttonId: 'fiberButtonf500-t',
        popupId: 'fiberPopupf500-t',
        formId: 'fiberFormf500-t',
        formType: 'fiber'
    },

    f1000mbpsThsz: {
        buttonId: 'fiberButtonf1000-t',
        popupId: 'fiberPopupf1000-t',
        formId: 'fiberFormf1000-t',
        formType: 'fiber'
    },


    
    f25mbps12mtv: {
        buttonId: 'fiberButtonf25-12m-tv',
        popupId: 'fiberPopupf25-12m-tv',
        formId: 'fiberFormf25-12m-tv',
        formType: 'fiber'
    },

    f50mbps12mtv: {
        buttonId: 'fiberButtonf50-12m-tv',
        popupId: 'fiberPopupf50-12m-tv',
        formId: 'fiberFormf50-12m-tv',
        formType: 'fiber'
    },

    f100mbps12mtv: {
        buttonId: 'fiberButtonf100-12m-tv',
        popupId: 'fiberPopupf100-12m-tv',
        formId: 'fiberFormf100-12m-tv',
        formType: 'fiber'
    },

    f200mbps12mtv: {
        buttonId: 'fiberButtonf200-12m-tv',
        popupId: 'fiberPopupf200-12m-tv',
        formId: 'fiberFormf200-12m-tv',
        formType: 'fiber'
    },

    f500mbps12mtv: {
        buttonId: 'fiberButtonf500-12m-tv',
        popupId: 'fiberPopupf500-12m-tv',
        formId: 'fiberFormf500-12m-tv',
        formType: 'fiber'
    },

    f1000mbps12mtv: {
        buttonId: 'fiberButtonf1000-12m-tv',
        popupId: 'fiberPopupf1000-12m-tv',
        formId: 'fiberFormf1000-12m-tv',
        formType: 'fiber'
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