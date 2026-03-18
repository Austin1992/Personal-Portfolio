//light mode 
const themeToggle = document.querySelector('.theme-switch');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    
    // Toggle the icon between moon and sun
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.classList.replace('far', 'fas');
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fas', 'far');
        icon.classList.replace('fa-sun', 'fa-moon');
    }
});


 /*document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // 1. Toggle Menu Open/Close
    menuToggle.addEventListener('click', (e) => {
        // Prevent theme-switch click from opening/closing menu if needed
        if (e.target.closest('.theme-switch')) return;
        
        navMenu.classList.toggle('active');
        
        // Optional: Change icon from bars to X
        const icon = menuToggle.querySelector('.menu-icon');
        if (navMenu.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });*/

    document.addEventListener('DOMContentLoaded', () => {
    // 1. Grab the elements using the NEW IDs from your HTML
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    // 2. The "If" check prevents the crash seen in your screenshot
    if (menuToggle && navMenu) {
        menuToggle.onclick = () => {
            // Toggle the 'active' class to show/hide menu
            navMenu.classList.toggle('active');
            
            // Optional: Toggle the icon from bars to X if you use FontAwesome
            const icon = menuToggle.querySelector('.menu-icon');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
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
});