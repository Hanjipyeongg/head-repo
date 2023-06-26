var cardContainer = document.getElementById("cardContainer");
  var cardWrapper = document.getElementById("cardWrapper");
  var scrollLeftButton = document.getElementById("scroll-left");
  var scrollRightButton = document.getElementById("scroll-right");
  // Scroll container to the left
  scrollLeftButton.addEventListener("click", function() {
    cardContainer.scrollBy({
      left: -200, // Adjust the value based on scroll amount
      behavior: "smooth" // Optional smooth scrolling effect
    });
  });

  // Scroll container to the right
  scrollRightButton.addEventListener("click", function() {
    cardContainer.scrollBy({
      left: 200, // Adjust the value based on scroll amount
      behavior: "smooth" // Optional smooth scrolling effect
    });
  });