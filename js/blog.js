// Blog Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize blog post animations
    initBlogAnimations();
    
    // Initialize sidebar sticky behavior
    initStickyBehavior();
});

// Initialize blog post animations
function initBlogAnimations() {
    const blogCards = document.querySelectorAll('.blog-card');
    
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
    
    blogCards.forEach(card => {
        observer.observe(card);
    });
}

// Initialize sidebar sticky behavior
function initStickyBehavior() {
    const sidebar = document.querySelector('.sidebar');
    
    if (sidebar && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const mainContent = document.querySelector('.main-content');
            const sidebarHeight = sidebar.offsetHeight;
            const mainContentHeight = mainContent.offsetHeight;
            const scrollPosition = window.scrollY;
            const mainContentOffset = mainContent.offsetTop;
            
            // Check if sidebar is shorter than main content
            if (sidebarHeight < mainContentHeight) {
                if (scrollPosition > mainContentOffset - 100) {
                    sidebar.style.top = '100px';
                    
                    // Prevent sidebar from going beyond the main content
                    if (scrollPosition + sidebarHeight > mainContentOffset + mainContentHeight - 200) {
                        sidebar.style.top = (mainContentOffset + mainContentHeight - sidebarHeight - scrollPosition - 200) + 'px';
                    }
                } else {
                    sidebar.style.top = '0';
                }
            }
        });
    }
}

// Filter blog posts by category
function filterBlogPosts(category) {
    const allPosts = document.querySelectorAll('.blog-card');
    
    if (category === 'all') {
        allPosts.forEach(post => {
            post.style.display = 'block';
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'scale(1)';
            }, 50);
        });
    } else {
        allPosts.forEach(post => {
            if (post.getAttribute('data-category') === category) {
                post.style.display = 'block';
                setTimeout(() => {
                    post.style.opacity = '1';
                    post.style.transform = 'scale(1)';
                }, 50);
            } else {
                post.style.opacity = '0';
                post.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    post.style.display = 'none';
                }, 300);
            }
        });
    }
    
    // Update active class for category links
    document.querySelectorAll('.category-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-category') === category) {
            link.classList.add('active');
        }
    });
}

// Search blog posts
function searchBlogPosts() {
    const searchInput = document.getElementById('blog-search');
    if (!searchInput) return;
    
    const searchTerm = searchInput.value.toLowerCase();
    const allPosts = document.querySelectorAll('.blog-card');
    
    allPosts.forEach(post => {
        const title = post.querySelector('.blog-title').textContent.toLowerCase();
        const description = post.querySelector('.blog-description').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            post.style.display = 'block';
            setTimeout(() => {
                post.style.opacity = '1';
                post.style.transform = 'scale(1)';
            }, 50);
        } else {
            post.style.opacity = '0';
            post.style.transform = 'scale(0.8)';
            setTimeout(() => {
                post.style.display = 'none';
            }, 300);
        }
    });
}
