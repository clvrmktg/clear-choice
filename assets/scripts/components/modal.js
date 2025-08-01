// const modal = document.querySelector('[data-modal]')

// const openButton = document.querySelector('[data-open-button]')

// openButton.addEventListener('click', ()=> {
//   modal.showModal()
//   console.log('modal open')
// })

// const closeButton = document.querySelector('[data-close-button]')

// closeButton.addEventListener('click', ()=> {
//   modal.close()
//   console.log('modal close')
// })

// modal.addEventListener('click', () => modal.close());

// const calender = document.getElementById('calender');

// calender.addEventListener('click', (event) => {
//   event.stopPropagation()
//   console.log('modal close')
// });

// window.addEventListener('load', function() {
//     setTimeout(function() {
//       var script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = 'https://assets.calendly.com/assets/external/widget.js';
//       document.body.appendChild(script);
//     }, 3000); // 2000 milliseconds = 2 seconds
//   });


document.addEventListener("DOMContentLoaded", () => {
  // Handle opening modals
  document.querySelectorAll("[data-open-button]").forEach(button => {
      const targetId = button.getAttribute("data-target");

      if (!targetId) return; // Skip buttons without a data-target

      const modal = document.getElementById(targetId);
      if (modal) {
          button.addEventListener("click", () => {
              modal.showModal();
              modal.setAttribute("aria-hidden", "false");
              console.log(`Modal ${targetId} opened`);
          });
      } else {
          console.error(`Modal with id "${targetId}" not found`);
      }
  });

  // Handle closing modals
  document.querySelectorAll("[data-close-button]").forEach(button => {
      const targetId = button.getAttribute("data-target");

      if (!targetId) return; // Skip buttons without a data-target

      const modal = document.getElementById(targetId);
      if (modal) {
          button.addEventListener("click", () => {
              modal.close();
              modal.setAttribute("aria-hidden", "true");
              console.log(`Modal ${targetId} closed via button`);
          });
      } else {
          console.error(`Modal with id "${targetId}" not found for close button`);
      }
  });

  // Handle closing modals via backdrop click
  document.querySelectorAll("dialog[data-modal]").forEach(modal => {
      modal.addEventListener("click", event => {
          if (event.target === modal) {
              modal.close();
              modal.setAttribute("aria-hidden", "true");
              console.log(`Modal ${modal.id} closed via backdrop`);
          }
      });
  });
});



