function simulateClick(element) {
  // Create a mouse click event
  const event = new MouseEvent('click', {
    bubbles: true,
    cancelable: true,
    view: window
  });
  // Dispatch the event to simulate a click
  element.dispatchEvent(event);
}

// Get all the social media links (elements with the class 'social-link')
const socialLinks = document.querySelectorAll('.social-link');

// Add an event listener for when the user hovers over a social link
socialLinks.forEach(link => {
  link.addEventListener('mouseover', function() {
    // Simulate a click when hovering
    simulateClick(link);
  });
});