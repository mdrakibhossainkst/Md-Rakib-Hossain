// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effects and animations
const socialLinks = document.querySelectorAll('.social-link, .freelance-link');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Add touch effects for mobile
socialLinks.forEach(link => {
    link.addEventListener('touchstart', () => {
        link.style.transform = 'scale(0.95)';
    });
    
    link.addEventListener('touchend', () => {
        link.style.transform = 'scale(1)';
        setTimeout(() => {
            link.style.transform = 'translateY(0)';
        }, 300);
    });
});

// Function to check if device is mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Adjust layout based on device
function adjustLayout() {
    const card = document.querySelector('.card');
    
    if (isMobile()) {
        card.style.padding = '30px 20px';
    } else {
        card.style.padding = '40px 30px';
    }
}

// Run on load and resize
window.addEventListener('load', adjustLayout);
window.addEventListener('resize', adjustLayout);