let slideIndex = 0;
const slides = document.querySelectorAll('.MySlide');

function showSlides() {
  // Hide all slides initially
  slides.forEach(slide => {
    slide.style.display = 'none';
  });

  // Show the current slide
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = 'block';

  // Change slide every 15 seconds
  setTimeout(showSlides, 15000);
}

// Call showSlides initially to start the slideshow
showSlides();

function changeSlide(n) {
  // Manually change the slide
  slideIndex += n;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = slides.length;
  }

  // Show the current slide
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[slideIndex - 1].style.display = 'block';
}
// Add event listeners to the buttons
document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
document.querySelector('.next').addEventListener('click', () => changeSlide(1));