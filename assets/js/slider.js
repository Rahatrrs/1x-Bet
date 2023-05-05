// Get the indicators
const indicators = document.querySelectorAll('.indicator');

// Get the swiper instance
const swiper = new Swiper('.swiper', {
  // Options for the swiper
  // ...
  
  // Update the indicators when the slide changes
  on: {
    slideChange: function() {
      // Remove the active class from all indicators
      indicators.forEach((indicator) => {
        indicator.classList.remove('active');
      });
      
      // Add the active class to the current indicator
      indicators[swiper.realIndex].classList.add('active');
    }
  }
});

// Add event listeners to the indicators
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    // Set the current slide to the index of the clicked indicator
    swiper.slideTo(index);
  });
});
