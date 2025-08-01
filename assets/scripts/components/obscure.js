// let newNode;
//   document.querySelectorAll('[obscure]').forEach(elem => {

//       newNode = document.createElement('span');
//       newNode.innerHTML = elem.innerHTML;
//       elem.classList ? newNode.classList = elem.classList : false;
//       elem.id ? newNode.id = elem.id : false;

//       for (let prop in elem.dataset) {
//           newNode.innerHTML = newNode.innerHTML.replaceAll('%' + prop.replace('p', ''), elem.dataset[prop]);
//       }

//       elem.parentNode.insertBefore(newNode, elem);
//       elem.remove();
//   });

// Select all elements with the "obscure" attribute
document.querySelectorAll("[obscure]").forEach((elem) => {
  // Create a new <span> element to replace the existing element
  const newNode = document.createElement("span");
  
  // Copy the inner HTML content from the original element
  newNode.innerHTML = elem.innerHTML;

  // If the original element has classes, transfer them to the new element
  if (elem.classList.length) newNode.className = elem.className;

  // If the original element has an ID, transfer it to the new element
  if (elem.id) newNode.id = elem.id;

  // Loop through each data attribute (dataset) of the original element
  Object.entries(elem.dataset).forEach(([key, value]) => {
      // Replace all occurrences of "%<key>" (excluding the "p" prefix) in the innerHTML
      newNode.innerHTML = newNode.innerHTML.replaceAll(`%${key.replace(/^p/, '')}`, value);
  });

  // Replace the original element with the newly created one
  elem.replaceWith(newNode);
});

// // Select all <template> elements with the "obscure" attribute
// document.querySelectorAll("template[obscure]").forEach((elem) => {
//   // Create a new <span> element to replace the <template>
//   const newNode = document.createElement("span");

//   // Extract the content inside <template> and set it as innerHTML
//   newNode.innerHTML = elem.innerHTML;

//   // Transfer class names from <template> to <span>, if present
//   if (elem.classList.length) newNode.className = elem.className;

//   // Transfer ID from <template> to <span>, if present
//   if (elem.id) newNode.id = elem.id;

//   // Loop through each data attribute (dataset) of the original <template>
//   Object.entries(elem.dataset).forEach(([key, value]) => {
//       // Replace all occurrences of "%<key>" (excluding the "p" prefix) in the content
//       newNode.innerHTML = newNode.innerHTML.replaceAll(`%${key.replace(/^p/, '')}`, value);
//   });

//   // Replace the <template> with the new <span> element
//   elem.replaceWith(newNode);
// });



// 'use strict';

// class DisclosureButton {
//   constructor(buttonNode) {
//     this.buttonNode = buttonNode;
//     this.controlledNode = false;

//     // Get the ID of the content controlled by the button
//     const id = this.buttonNode.getAttribute('aria-controls');
    
//     // Reference the controlled content (answer)
//     if (id) {
//       this.controlledNode = document.getElementById(id);
//   }

//     // Initially set aria-expanded to false
//     this.buttonNode.setAttribute('aria-expanded', 'false');

//     // Add event listener for click
//     this.buttonNode.addEventListener('click', this.onClick.bind(this));
//   }

//   // Remove 'open' from all .answer elements and set aria-expanded to false for all buttons
//   static closeAll() {
//     const allButtons = document.querySelectorAll('button[aria-expanded]');
//     const allAnswers = document.querySelectorAll('.answer');

//     // Reset aria-expanded to false for all buttons
//     allButtons.forEach((button) => {
//       button.setAttribute('aria-expanded', 'false');
//     });

//     // Remove 'open' attribute from all answers
//     allAnswers.forEach((answer) => {
//       answer.removeAttribute('open');
//     });
//   }

//   // Show content by adding the 'open' attribute
//   showContent() {
//     if (this.controlledNode) {
//       this.controlledNode.setAttribute('open', '');
//     }
//   }

//   // Hide content by removing the 'open' attribute
//   hideContent() {
//     if (this.controlledNode) {
//       this.controlledNode.removeAttribute('open');
//     }
//   }

//   // Toggle the aria-expanded state and manage the 'open' attribute
//   toggleExpand() {
//     const isExpanded = this.buttonNode.getAttribute('aria-expanded') === 'true';

//     // Close all answers first
//     DisclosureButton.closeAll();

//     // If the clicked button is not expanded, open its corresponding answer
//     if (!isExpanded) {
//       this.buttonNode.setAttribute('aria-expanded', 'true');
//       this.showContent();
//     }
//   }

//   /* EVENT HANDLER */
//   onClick() {
//     this.toggleExpand();
//   }
// }

// /* Initialize the buttons */
// window.addEventListener('load', function () {
//   const buttons = document.querySelectorAll('button[aria-expanded][aria-controls]');

//   // Create a DisclosureButton instance for each button
//   buttons.forEach((button) => {
//     new DisclosureButton(button);
//   });
// });

