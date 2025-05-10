/**
 * Blog sayfaları için komponent yükleyici
 * Navbar ve Footer'ı HTML sayfalarına yükler
 */

// Sayfa yüklendiğinde çalış
document.addEventListener('DOMContentLoaded', function() {
    // Navbar'ı yükle
    loadNavbar();
    
    // Footer'ı yükle
    loadFooter();
    
    // Blog menü öğesini aktif yap
    makeNavItemActive('nav-blog');
    
    // Link yollarını düzelt
    fixNavbarLinks();
});

/**
 * Navbar'ı yükle
 */
function loadNavbar() {
    // XMLHttpRequest kullanarak navbar HTML'ini getir
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../components/navbar.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        
        // Navbar içeriğini sayfaya ekle
        document.getElementById('navbar-container').innerHTML = this.responseText;
        
        // Navbar yüklendikten sonra aktif menüyü güncelle ve linkleri düzelt
        setTimeout(function() {
            makeNavItemActive('nav-blog');
            fixNavbarLinks();
        }, 100);
    };
    xhr.send();
}

/**
 * Footer'ı yükle
 */
function loadFooter() {
    // XMLHttpRequest kullanarak footer HTML'ini getir
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '../components/footer.html', true);
    xhr.onreadystatechange = function() {
        if (this.readyState !== 4) return;
        if (this.status !== 200) return;
        
        // Footer içeriğini sayfaya ekle
        document.getElementById('footer-container').innerHTML = this.responseText;
        
        // Footer linkleri düzelt
        setTimeout(function() {
            fixFooterLinks();
        }, 100);
    };
    xhr.send();
}

/**
 * Belirtilen ID'ye sahip nav-item'ı aktif yap
 */
function makeNavItemActive(navId) {
    // Tüm nav-link'lerin active sınıfını kaldır
    var navLinks = document.querySelectorAll('.nav-link');
    if (navLinks) {
        navLinks.forEach(function(link) {
            link.classList.remove('active');
        });
    }
    
    // Belirtilen ID'ye sahip nav-link'e active sınıfı ekle
    var activeLink = document.getElementById(navId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

/**
 * Navbar link yollarını düzelt (alt klasörden ana dizine gitmek için)
 */
function fixNavbarLinks() {
    var navLinks = document.querySelectorAll('#navbarNav .nav-link');
    if (navLinks) {
        navLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href && !href.startsWith('../') && !href.startsWith('http')) {
                link.setAttribute('href', '../' + href);
            }
        });
    }
}

/**
 * Footer link yollarını düzelt
 */
function fixFooterLinks() {
    var footerLinks = document.querySelectorAll('#footer-container a');
    if (footerLinks) {
        footerLinks.forEach(function(link) {
            var href = link.getAttribute('href');
            if (href && !href.startsWith('../') && !href.startsWith('http') && !href.startsWith('#')) {
                link.setAttribute('href', '../' + href);
            }
        });
    }
}
