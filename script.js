document.addEventListener('DOMContentLoaded', () => {
    const mobileToggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.mobile-nav a');

    // Toggle Mobile Menu
    mobileToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        mobileToggle.textContent = mobileMenu.classList.contains('active') ? '✕' : '☰';
    });

    // Close menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileToggle.textContent = '☰';
        });
    });

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar transparency check on scroll
    const nav = document.querySelector('nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
            nav.style.padding = '10px 0';
        } else {
            nav.style.backgroundColor = '#ffffff';
            nav.style.padding = '15px 0';
        }
    });
});