
    jQuery(document).ready(function ($) {
      $(".slider-img").on("click", function () {
        const $this = $(this);
  
        // Remove active class from all images
        $(".slider-img").removeClass("active");
  
        // Add active class to the clicked image
        $this.addClass("active");
  
        // Wait for the transition to finish before redirecting
        $this.one("transitionend webkitTransitionEnd oTransitionEnd", function () {
          const img = $this.find("img");
          const url = img.attr("onclick").match(/location\.href=['"](.*?)['"]/)[1];
  
          // Navigate to the desired URL
          if (url) {
            window.location.href = url;
          }
        });
        // If the image is already active, navigate immediately
      if ($this.hasClass("active")) {
        window.location.href = url;
      }
      });
      
    });

    function animateAndNavigate(element, url) {
  // Add the 'clicked' class to trigger the animation
  element.classList.add('clicked');

  // Navigate to the URL after a short delay to allow the animation to start
  setTimeout(function() {
    window.location.href = url;
  }, 1000); // Adjust the delay as needed to match your animation timing
}

