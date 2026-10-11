// Initialize Typed.js
        document.addEventListener('DOMContentLoaded', function() {
            var typed = new Typed('.typed-text', {
                strings: ["Web Developer", "Problem Solver", "AI Enthausiast", "CS Student"],
                typeSpeed: 70,
                backSpeed: 50,
                loop: true
            });
            
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
       // Hero fade-in — runs as soon as DOM is ready, doesn't wait for images
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.hero-animate').forEach((el, i) => {
    setTimeout(() => {
      el.classList.add('visible');
    }, 100 + i * 150);
  });
});

// Stat counters — runs after full page load (images etc.)
window.addEventListener('load', () => {
  [{id:'s1', val:8}, {id:'s2', val:50}, {id:'s3', val:400}].forEach(({id, val}) => {
    let cur = 0;
    const step = val / 50;
    const el = document.getElementById(id);
    const iv = setInterval(() => {
      cur = Math.min(cur + step, val);
      el.textContent = Math.round(cur) + '+';
      if (cur >= val) clearInterval(iv);
    }, 28);
  });
});



// Contact form submission
const form = document.getElementById('contactForm');
form.addEventListener('submit', async function(e) {
  e.preventDefault();
  const btn = form.querySelector('.btn-send');
  btn.textContent = 'Sending...';
  
  const formData = new FormData(form);
  
  try {
    const response = await fetch('https://formspree.io/f/mgoqlobd', {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      btn.textContent = 'Message Sent!';
      btn.style.background = 'linear-gradient(90deg, #059669, #22d3a5)';
      form.reset();
    } else {
      btn.textContent = 'Error. Try again.';
    }
  } catch (error) {
    btn.textContent = 'Error. Try again.';
  }
});
