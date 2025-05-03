// About Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize timeline animations
    initTimelineAnimations();
    
    // Initialize team member hover effects
    initTeamMemberEffects();
});

// Initialize timeline animations
function initTimelineAnimations() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
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
    
    timelineItems.forEach(item => {
        observer.observe(item);
    });
}

// Initialize team member hover effects
function initTeamMemberEffects() {
    const teamMembers = document.querySelectorAll('.team-member');
    
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.querySelector('img').style.transform = 'scale(1.1)';
            this.querySelector('img').style.transition = 'transform 0.3s ease';
        });
        
        member.addEventListener('mouseleave', function() {
            this.querySelector('img').style.transform = 'scale(1)';
        });
    });
}

// Counter animation for statistics section
function animateCounter(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Trigger counter animations when stats section is in view
document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
        const counterElements = document.querySelectorAll('.counter');
        
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                counterElements.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, 0, target, 2000);
                });
                observer.unobserve(entries[0].target);
            }
        }, { threshold: 0.5 });
        
        observer.observe(statsSection);
    }
});
