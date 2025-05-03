// Ana Sayfa JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Banner metni değiştirme
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

    // Slider için ek özellikler
    const slider = document.getElementById('slider');
    if (slider) {
        // Otomatik geçiş süresini ayarlama
        const carousel = new bootstrap.Carousel(slider, {
            interval: 5000
        });
    }

    // Ürün kartları için hover efekti
    const productCards = document.querySelectorAll('.hover-effect');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});