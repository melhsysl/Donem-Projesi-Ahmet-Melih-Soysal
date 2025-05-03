// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Navbar active state based on current page
    setActiveNavLink();
    
    // Initialize components
    initializeComponents();
    
    // Load navbar and footer
    loadComponents();

    // Initialize animations
    initAnimations();
});

// Set active nav link based on current page
function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop();
    
    // Default to index.html if no page is specified
    const activePage = currentPage === '' ? 'index.html' : currentPage;
    
    // Remove any existing active classes
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Set active class based on current page
    if (activePage === 'index.html') {
        document.getElementById('nav-home')?.classList.add('active');
    } else if (activePage === 'about.html') {
        document.getElementById('nav-about')?.classList.add('active');
    } else if (activePage === 'products.html') {
        document.getElementById('nav-products')?.classList.add('active');
    } else if (activePage === 'blog.html') {
        document.getElementById('nav-blog')?.classList.add('active');
    } else if (activePage === 'contact.html') {
        document.getElementById('nav-contact')?.classList.add('active');
    }
}

// Initialize Bootstrap components
function initializeComponents() {
    // Initialize tooltips
    const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl);
    });
    
    // Initialize popovers
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl);
    });
}

// Load navbar and footer components
function loadComponents() {
    // Load navbar
    fetch('components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar-container').innerHTML = data;
            setActiveNavLink(); // Re-apply active state after navbar is loaded
        });
    
    // Load footer
    fetch('components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;
        });
}

// Smooth scroll to element
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 100,
            behavior: 'smooth'
        });
    }
}

// Initialize fade-in animations
function initAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    
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
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Validate email format
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Format date to readable format
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('tr-TR', options);
}
