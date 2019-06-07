// Get all elements one and for all
var leftArrow = document.querySelector('.slider__arrow--left'),
    rightArrow = document.querySelector('.slider__arrow--right'),
    slides = document.querySelector('.slider__slides'),
    slidersWidth = slides.offsetWidth, // Size of the slider
    canMove = true, // Boolean blocking the navigation during transitions
    position = 0; // Where we are

// Duplicate the first slide to the end for infinite effect
slides.appendChild(slides.querySelector('img').cloneNode());
var slidesLength = slides.querySelectorAll('.slider__slide').length;

// Go to next slide when clicking right arrow
rightArrow.addEventListener('click', next);

// Go to previous slide when clicking left arrow
leftArrow.addEventListener('click', previous);

window.addEventListener('keydown', function(event) {
  switch(event.key) {
    case 'ArrowLeft':
      previous(); // Go to previous slide when hitting left key
      break;
    case 'ArrowRight':
      next(); // Go to next slide when hitting right key
      break;
    default:
      break;
  }
});

function next() {
  if(canMove && position < slidesLength - 1) {
    moveTo(position + 1);
   
    // If the end is reached after the move
    if (position === slidesLength - 1) {
      setTimeout(function() {
        jumpTo(0); // Jump back to the start
      }, 300);
    }
  }
}

function previous() {
  if(canMove && position >= 0){
    if (position === 0) { // If we're at the start
      jumpTo(slidesLength - 1, function() { // Jump to the end
        moveTo(position - 1); // Then move to the previous slide
      });
    } else {
      moveTo(position - 1);
    }
  }
}

function moveTo(newPosition, jump) {
  if (!jump) { // Block the navigation for the duration of the transition (except when juming)
    canMove = false;
    setTimeout(function() {
      canMove = true;
    }, 300);
  }
  
  position = newPosition; // Update the position
  slides.style.transform = 'translateX(' + position * -slidersWidth + 'px)'; // Update the style
};

function jumpTo(newPosition, callback) {
  window.requestAnimationFrame(function() { // Wait for the next frame
    slides.style.transition = 'none'; // Cancel transition
    moveTo(newPosition, true); // Jump to the new position

    window.requestAnimationFrame(function() { // Wait for the next frame
      slides.style.transition = 'transform 300ms'; // Reset transition
      
      if (callback) { // Call callback if any
        callback();
      }
    });
  });
}