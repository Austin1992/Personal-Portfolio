
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



    //thank you logic formspree
   const contactForm = document.getElementById("contact-form");
const thankYouDiv = document.getElementById("thank-you-msg");

async function handleSubmit(event) {
  event.preventDefault(); // STOPS the redirect to Formspree's site
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  const submitBtn = document.getElementById("submit-btn");

  submitBtn.innerHTML = "Sending...";
  submitBtn.disabled = true;

  fetch("https://formspree.io/f/mdaweelk", { // Replace with your Formspree ID
    method: "POST",
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      // SUCCESS: Hide form and show your custom thank you
      contactForm.style.display = "none";
      thankYouDiv.style.display = "block";
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form";
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form";
  });
}

if (contactForm) {
    contactForm.addEventListener("submit", handleSubmit);
}