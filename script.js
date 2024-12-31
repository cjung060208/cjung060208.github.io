/* script.js */
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => (slide.style.display = 'none')); // Hide all slides

  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1; // Reset to first slide if at the end

  slides[slideIndex - 1].style.display = 'block'; // Show the current slide
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Start the slideshow
showSlides();