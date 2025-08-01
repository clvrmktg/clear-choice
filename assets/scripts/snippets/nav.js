window.addEventListener('resize', function() {
  if (window.matchMedia('(min-width: 1025px)').matches) {
      document.getElementById('click').checked = false;
  }
}, true);

// document.addEventListener('DOMContentLoaded', () => {
//   const checkbox = document.getElementById('click');
//   const nav = document.querySelector('.navigation--main');
//   const focusableSelector = 'a, button, input, [tabindex]:not([tabindex="-1"])';
//   const elementsToKeepFocusable = [document.querySelector('.logo'), checkbox, nav];
  
//   // Get all focusable elements outside the allowed elements
//   const getNonFocusableElements = () => {
//     const focusableElements = document.querySelectorAll(focusableSelector);
//     return Array.from(focusableElements).filter((el) => {
//       return !elementsToKeepFocusable.some((allowed) => allowed.contains(el));
//     });
//   };

//   // Disable or enable focus outside the allowed elements
//   const toggleFocusOutside = (disable) => {
//     const nonFocusableElements = getNonFocusableElements();
//     nonFocusableElements.forEach((element) => {
//       if (disable) {
//         element.setAttribute('tabindex', '-1');
//       } else {
//         element.removeAttribute('tabindex');
//       }
//     });
//   };

//   // Update focusable state based on checkbox status
//   const updateFocusState = () => {
//     if (checkbox.checked) {
//       toggleFocusOutside(true); // Disable focus outside
//       nav.querySelector(focusableSelector)?.focus(); // Focus first item in nav
//     } else {
//       toggleFocusOutside(false); // Enable focus outside
//     }
//   };

//   // Close menu on Escape key
//   const handleEscapeKey = (event) => {
//     if (event.key === 'Escape' && checkbox.checked) {
//       checkbox.checked = false; // Uncheck the checkbox
//       updateFocusState(); // Update focusable state
//     }
//   };

//   // Listen for changes on the checkbox
//   checkbox.addEventListener('change', updateFocusState);

//   // Listen for Escape key globally
//   document.addEventListener('keydown', handleEscapeKey);

//   // Initialize correct state
//   updateFocusState();
// });
