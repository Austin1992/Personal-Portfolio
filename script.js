
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



    //thank you logic EmailJS
   // 1. Initialize EmailJS with your Public Key
(function() {
    emailjs.init("-wCwB-hHinWSRpGal"); // Replace with your Public Key
})();

const contactForm = document.getElementById('contact-form');
const thankYouCard = document.getElementById('thank-you-card');
const submitBtn = document.getElementById('submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // PREVENTS PAGE REFRESH

        // Change button state
        submitBtn.innerHTML = "Processing...";
        submitBtn.disabled = true;

        // Send the form data
        emailjs.sendForm('service_b19qz1b', 'template_wm9ha18', this)
            .then(function() {
                // SUCCESS: Swap Form for Thank You Card
                contactForm.style.display = 'none';
                thankYouCard.style.display = 'block';
                console.log('SUCCESS!');
            }, function(error) {
                // ERROR: Reset button so they can try again
                alert("FAILED... " + JSON.stringify(error));
                submitBtn.innerHTML = "Send Message";
                submitBtn.disabled = false;
            });
    });
}