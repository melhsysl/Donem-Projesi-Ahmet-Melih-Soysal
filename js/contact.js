// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize contact form validation
    initContactFormValidation();
    
    // Initialize accordion elements
    initAccordion();
});

// Initialize contact form validation
function initContactFormValidation() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form elements
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');
            
            // Validate form
            let isValid = true;
            
            // Name validation
            if (nameInput.value.trim() === '') {
                showError(nameInput, 'Lütfen adınızı girin');
                isValid = false;
            } else {
                showSuccess(nameInput);
            }
            
            // Email validation
            if (emailInput.value.trim() === '') {
                showError(emailInput, 'Lütfen email adresinizi girin');
                isValid = false;
            } else if (!isValidEmail(emailInput.value.trim())) {
                showError(emailInput, 'Lütfen geçerli bir email adresi girin');
                isValid = false;
            } else {
                showSuccess(emailInput);
            }
            
            // Subject validation
            if (subjectInput.value.trim() === '') {
                showError(subjectInput, 'Lütfen konu girin');
                isValid = false;
            } else {
                showSuccess(subjectInput);
            }
            
            // Message validation
            if (messageInput.value.trim() === '') {
                showError(messageInput, 'Lütfen mesajınızı girin');
                isValid = false;
            } else {
                showSuccess(messageInput);
            }
            
            // If form is valid, submit it
            if (isValid) {
                // In a real application, this would send the form data to a server
                showFormSuccess();
                contactForm.reset();
            }
        });
    }
}

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group has-error';
    
    const errorMessage = formGroup.querySelector('.error-message') || document.createElement('div');
    errorMessage.className = 'error-message text-danger mt-1';
    errorMessage.textContent = message;
    
    if (!formGroup.querySelector('.error-message')) {
        formGroup.appendChild(errorMessage);
    }
}

// Show success
function showSuccess(input) {
    const formGroup = input.parentElement;
    formGroup.className = 'form-group has-success';
    
    const errorMessage = formGroup.querySelector('.error-message');
    if (errorMessage) {
        formGroup.removeChild(errorMessage);
    }
}

// Show form success message
function showFormSuccess() {
    const successAlert = document.createElement('div');
    successAlert.className = 'alert alert-success alert-dismissible fade show mt-3';
    successAlert.innerHTML = `
        <strong>Teşekkürler!</strong> Mesajınız başarıyla gönderildi. En kısa sürede sizinle iletişime geçeceğiz.
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    const contactForm = document.getElementById('contact-form');
    contactForm.parentElement.insertBefore(successAlert, contactForm.nextSibling);
    
    // Auto close alert after 5 seconds
    setTimeout(() => {
        const bsAlert = new bootstrap.Alert(successAlert);
        bsAlert.close();
    }, 5000);
}

// Initialize accordion 
function initAccordion() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            
            if (!isExpanded) {
                // Animate the opening
                const accordionCollapse = document.getElementById(this.getAttribute('data-bs-target').substring(1));
                accordionCollapse.style.transition = 'all 0.3s ease';
            }
        });
    });
}

// Toggle FAQ answer visibility 
function toggleFaq(element) {
    const answer = element.nextElementSibling;
    
    if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        element.querySelector('i').classList.remove('bi-dash');
        element.querySelector('i').classList.add('bi-plus');
    } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        element.querySelector('i').classList.remove('bi-plus');
        element.querySelector('i').classList.add('bi-dash');
    }
}
