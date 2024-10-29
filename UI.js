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














function enlargeImage(img) {
    // Remove 'enlarged' class from all images
    document.querySelectorAll('.image-container img').forEach((image) => {
      image.classList.remove('enlarged');
    });
  
    // Add 'enlarged' class to the clicked image
    img.classList.add('enlarged');
  }

  














  // Function to open the modal with the clicked image
function openImage(image) {
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-image");
    modal.style.display = "flex"; // Show the modal
    modalImg.src = image.src; // Set the clicked image as modal content
  }
  
  // Function to close the modal when clicking outside the image
  function closeImage() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Hide the modal
  }
  
  




















 
    // Function to check if the element is in view
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add the animation class
    function checkScroll() {
        const typingEffect = document.querySelector('.typing-effect');
        if (isElementInViewport(typingEffect)) {
            typingEffect.classList.add('animate');
            // Remove the event listener after the animation starts
            window.removeEventListener('scroll', checkScroll);
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkScroll);




    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('flipped'); // Toggle the flipped class
        });
    });





    function showLoadingSpinner() {
        document.getElementById("loading-spinner").style.display = "block";
        setTimeout(() => {
            document.getElementById("loading-spinner").style.display = "none";
            document.getElementById("main-content").style.display = "block";
        }, 2000); // Simulate loading delay
      }








      window.onscroll = function() { updateScrollIndicator() };

function updateScrollIndicator() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("scrollIndicator").style.width = scrolled + "%";
}
