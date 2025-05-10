// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize accordion elements
    initAccordion();
});

// Initialize accordion
function initAccordion() {
    const faqItems = document.querySelectorAll('.accordion-button');
    
    if (faqItems.length > 0) {
        console.log('FAQ Accordion initialized');
        // Bootstrap 5 handles the accordion functionality automatically
    }
}
