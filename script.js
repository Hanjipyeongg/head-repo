document.addEventListener('DOMContentLoaded', function() {
  const carousel = document.querySelector('.carousel');
  const carouselInner = carousel.querySelector('.carousel-inner');
  const carouselItems = carousel.querySelectorAll('.carousel-item');
  const prevButton = carousel.querySelector('.prev');
  const nextButton = carousel.querySelector('.next');
  let currentIndex = 0;

  // Set the initial active item
  carouselItems[currentIndex].classList.add('active');

  // Function to move the carousel to the specified index
  function moveTo(index) {
    // Remove active class from all items
    carouselItems.forEach(item => item.classList.remove('active'));

    // Add active class to the specified index item
    carouselItems[index].classList.add('active');

    // Calculate the translation amount
    const translateX = -carouselItems[index].offsetLeft;
    carouselInner.style.transform = `translateX(${translateX}px)`;
  }

  // Event listener for previous button click
  prevButton.addEventListener('click', function() {
    currentIndex = (currentIndex === 0) ? carouselItems.length - 1 : currentIndex - 1;
    moveTo(currentIndex);
  });

  // Event listener for next button click
  nextButton.addEventListener('click', function() {
    currentIndex = (currentIndex === carouselItems.length - 1) ? 0 : currentIndex + 1;
    moveTo(currentIndex);
  });
});
