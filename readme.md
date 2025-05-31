# GponLink - Apple Tarzı E-Ticaret Sitesi

## 🚀 Proje Özeti
GponLink internet ekipmanları ve ağ çözümleri satan, Apple tarzı minimalist tasarıma sahip bir e-ticaret sitesidir.

## 📁 Dosya Yapısı
```
gponlink/
├── index.html                 # Ana sayfa
├── router.html               # Router ürün sayfası
├── ap.html                   # Access Point ürün sayfası
├── powerline.html            # Powerline ürün sayfası
├── mesh.html                 # Mesh WiFi ürün sayfası
├── order-confirmation.html   # Sipariş onay sayfası
├── styles.css                # Ana sayfa stilleri
├── product-styles.css        # Ürün sayfaları stilleri
├── nav.css                   # Navbar stilleri
├── footer.css                # Footer stilleri
├── scripts.js                # Ana sayfa JavaScript
├── product-scripts.js        # Ürün sayfaları JavaScript
├── navbar.js                 # Navbar JavaScript
├── footer.js                 # Footer JavaScript
└── static/
    └── index/                # Ürün görselleri klasörü
        ├── router.png
        ├── router-design.png
        ├── ap.png
        ├── ap-design.png
        ├── powerline.png
        ├── mesh.png
        └── ...
```

## 🛠️ Kurulum

### 1. Formspree Ayarları
Her ürün sayfasında form action URL'lerini güncelle:
```html
<!-- router.html, ap.html, powerline.html, mesh.html içinde -->
<form id="orderForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

[Formspree.io](https://formspree.io) üzerinden form oluşturup ID'leri değiştir.

### 2. Görsel Dosyaları
`static/index/` klasörüne şu görselleri ekle:
- router.png, router-design.png
- ap.png, ap-design.png
- powerline.png, powerline-design.png
- mesh.png, mesh-design.png

### 3. Font Dosyası (Opsiyonel)
SF Pro font kullanmak için `/fonts/SF-Pro.woff2` dosyasını ekle.

## 💳 Ödeme Sistemi
- **Kapıda ödeme** sistemi kullanılıyor
- Kurulum sırasında ödeme alınıyor
- Kredi kartı bilgisi istenmez

## 📋 Sipariş Akışı

1. **Ana Sayfa**: Kullanıcı ürün kategorisini seçer
2. **Ürün Sayfası**: Detayları inceler, model seçer
3. **Sipariş Formu**: Teslimat bilgilerini doldurur
4. **Onay Sayfası**: Sipariş numarası ve detaylar gösterilir

## 🔗 URL Yapısı
```
/ (Ana sayfa)
├── /router.html#buy         # Router satın alma
├── /ap.html#buy            # AP satın alma
├── /powerline.html#buy     # Powerline satın alma
├── /mesh.html#buy          # Mesh satın alma
└── /order-confirmation.html # Sipariş onayı
```

## 📱 Responsive Tasarım
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: 767px ve altı

## 🎨 Renk Paleti
- Primary: #0071e3 (Apple Blue)
- Success: #34c759 (Green)
- Text: #1d1d1f (Dark)
- Secondary: #86868b (Gray)
- Background: #f5f5f7 (Light Gray)

## ⚡ Özellikler
- GSAP animasyonları
- Smooth scroll
- Tab'lı içerik
- Modal formlar
- Otomatik sipariş numarası
- URL parametreleri ile veri aktarımı

## 🔧 Gelecek Geliştirmeler

### Flask Backend (Opsiyonel)
```python
from flask import Flask, request, jsonify
import smtplib

app = Flask(__name__)

@app.route('/api/order', methods=['POST'])
def create_order():
    # Sipariş verilerini al
    order_data = request.json
    
    # Veritabanına kaydet
    order_id = save_to_database(order_data)
    
    # E-posta gönder
    send_email_notification(order_data)
    
    # İş emri oluştur
    create_work_order(order_data)
    
    return jsonify({
        'success': True,
        'order_id': order_id
    })
```

### Ek Özellikler
- [ ] Ürün arama
- [ ] Filtreleme
- [ ] Karşılaştırma tablosu
- [ ] Canlı destek
- [ ] Stok takibi
- [ ] İndirim kodları

## 📞 İletişim
Destek: 0532 158 31 84

---

**Not**: Bu proje Apple'ın tasarım prensiplerinden esinlenilmiştir ancak Apple ile bağlantısı yoktur. 