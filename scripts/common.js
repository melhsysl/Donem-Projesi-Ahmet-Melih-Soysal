// Tüm sayfalarda ortak kullanılan JavaScript kodları

document.addEventListener('DOMContentLoaded', function() {
    // Banner metni değiştirme - tüm sayfalar için ortak kod
    initBannerAnimation();
    
    // Navbar scroll efekti
    initNavbarScrollEffect();
});

// Banner animasyonu için ortak fonksiyon
function initBannerAnimation() {
    // Banner elementlerinin varlığını kontrol et
    if (document.getElementById('text1') && document.getElementById('text2')) {
        let currentText = 1;
        
        setInterval(() => {
            if (currentText === 1) {
                document.getElementById('text1').style.display = 'none';
                document.getElementById('text2').style.display = 'block';
                currentText = 2;
            } else {
                document.getElementById('text1').style.display = 'block';
                document.getElementById('text2').style.display = 'none';
                currentText = 1;
            }
        }, 3000); // 3000ms = 3 saniye
    }
}

// Navbar scroll efekti için ortak fonksiyon
function initNavbarScrollEffect() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                navbar.style.backgroundColor = 'rgba(255, 248, 220, 0.95)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = '#fff8dc';
                navbar.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }
        });
    }
}