function createFooter() {
    const footerContent = `
        <div class="five">
            <div class="endofpage">
                <p>Diğer alışveriş seçenekleri: Yakınınızda <a class="underline" href="">bir Gponlink Store</a> veya <a class="underline" href="">başka bir yetkili satıcı bulun</a>. Veya 0850 000 0000 ya da 0532 158 31 84 numaralı telefonu arayın.</p>
                <div class="divider"></div>
                <p>Telif Hakkı © 2025 Gponlink İnternet Ekipmanları | Ağ Çözümleri. Tüm hakları saklıdır.</p>
                <ul class="legal">
                    <a href=""><li class="legalli">Gizlilik Politikası</li></a>
                    <a href=""><li class="legalli">Çerezlerin Kullanımı</li></a>
                    <a href=""><li class="legalli">Kullanım Şartları</li></a>
                    <a href=""><li class="legalli">Cayma Hakkı</li></a>
                    <a href=""><li class="legalli">Yasal Bilgiler</li></a>
                    <a href=""><li class="legalli">Bilgi Toplumu Hizmetleri</li></a>
                </ul>
            </div>
        </div>
    `;
    document.querySelector('.desktop').insertAdjacentHTML('beforeend', footerContent);
}

document.addEventListener('DOMContentLoaded', createFooter);