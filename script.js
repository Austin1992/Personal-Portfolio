
    // Use the ID from your new HTML structure
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.onclick = (e) => {
        e.stopPropagation(); // Prevents clicks from bubbling up
        navMenu.classList.toggle('active');
        console.log("Menu toggled!"); // Check your console for this message
    };
}

    // 2. Close menu when a link is clicked (useful for one-page navigation)
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // 3. Close menu if user clicks outside of it
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
        }
    });



    //logic EmailJS

  window.onload = function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // STOPS the page from refreshing

        // Target the button to show "Sending..."
        const btn = event.target.querySelector('button[type="submit"]');
        const originalBtnText = btn.innerHTML;
        btn.innerHTML = 'Sending...';
        btn.disabled = true;

        // Use your specific IDs
        const serviceID = 'service_b19qz1b';
        const templateID = 'template_wm9ha18';

        emailjs.sendForm(serviceID, templateID, this)
          .then(function() {
            // SUCCESS: Replace form content with a Thank You message
            document.querySelector('.contact-form-container').innerHTML = `
              <div style="text-align:center; padding: 40px; animation: fadeIn 0.5s ease;">
                <i class="fas fa-check-circle" style="font-size: 50px; color: #ffae00;"></i>
                <h2 style="margin-top: 20px; color: #fff;">Message Sent!</h2>
                <p style="color: #a0a0a0;">Thanks! Augustine will get back to you shortly.</p>
                <button onclick="location.reload()" style="margin-top:20px; padding:10px 20px; background:transparent; border:1px solid #ffae00; color:#ffae00; cursor:pointer;">Send Another</button>
              </div>`;
          }, function(error) {
            // ERROR: Log it and reset button
            console.log('FAILED...', error);
            alert("Oops! Send failed. Error: " + JSON.stringify(error));
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
          });
      });
    }
  };

   // Animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.1 }); // Triggers when 10% of the element is visible

// Attach to everything with the 'reveal' class
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));