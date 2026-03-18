//light mode 
// 1. Run as soon as the page loads
const themeSwitch = document.querySelector('.theme-switch');
const body = document.body;

// Check localStorage for saved theme
const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'light') {
    body.classList.add('light-mode');
    updateThemeIcon(true);
}

// 2. Toggle function
if (themeSwitch) {
    themeSwitch.onclick = () => {
        body.classList.toggle('light-mode');
        
        const isLight = body.classList.contains('light-mode');
        localStorage.setItem('portfolio-theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight);
    };
}

// Helper to swap icons
function updateThemeIcon(isLight) {
    const icon = document.querySelector('.theme-switch i');
    if (icon) {
        if (isLight) {
            icon.classList.replace('far', 'fas');
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fas', 'far');
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }
}

     


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
