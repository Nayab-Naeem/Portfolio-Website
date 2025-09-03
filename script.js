// Initialize Typed.js
        document.addEventListener('DOMContentLoaded', function() {
            var typed = new Typed('.typed-text', {
                strings: ["Web Developer", "Problem Solver", "AI Enthausiast", "CS Student"],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true
            });
            
            // Animate skill bars on scroll
            const skillBars = document.querySelectorAll('.skill-progress');
            
            function animateSkills() {
                skillBars.forEach(bar => {
                    const width = bar.getAttribute('data-width');
                    if (isElementInViewport(bar)) {
                        bar.style.width = width + '%';
                    }
                });
            }
            
            function isElementInViewport(el) {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.left >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }
            
            // Initial check
            animateSkills();
            
            // Check on scroll
            window.addEventListener('scroll', animateSkills);
            
            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 70,
                            behavior: 'smooth'
                        });
                        
                        // Update active nav link
                        document.querySelectorAll('.nav-link').forEach(link => {
                            link.classList.remove('active');
                        });
                        this.classList.add('active');
                    }
                });
            });
            
            // Navbar background on scroll
            window.addEventListener('scroll', function() {
                const navbar = document.querySelector('.navbar');
                if (window.scrollY > 50) {
                    navbar.style.backgroundColor = 'rgba(26, 37, 47, 0.95)';
                    navbar.style.padding = '0.8rem 0';
                } else {
                    navbar.style.backgroundColor = 'var(--primary)';
                    navbar.style.padding = '1.2rem 0';
                }
            });
        });