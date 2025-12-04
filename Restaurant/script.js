// Wait for page to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show selected section
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.classList.add('active');
            
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });
    
    // Reservation Form functionality
    const reservationForm = document.getElementById('reservationForm');
    const modal = document.getElementById('successModal');
    const modalMessage = document.getElementById('modalMessage');
    const closeModal = document.querySelector('.close-modal');
    
    reservationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        
        // Show success message
        modalMessage.textContent = `Congratulations ${name}! Your table for ${guests} guest(s) has been reserved for ${date} at ${time}. We look forward to serving you!`;
        modal.style.display = 'block';
        
        // Reset form
        reservationForm.reset();
    });
    
    // Star Rating functionality
    const stars = document.querySelectorAll('.star');
    const ratingValue = document.getElementById('ratingValue');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = this.getAttribute('data-rating');
            ratingValue.value = rating;
            
            // Update star colors
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });
        
        // Hover effect
        star.addEventListener('mouseenter', function() {
            const rating = this.getAttribute('data-rating');
            stars.forEach(s => {
                if (s.getAttribute('data-rating') <= rating) {
                    s.style.color = '#ffd700';
                } else {
                    s.style.color = '#ddd';
                }
            });
        });
    });
    
    // Reset star colors on mouse leave
    document.querySelector('.stars').addEventListener('mouseleave', function() {
        stars.forEach(star => {
            if (star.classList.contains('active')) {
                star.style.color = '#ffd700';
            } else {
                star.style.color = '#ddd';
            }
        });
    });
    
    // Feedback Form functionality
    const feedbackForm = document.getElementById('feedbackForm');
    
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Check if rating is selected
        if (!ratingValue.value) {
            alert('Please select a rating!');
            return;
        }
        
        // Show success message
        modalMessage.textContent = 'Thank you for your feedback! We appreciate your time and will use your input to improve our services.';
        modal.style.display = 'block';
        
        // Reset form
        feedbackForm.reset();
        stars.forEach(star => star.classList.remove('active'));
        ratingValue.value = '';
    });
    
    // Close modal functionality
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // Menu item hover animation
    const menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Gallery item hover animation
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(2deg)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0)';
        });
    });
    
    // Service item animation on scroll
    const serviceItems = document.querySelectorAll('.service-item');
    
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'all 0.6s ease';
        observer.observe(item);
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add animation to main title
    const mainTitle = document.querySelector('.main-title');
    if (mainTitle) {
        let titleText = mainTitle.textContent;
        mainTitle.textContent = '';
        let charIndex = 0;
        
        function typeWriter() {
            if (charIndex < titleText.length) {
                mainTitle.textContent += titleText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 150);
            }
        }
        
        typeWriter();
    }
    
    // Floating elements random movement
    const floatingElements = document.querySelectorAll('.float-item');
    
    floatingElements.forEach(element => {
        setInterval(() => {
            const randomX = Math.random() * 100;
            const randomY = Math.random() * 100;
            element.style.left = randomX + '%';
            element.style.top = randomY + '%';
        }, 15000);
    });
    
    // Set minimum date for reservation to today
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Add loading animation for images
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
    
    // Add parallax effect to sections
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-elements');
        
        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${scrolled * 0.5}px)`;
        });
    });
    
    // Mobile menu toggle (for smaller screens)
    const navLinksContainer = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navLinksContainer.classList.toggle('show');
            });
        });
    }
    
    console.log('Spice Route Restaurant website loaded successfully! 🍽️');
});