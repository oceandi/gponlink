function createNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <a class="noact" href="index.html">
                <img class="navlogo" src="https://raw.githubusercontent.com/oceandi/links/refs/heads/main/ISP/images/homepage/logo.png">
            </a>
            <div class="nwa">
                <ul class="nav-menu">
                    <li><a href="router.html" draggable="false">Router</a></li>
                    <li><a href="ap.html" draggable="false">AP</a></li>
                    <li><a href="powerline.html" draggable="false">Powerline</a></li>
                    <li><a href="mesh.html" draggable="false">Mesh</a></li>
                    <li><a href="tel:+905321583184" draggable="false">Destek</a></li>
                </ul>
            </div>
            <div class="hamburger" onclick="toggleMenu()">
                <span></span>
                <span></span>
            </div>
        </nav>
    `;
    document.body.insertAdjacentHTML('afterbegin', navbarHTML);
}

function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
}

// Sayfa Yüklendiğinde Navbar Oluştur
window.addEventListener('DOMContentLoaded', createNavbar);