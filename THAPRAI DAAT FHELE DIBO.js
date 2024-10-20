window.addEventListener('scroll', function() {
    const imageSection = document.querySelector('.image-section');
    const imageWrapper = document.querySelector('.image-wrapper');

    const rect = imageSection.getBoundingClientRect();
    const screenHeight = window.innerHeight;

    if (rect.top < screenHeight && rect.bottom > 0) {
        imageSection.classList.add('sticky-images');
    } else {
        imageSection.classList.remove('sticky-images');
    }
});
const themeToggleBtn = document.getElementById('theme-toggle');
const apertureLabel = document.getElementById('aperture-label');
const body = document.body;

function toggleTheme() {
  body.classList.toggle('light-theme');
  
  // Update button text
  apertureLabel.textContent = body.classList.contains('light-theme') ? 'F/1.4' : 'F/24';
}

themeToggleBtn.addEventListener('click', toggleTheme);










document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Add focus to the clicked link
        this.focus();
    });
});






