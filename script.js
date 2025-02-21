// Mobile Menu Toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('show');
    navActions.classList.toggle('show');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe elements with animation classes
document.querySelectorAll('.benefit-card, .comparison-column, .content-block, .Trezór-content h2, .column, .content-wrapper h2').forEach(el => {
    observer.observe(el);
});

// Add animation classes when elements are in view
function addAnimationClass(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('content-block') || entry.target.classList.contains('column')) {
                entry.target.style.animationDelay = entry.target.dataset.delay || '0s';
            }
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Only animate once
        }
    });
}

// Create a new observer for scroll animations
const scrollObserver = new IntersectionObserver(addAnimationClass, {
    threshold: 0.2,
    rootMargin: '0px'
});

// Observe all animated elements
document.querySelectorAll('.fade-up, .fade-right, .fade-left, .slide-in-left, .slide-in-right').forEach((el, index) => {
    el.style.animationDelay = `${index * 0.2}s`;
    scrollObserver.observe(el);
});

// Add hover effects to action buttons
document.querySelectorAll('.btn-action, .btn-action-secondary').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
    });
});

// Header Scroll Effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});
