// Products Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize product filtering
    initProductFiltering();
    
    // Initialize product animations
    initProductAnimations();
});

// Function to filter products based on category (for Product Categories section)
function filterProducts(category) {
    // Get all filter buttons and remove active class
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => btn.classList.remove('active'));
    
    // Add active class to the matching filter button
    const targetButton = document.querySelector(`.filter-btn[data-filter="${category}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Get all product items
    const productItems = document.querySelectorAll('.product-item');
    
    // Show all products if 'all' filter is selected
    if (category === 'all') {
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
            if (item.getAttribute('data-category') === category) {
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
    
    // Scroll to products section
    const productsSection = document.querySelector('.product-item').closest('section');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

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
            description: 'Dağ yamaçlarında yetişen doğal çiçeklerden elde edilen saf, yüksek kaliteli bal. Bu özel bal çeşidi, arılarımızın ilkbahar ve yaz aylarında yüksek rakımlı bölgelerde binlerce farklı çiçekten özenle topladığı nektarlardan üretilir. Altın sarısı renge sahip olan çiçek balımız, zengin vitamin ve mineral içeriği ile bağışıklık sistemini güçlendirirken, içerdiği doğal şekerler sayesinde sağlıklı bir enerji kaynağı sunar. Yüksek antioksidan özelliği ile hücre yenilenmesini destekler ve günlük bir kaşık tüketimi ile soğuk algınlığına karşı korunmaya yardımcı olur. Kahvaltılardan tatlılara kadar her öğünde kullanabileceğiniz bu eşsiz lezzet, doğanın en saf hediyesidir.',
            benefits: [
                'Bağışıklık sistemini güçlendirir',
                'Antioksidan özelliği vardır',
                'Doğal enerji kaynağıdır',
                'Soğuk algınlığı ve gribe karşı koruyucudur',
                'Cilt yenilenmesine yardımcı olur',
                'Sindirim sistemini destekler'
            ],
            image: 'images/bal.jfif'
        },
        'bal2': {
            name: 'Kestane Balı',
            description: 'Karadeniz\'in yemyeşil kestane ormanlarından elde edilen, kendine has acımsı tadı ve kuvvetli aroması ile öne çıkan özel bir bal çeşidi. Koyu kahverengi rengi ve yoğun kıvamı ile diğer ballardan kolayca ayırt edilebilen kestane balı, yüksek mineral ve antioksidan içeriğiyle bilinir. Özellikle demir, magnezyum, kalsiyum ve potasyum yönünden zengin olan bu bal, güçlü antimikrobiyal özellikleri sayesinde solunum yolları enfeksiyonlarında doğal destek sağlar. Boğaz ağrıları ve öksürüğe karşı geleneksel bir tedavi olarak kullanılan kestane balı, aynı zamanda sindirim sistemini düzenleyerek mide rahatsızlıklarına iyi gelir. Yüksek antioksidan seviyesi, serbest radikallerle savaşarak hücre hasarını önlemeye yardımcı olur. Her sabah aç karnına bir kaşık tüketildiğinde bağışıklık sistemini güçlendirirken, yorgunluğa karşı da doğal bir enerji kaynağı sağlar.',
            benefits: [
                'Solunum yolları rahatsızlıklarına iyi gelir',
                'Sindirim sistemini düzenler',
                'Yüksek mineral içeriğine sahiptir',
                'Antimikrobiyal özelliği ile enfeksiyonları önlemeye yardımcı olur',
                'Doğal antibiyotik etkisi gösterir',
                'Kan dolaşımını destekler'
            ],
            image: 'images/bal4.jpg'
        },
        'bal3': {
            name: 'Çam Balı',
            description: 'Ege ve Akdeniz bölgelerinin çam ormanlarından elde edilen, eşsiz lezzete sahip özel bir bal türü. Çam balı, diğer ballardan farklı olarak, arıların çiçek nektarı yerine çam ağaçlarında yaşayan basra böceğinin salgıladığı tatlı özsuyu toplamasıyla üretilir. Koyu kehribar renginde olan çam balı, kristalleşmeye dirençli yapısı ve hafif reçinemsi aromasıyla bilinir. İçeriğindeki zengin mineral ve vitaminler sayesinde bağışıklık sistemini güçlendirerek özellikle kış aylarında hastalıklara karşı vücudu korur. Güçlü antioksidan özellikleri ile serbest radikallerle savaşarak hücre yenilenmesine katkı sağlar. Çam balı, içerdiği doğal antibiyotik özellikler sayesinde boğaz enfeksiyonlarına karşı etkilidir ve öksürük giderici özelliği ile soğuk algınlığı sürecinde rahatlatıcı etki yapar. Düzenli tüketildiğinde sindirim sistemini düzenler ve bağırsak florasını destekler.',
            benefits: [
                'Doğal antibiyotik özelliği vardır',
                'Boğaz ağrılarına iyi gelir',
                'Antioksidan ve antimikrobiyal özelliktedir',
                'Sindirim sistemini destekler',
                'Vücut direncini artırır',
                'Akciğer sağlığına faydalıdır'
            ],
            image: 'images/bal3.png'
        },
        'polen1': {
            name: 'Çiçek Poleni',
            description: 'Arıların çiçeklerden topladığı, doğanın en konsantre protein ve besin kaynağı olan mucizevi gıda. Çiçek poleni, arıların arka bacaklarında taşıdıkları küçük sarı-turuncu granüller halinde hasat edilir ve özel kurutma işlemlerinden geçirilerek tüketiciye ulaştırılır. "Doğanın multivitamini" olarak bilinen polen, 22 amino asit, 27 mineral, B kompleks vitaminleri, A, C, D, E vitaminleri, enzimler ve kofaktörler gibi vücudumuzun ihtiyaç duyduğu neredeyse tüm besin maddelerini içerir. Protein içeriği (%35) et ve yumurtadan daha yüksek olan polen, vejetaryen ve veganlar için mükemmel bir protein kaynağıdır. Her sabah bir tatlı kaşığı tüketildiğinde metabolizmayı hızlandırır, fiziksel ve zihinsel performansı artırır, enerji seviyesini yükseltir. Antioksidan özellikleri ile yaşlanma karşıtı etki gösterir, bağışıklık sistemini güçlendirir ve sindirim sistemini düzenler. Histamine karşı doğal direnç oluşturduğu için alerjik reaksiyonlara karşı koruyucu etki gösterir. Özellikle sporcular, yoğun tempoda çalışanlar ve iyileşme sürecindeki kişiler için ideal bir besin takviyesidir.',
            benefits: [
                'Protein ve aminoasit kaynağıdır',
                'B vitaminleri açısından zengindir',
                'Enerji seviyesini artırır',
                'Metabolizmayı hızlandırır',
                'Bağışıklık sistemini güçlendirir',
                'Alerjilere karşı doğal direnç oluşturur'
            ],
            image: 'images/arısütü.jfif'
        },
        'propolis1': {
            name: 'Propolis Özütü',
            description: 'Arıların ağaç kabuklarından topladığı reçineli maddeleri işleyerek oluşturduğu, kovan savunmasında kullanılan doğal antibiyotik özellikli mucizevi bir arı ürünü. Propolisin tarihi insanlık kadar eskidir; antik Mısırlılar mumyalamada, Yunanlılar ve Romalılar ise antiseptik ve yara tedavisinde kullanmıştır. Kahverengi-yeşilimsi renkte olan propolis, 300\'den fazla aktif bileşen içerir; bunlar arasında flavonoidler, fenolik bileşikler, uçucu yağlar ve mineral maddeler bulunur. Güçlü antimikrobiyal, antibakteriyel, antiviral ve antifungal özelliklere sahip olan propolis, bağışıklık sistemini güçlendirerek birçok enfeksiyona karşı vücudu korur. Özellikle üst solunum yolu enfeksiyonları, grip ve soğuk algınlığı gibi hastalıklara karşı etkilidir. Ağız ve boğaz enfeksiyonlarına karşı doğal gargaralar hazırlanmasında kullanılır. Diş eti problemlerini iyileştirir ve diş çürüklerini önlemeye yardımcı olur. Antioksidan özelliği ile serbest radikallerle savaşarak hücre hasarını önler ve erken yaşlanmayı geciktirir. Ayrıca cilt sorunlarında harici kullanımı ile yara iyileştirici ve anti-enflamatuar etki gösterir. 20-30 damla propolisi bir miktar suda karıştırarak günde 2-3 kez tüketebilirsiniz.',
            benefits: [
                'Bağışıklık sistemini güçlendirir',
                'Enfeksiyonlarla mücadele eder',
                'Antioksidan özelliği vardır',
                'Viral enfeksiyonlara karşı koruyucudur',
                'Ağız ve diş sağlığını korur',
                'Yara iyileşmesini hızlandırır',
                'Anti-enflamatuar etkiye sahiptir'
            ],
            image: 'images/propolis.jfif'
        },
        'arisut1': {
            name: 'Arı Sütü',
            description: 'İşçi arıların hypopharyngeal ve mandibular bezlerinden salgıladıkları, kraliçe arının beslenmesinde kullanılan, beyaz-krem renkli, asidik tadı olan, konsantre besin değeri çok yüksek özel bir arı ürünü. Arı sütü, içeriğindeki "royalactin" proteini sayesinde larvaların kraliçe arıya dönüşmesini sağlar ve kraliçe arının normal işçi arılardan 40 kat daha uzun yaşamasına imkan verir. İnsan sağlığı için adeta bir süper besin olan arı sütü, B vitaminleri (özellikle B5 ve B6), A, C, D ve E vitaminleri, mineraller (demir, kalsiyum, potasyum, bakır, silikon), 20 farklı aminoasit, yağ asitleri, enzimler ve antioksidanlar bakımından zengindir. En güçlü bileşenlerinden biri olan 10-HDA (10-hidroksi-2-desenoik asit) güçlü antibiyotik özellik taşır. Arı sütü düzenli tüketildiğinde bağışıklık sistemini güçlendirir, enerji seviyesini artırır, cilt hücrelerinin yenilenmesini sağlar, kolesterol seviyesini düzenler ve kan dolaşımını iyileştirir. Menapoz semptomlarını hafifletir, cinsel performansı artırır ve yaşlanma karşıtı etkiler gösterir. Özellikle kış aylarında dilaltında sabah aç karnına 1/4 çay kaşığı tüketildiğinde (10-15 gün boyunca) vücudun direncini artırır. Güçlü bir tadı olduğu için bal ile karıştırılarak da tüketilebilir.',
            benefits: [
                'Yüksek protein ve vitamin içerir',
                'Hücre yenilenmesini destekler',
                'Cilt sağlığını korur',
                'Bağışıklık sistemini güçlendirir',
                'Zihinsel performansı artırır',
                'Menapoz semptomlarını hafifletir',
                'Doğal antibiyotik etkisi gösterir',
                'Yaşlanma karşıtı özelliklere sahiptir'
            ],
            image: 'images/arı2.jfif'
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
