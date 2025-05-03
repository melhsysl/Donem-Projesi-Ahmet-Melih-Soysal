// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product filtering
    initProductFiltering();
    
    // Initialize product animations
    initProductAnimations();
});

// Initialize product filtering
function initProductFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productItems = document.querySelectorAll('.product-item');
    
    // Set active class on all button initially
    document.querySelector('.filter-btn[data-filter="all"]')?.classList.add('active');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            // Show all products if 'all' filter is selected
            if (filter === 'all') {
                productItems.forEach(item => {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 50);
                });
            } else {
                // Show/hide products based on filter
                productItems.forEach(item => {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            }
        });
    });
}

// Initialize product animations
function initProductAnimations() {
    const productCards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fadeInUp');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    productCards.forEach(card => {
        observer.observe(card);
    });
}

// Show product details modal
function showProductDetails(productId) {
    // Sample product data - in a real application, this would come from a database
    const products = {
        'bal1': {
            name: 'Çiçek Balı',
            description: 'Doğal çiçek özlerinden elde edilen saf bal.',
            benefits: [
                'Bağışıklık sistemini güçlendirir',
                'Antioksidan özelliği vardır',
                'Doğal enerji kaynağıdır'
            ],
            image: 'images/product1.jpg'
        },
        'bal2': {
            name: 'Kestane Balı',
            description: 'Kestane çiçeklerinden elde edilen yoğun aromalı bal.',
            benefits: [
                'Solunum yolları rahatsızlıklarına iyi gelir',
                'Sindirim sistemini düzenler',
                'Yüksek mineral içeriğine sahiptir'
            ],
            image: 'images/product2.jpg'
        },
        'polen1': {
            name: 'Çiçek Poleni',
            description: 'Arılar tarafından toplanan protein açısından zengin çiçek poleni.',
            benefits: [
                'Protein ve aminoasit kaynağıdır',
                'B vitaminleri açısından zengindir',
                'Enerji seviyesini artırır'
            ],
            image: 'images/product3.jpg'
        }
    };
    
    // Get product details
    const product = products[productId];
    if (!product) return;
    
    // Set modal content
    const modal = document.getElementById('productModal');
    if (modal) {
        modal.querySelector('.modal-title').textContent = product.name;
        modal.querySelector('.modal-body .product-description').textContent = product.description;
        
        // Set product benefits
        const benefitsList = modal.querySelector('.modal-body .product-benefits');
        benefitsList.innerHTML = '';
        product.benefits.forEach(benefit => {
            const li = document.createElement('li');
            li.textContent = benefit;
            benefitsList.appendChild(li);
        });
        
        // Set product image
        modal.querySelector('.modal-body .product-image').src = product.image;
        
        // Show modal
        const productModal = new bootstrap.Modal(modal);
        productModal.show();
    }
}
